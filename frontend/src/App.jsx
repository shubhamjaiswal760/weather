import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await axios.get(`https://weather-backend-zqp1.onrender.com/api/weather/${encodeURIComponent(city)}`);
      setWeatherData(response.data);
    } catch (err) {
      console.error('Error fetching weather:', err);
      setError(err.response?.data?.error || 'Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Weather App</h1>
          <p className="text-white/80">Get current weather information for any city</p>
        </div>

        <div className="weather-card rounded-2xl p-6 shadow-2xl">
          <WeatherForm onSubmit={fetchWeather} loading={loading} />
          
          {error && <ErrorMessage message={error} />}
          
          {weatherData && <WeatherDisplay data={weatherData} />}
        </div>

        <div className="text-center mt-8 text-white/60 text-sm">
          <p>Powered by OpenWeatherMap API</p>
        </div>
      </div>
    </div>
  );
}

export default App;
