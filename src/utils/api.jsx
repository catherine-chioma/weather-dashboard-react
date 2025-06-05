const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Single city weather API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
export async function fetchWeatherByCity(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return await response.json();
}

// Multiple cities weather API
const BASE_GROUP_URL = 'https://api.openweathermap.org/data/2.5/group';
export async function fetchWeatherByCityIds(cityIds) {
  if (!cityIds || cityIds.length === 0) {
    throw new Error('No city IDs provided');
  }
  
  const ids = cityIds.join(',');
  const url = `${BASE_GROUP_URL}?id=${ids}&units=metric&appid=${API_KEY}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return await response.json();
}


