@echo off
REM Quick Start Script for ClarioSense React Native (Windows)

echo.
echo 🚀 ClarioSense React Native - Quick Start
echo ===========================================
echo.

REM Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install it first:
    echo    https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
echo ✅ Node.js detected: %NODE_VER%
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm is not installed.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VER=%%i
echo ✅ npm detected: %NPM_VER%
echo.

REM Check if Expo CLI is installed globally
where expo >nul 2>nul
if %errorlevel% neq 0 (
    echo ⚠️  Expo CLI not found globally. Installing...
    call npm install -g expo-cli
) else (
    for /f "tokens=*" %%i in ('expo --version') do set EXPO_VER=%%i
    echo ✅ Expo CLI detected: %EXPO_VER%
)

echo.
echo 📦 Installing dependencies...
call npm install

echo.
echo ✅ Installation complete!
echo.
echo 📱 Next steps:
echo.
echo 1️⃣  Start the development server:
echo    npm start
echo.
echo 2️⃣  Choose your platform:
echo    * Press 'i' for iOS simulator
echo    * Press 'a' for Android emulator
echo    * Scan QR code with Expo Go app
echo.
echo 3️⃣  Or run directly:
echo    npm run ios      - iOS
echo    npm run android  - Android
echo.
echo 📖 For more details, see SETUP.md
echo.
pause
