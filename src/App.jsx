import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import BookmarkList from './components/BookmarkList';
import './App.css';
import { fetchWeatherByCity } from './utils/api';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      alert('City not found.');
    }
  };

  const addBookmark = () => {
    if (weather && !bookmarks.find(b => b.id === weather.id)) {
      setBookmarks([...bookmarks, weather]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <WeatherCard weather={weather} onBookmark={addBookmark} />
      )}
      <BookmarkList bookmarks={bookmarks} onRemove={removeBookmark} />
    </div>
  );
};

export default App;

