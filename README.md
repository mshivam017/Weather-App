API_KEY = '1e3e8f230b6064d27976e41163a82b77'

# 🌤️ Modern Weather App

A beautiful, responsive weather application built with React that provides real-time weather information for any city worldwide. Features a modern glassmorphism design with dynamic backgrounds and smooth animations.

![Weather App Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Responsive](https://img.shields.io/badge/Design-Responsive-purple)

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** - Frosted glass effect with backdrop blur
- **Dynamic Backgrounds** - Changes based on weather conditions
- **Smooth Animations** - Float, fade-in, and scale effects
- **Beautiful Icons** - Lucide React icons with weather-specific styling

### 📱 **Fully Responsive**
- **Mobile First** - Optimized for mobile devices (320px+)
- **Tablet Ready** - Perfect layout for tablets (768px+)
- **Desktop Enhanced** - Multi-column layout for desktops (1024px+)
- **Touch Friendly** - Large buttons and intuitive interactions

### 🌍 **Weather Features**
- Real-time weather data from OpenWeatherMap API
- Current temperature with "feels like" temperature
- Weather conditions with descriptive text
- Detailed metrics: humidity, wind speed, pressure, visibility, cloudiness
- Location display with country information
- Current date and time display

### ⚡ **Performance**
- Fast loading and smooth interactions
- Error handling with user-friendly messages
- Loading states with animated spinners
- Automatic weather loading on app start

## 🛠️ Technologies Used

- **React 18+** - Modern React with Hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **OpenWeatherMap API** - Reliable weather data source
- **CSS Animations** - Custom keyframe animations
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

4. **Configure API key**
   - Open the main component file
   - Replace the `API_KEY` variable with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically load weather for Mumbai


## 🎯 Usage

### Basic Usage
1. Enter a city name in the search box
2. Click "Search" or press Enter
3. View real-time weather information
4. Explore detailed weather metrics

### Features Guide
- **Search**: Type any city name worldwide
- **Responsive**: Use on any device - mobile, tablet, or desktop
- **Dynamic Theme**: Background changes based on weather conditions
- **Detailed Info**: View comprehensive weather metrics
- **Error Handling**: Get helpful messages for invalid cities

## 📱 Responsive Breakpoints

| Device | Screen Size | Layout |
|--------|-------------|--------|
| Mobile | 320px - 768px | Single column, compact cards |
| Tablet | 768px - 1024px | Hybrid layout, medium sizing |
| Desktop | 1024px+ | Three-column layout, large display |

## 🎨 Weather Themes

The app dynamically changes its appearance based on weather conditions:

- **☀️ Clear Sky** - Warm gradient (yellow to pink)
- **☁️ Clouds** - Cool gradient (gray tones)
- **🌧️ Rain** - Blue gradient (blue to indigo)
- **🌈 Default** - Purple gradient (blue to indigo)

## 🔧 Configuration

### API Configuration
```javascript
const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
```

### Customization Options
- **Default City**: Change the initial city in `useEffect`
- **Temperature Units**: API supports metric, imperial, and kelvin
- **Language**: Add language parameter to API calls
- **Refresh Interval**: Add auto-refresh functionality

## 🌐 API Reference

This app uses the OpenWeatherMap Current Weather Data API:

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

### Response Data Used
- `name` - City name
- `sys.country` - Country code
- `main.temp` - Current temperature
- `main.feels_like` - Perceived temperature
- `main.humidity` - Humidity percentage
- `main.pressure` - Atmospheric pressure
- `weather[0].main` - Weather condition
- `weather[0].description` - Weather description
- `wind.speed` - Wind speed
- `visibility` - Visibility distance
- `clouds.all` - Cloudiness percentage

## 🐛 Troubleshooting

### Common Issues

**API Key Issues**
- Ensure your API key is active (may take a few hours after registration)
- Check for typos in the API key
- Verify your API key permissions

**City Not Found**
- Check spelling of city name
- Try using English city names
- Include country code for better results (e.g., "London, UK")

**Network Issues**
- Check internet connection
- Verify API endpoint is accessible
- Check for CORS issues in browser console

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the amazing frontend library


**Made with ❤️ and React**

*Happy Weather Checking! 🌤️*
