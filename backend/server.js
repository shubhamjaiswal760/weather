// ========================================
// WEATHER APP BACKEND SERVER
// ========================================

// Import required packages
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ========================================
// MIDDLEWARE CONFIGURATION
// ========================================
app.use(cors({
  origin: 'https://ubiquitous-cucurucho-98063a.netlify.app',
}));
app.use(express.json());

// ========================================
// API ROUTES
// ========================================

// Weather API endpoint - Get weather data for a city
app.get('/api/weather/:city', async (req, res) => {
  try {
    // Extract city from request parameters
    const { city } = req.params;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    // Debug logging
    console.log('API Key from env:', apiKey ? 'Present' : 'Missing');
    console.log('API Key value:', apiKey);
    
    // Validate API key
    if (!apiKey || apiKey === 'your_openweather_api_key_here') {
      return res.status(500).json({
        error: 'Weather API key not configured. Please add your OpenWeather API key to .env file.'
      });
    }

    // Fetch weather data from OpenWeatherMap API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );

    // Format weather data for frontend
    const weatherData = {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      feelsLike: Math.round(response.data.main.feels_like)
    };

    // Send formatted data to frontend
    res.json(weatherData);
    
  } catch (error) {
    // Log error details
    console.error('Weather API Error:', error.response?.data || error.message);
    
    // Handle specific error cases
    if (error.response?.status === 404) {
      return res.status(404).json({
        error: 'City not found. Please check the spelling and try again.'
      });
    }
    
    if (error.response?.status === 401) {
      return res.status(401).json({
        error: 'Invalid API key. Please check your OpenWeather API key.'
      });
    }
    
    // Generic error response
    res.status(500).json({
      error: 'Failed to fetch weather data. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Weather API is running' 
  });
});

// ========================================
// SERVER STARTUP
// ========================================
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Weather API endpoint: http://localhost:${PORT}/api/weather/:city`);
});
