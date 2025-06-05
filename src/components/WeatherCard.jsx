import React from 'react';

const WeatherCard = ({ weather, onBookmark }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}&deg;C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <button onClick={onBookmark}>Bookmark</button>
    </div>
  );
};

export default WeatherCard;
