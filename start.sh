#!/bin/bash
# Quick Start Script for Product Manager UI

echo "🚀 Product Manager UI - Quick Start"
echo "===================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🔧 Starting development server..."
echo ""
echo "The application will open at: http://localhost:5173"
echo "API Endpoint: https://localhost:7054/api"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
