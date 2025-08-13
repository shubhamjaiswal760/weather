import React from 'react';

const WeatherDisplay = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-1">
          {data.city}, {data.country}
        </h2>
        <p className="text-white/80 text-sm">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
          className="weather-icon"
        />
        <div className="ml-4 text-left">
          <div className="text-5xl font-bold text-white">
            {data.temperature}°C
          </div>
          <div className="text-white/80 text-lg">
            {capitalizeFirstLetter(data.description)}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Feels Like</div>
          <div className="text-white font-semibold">{data.feelsLike}°C</div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Humidity</div>
          <div className="text-white font-semibold">{data.humidity}%</div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Wind Speed</div>
          <div className="text-white font-semibold">{data.windSpeed} m/s</div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-white/60 text-sm mb-1">Location</div>
          <div className="text-white font-semibold">{data.city}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
