@echo off
REM Quick Start Script for Product Manager UI

echo.
echo 🚀 Product Manager UI - Quick Start
echo ====================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo ✅ Dependencies installed!
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🔧 Starting development server...
echo.
echo The application will open at: http://localhost:5173
echo API Endpoint: https://localhost:7054/api
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
pause
