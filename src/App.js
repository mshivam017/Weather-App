import React, { useState, useEffect } from 'react';
import { Search, Cloud, Sun, CloudRain, Wind, Eye, Droplets, Thermometer, Gauge, MapPin, Calendar } from 'lucide-react';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '1e3e8f230b6064d27976e41163a82b77';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found! Please check spelling.');
        } else if (response.status === 401) {
          throw new Error('API key invalid!');
        } else {
          throw new Error('Failed to fetch weather data.');
        }
      }

      const data = await response.json();
      setWeatherData(data);
      
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!city.trim()) {
      setError('Please enter a city name!');
      return;
    }
    fetchWeather(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchWeather('Mumbai');
  }, []);

  const getWeatherIcon = (weatherMain) => {
    const iconProps = { className: "text-white drop-shadow-lg w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" };
    
    switch (weatherMain?.toLowerCase()) {
      case 'clear':
        return <Sun {...iconProps} className="text-yellow-300 drop-shadow-lg animate-pulse w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />;
      case 'clouds':
        return <Cloud {...iconProps} />;
      case 'rain':
      case 'drizzle':
        return <CloudRain {...iconProps} className="text-blue-300 drop-shadow-lg w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />;
      default:
        return <Cloud {...iconProps} />;
    }
  };

  const getBackgroundGradient = (weatherMain) => {
    switch (weatherMain?.toLowerCase()) {
      case 'clear':
        return 'from-yellow-400 via-orange-400 to-pink-500';
      case 'clouds':
        return 'from-gray-400 via-gray-500 to-gray-600';
      case 'rain':
      case 'drizzle':
        return 'from-blue-500 via-blue-600 to-indigo-700';
      default:
        return 'from-blue-500 via-purple-500 to-indigo-600';
    }
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${weatherData ? getBackgroundGradient(weatherData.weather[0].main) : 'from-blue-500 via-purple-500 to-indigo-600'} transition-all duration-1000 ease-in-out`}>
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-5 -left-5 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-10 left-1/4 w-36 h-36 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen p-3 sm:p-6 lg:p-8">
        {/* Mobile: Single Column, Tablet: 1-2 Columns, Desktop: 2-3 Columns Layout */}
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section - Responsive */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              Weather App
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 drop-shadow">
              Get real-time weather information anywhere
            </p>
            <div className="mt-3 sm:mt-4 text-white/70 text-xs sm:text-sm lg:text-base">
              <p className="flex items-center justify-center gap-2">
                <Calendar size={16} />
                {getCurrentDate()} • {getCurrentTime()}
              </p>
            </div>
          </div>

          {/* Main Content Grid - Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            {/* Left Column: Search + Main Weather (Mobile: Full Width, Desktop: 2/3 Width) */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              
              {/* Search Section - Responsive */}
              <div className="backdrop-blur-md bg-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/30">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter city name..."
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-none outline-none bg-white/90 text-gray-800 placeholder-gray-500 text-sm sm:text-base lg:text-lg shadow-lg transition-all duration-300 focus:scale-105 focus:shadow-xl"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 shadow-lg font-medium text-sm sm:text-base"
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 inline-block sm:mr-2" />
                    <span className="hidden sm:inline">Search</span>
                  </button>
                </div>
              </div>

              {/* Main Weather Card - Responsive */}
              {weatherData && !loading && (
                <div className="backdrop-blur-md bg-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/30 animate-fade-in">
                  <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                    
                    {/* Left Side: Location & Weather */}
                    <div className="mb-4 sm:mb-0">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow flex items-center justify-center sm:justify-start gap-2">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                        {weatherData.name}, {weatherData.sys.country}
                      </h2>
                      <p className="text-base sm:text-lg lg:text-xl text-white/90 capitalize drop-shadow mb-2">
                        {weatherData.weather[0].description}
                      </p>
                      <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg animate-scale-in">
                        {Math.round(weatherData.main.temp)}°C
                      </div>
                    </div>
                    
                    {/* Right Side: Weather Icon */}
                    <div className="flex justify-center sm:justify-end animate-float">
                      {getWeatherIcon(weatherData.weather[0].main)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Weather Details (Mobile: Full Width, Desktop: 1/3 Width) */}
            <div className="space-y-4 sm:space-y-6">
              
              {/* Loading State */}
              {loading && (
                <div className="backdrop-blur-md bg-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30 text-center">
                  <div className="animate-spin w-8 h-8 sm:w-12 sm:h-12 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-white text-sm sm:text-base lg:text-lg">Loading weather data...</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="backdrop-blur-md bg-red-500/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-red-300/50 text-center animate-shake">
                  <p className="text-white font-semibold text-sm sm:text-base">{error}</p>
                </div>
              )}

              {/* Weather Details Grid */}
              {weatherData && !loading && (
                <div className="backdrop-blur-md bg-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/30 animate-fade-in">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center lg:text-left">Weather Details</h3>
                  
                  {/* Responsive Grid: 2 cols on mobile, 2-3 cols on tablet, 1-2 cols on desktop */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                    
                    <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <Thermometer className="text-orange-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/70 text-xs sm:text-sm">Feels Like</p>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                          {Math.round(weatherData.main.feels_like)}°C
                        </p>
                      </div>
                    </div>

                    <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <Droplets className="text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/70 text-xs sm:text-sm">Humidity</p>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                          {weatherData.main.humidity}%
                        </p>
                      </div>
                    </div>

                    <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <Wind className="text-green-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/70 text-xs sm:text-sm">Wind Speed</p>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                          {weatherData.wind.speed} m/s
                        </p>
                      </div>
                    </div>

                    <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <Gauge className="text-purple-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/70 text-xs sm:text-sm">Pressure</p>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                          {weatherData.main.pressure} hPa
                        </p>
                      </div>
                    </div>

                    <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <Eye className="text-cyan-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/70 text-xs sm:text-sm">Visibility</p>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                          {(weatherData.visibility / 1000).toFixed(1)} km
                        </p>
                      </div>
                    </div>

                    <div className="backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center mb-2">
                        <Cloud className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-white/70 text-xs sm:text-sm">Cloudiness</p>
                        <p className="text-white font-bold text-sm sm:text-base lg:text-lg">
                          {weatherData.clouds.all}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WeatherApp;