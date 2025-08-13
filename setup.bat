@echo off
echo 🌤️  Weather App Setup Script
echo ==============================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js is installed

REM Setup Backend
echo.
echo 🔧 Setting up Backend...
cd backend
call npm install
echo ✅ Backend dependencies installed

REM Setup Frontend
echo.
echo 🔧 Setting up Frontend...
cd ..\frontend
call npm install
echo ✅ Frontend dependencies installed

echo.
echo 🎉 Setup completed successfully!
echo.
echo 📋 Next steps:
echo 1. Get your OpenWeatherMap API key from https://openweathermap.org/
echo 2. Edit backend/config.env and add your API key
echo 3. Start the backend: cd backend ^&^& npm run dev
echo 4. Start the frontend: cd frontend ^&^& npm start
echo.
echo 🌐 Backend will run on: http://localhost:5000
echo 🌐 Frontend will run on: http://localhost:3000
pause
