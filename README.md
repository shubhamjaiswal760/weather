# 🌤️ Weather App - MERN Stack

A modern, responsive weather application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS. Get real-time weather information for any city worldwide.

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Axios** - HTTP client for API requests
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend

- **React.js** - Frontend JavaScript library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### External APIs

- **OpenWeatherMap API** - Weather data provider

## 🚀 Setup & Run

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd weather
```

### 2. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Navigate to your account dashboard
4. Go to "API keys" section
5. Copy your API key (format: `1234567890abcdef1234567890abcdef`)
6. **Note**: Free tier allows 1000 API calls per day

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo PORT=5000 > .env
echo OPENWEATHER_API_KEY=your_actual_api_key_here >> .env

# Start development server
npm run dev
```

**Backend will run on:** `http://localhost:5000`

### 4. Frontend Setup

```bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Frontend will run on:** `http://localhost:3000`

### 5. Usage

1. **Open your browser** and navigate to `http://localhost:3000`
2. **Enter a city name** in the search field (e.g., "London", "New York", "Tokyo")
3. **Click "Get Weather"** or press Enter
4. **View weather information** including temperature, description, humidity, and wind speed

## 🔧 Available Scripts

### Backend

```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

### Frontend

```bash
npm start      # Start development server
npm build      # Build for production
npm test       # Run tests
```
