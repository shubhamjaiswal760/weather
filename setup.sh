#!/bin/bash

echo "🌤️  Weather App Setup Script"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed"

# Setup Backend
echo ""
echo "🔧 Setting up Backend..."
cd backend
npm install
echo "✅ Backend dependencies installed"

# Setup Frontend
echo ""
echo "🔧 Setting up Frontend..."
cd ../frontend
npm install
echo "✅ Frontend dependencies installed"

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Get your OpenWeatherMap API key from https://openweathermap.org/"
echo "2. Edit backend/config.env and add your API key"
echo "3. Start the backend: cd backend && npm run dev"
echo "4. Start the frontend: cd frontend && npm start"
echo ""
echo "🌐 Backend will run on: http://localhost:5000"
echo "🌐 Frontend will run on: http://localhost:3000"
