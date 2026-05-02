#!/bin/bash
# Quick Start Script for ClarioSense React Native

echo "🚀 ClarioSense React Native - Quick Start"
echo "==========================================="
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first:"
    echo "   https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm detected: $(npm --version)"
echo ""

# Check if Expo CLI is installed globally
if ! command -v expo &> /dev/null; then
    echo "⚠️  Expo CLI not found globally. Installing..."
    npm install -g expo-cli
else
    echo "✅ Expo CLI detected: $(expo --version)"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "📱 Next steps:"
echo ""
echo "1️⃣  Start the development server:"
echo "   npm start"
echo ""
echo "2️⃣  Choose your platform:"
echo "   • Press 'i' for iOS simulator"
echo "   • Press 'a' for Android emulator"
echo "   • Scan QR code with Expo Go app"
echo ""
echo "3️⃣  Or run directly:"
echo "   npm run ios      # iOS"
echo "   npm run android  # Android"
echo ""
echo "📖 For more details, see SETUP.md"
echo ""
