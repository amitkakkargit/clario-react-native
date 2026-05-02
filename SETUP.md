# Setup Guide for ClarioSense React Native

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** (usually comes with Node.js)
- **Git**
- **Expo CLI** - Install globally: `npm install -g expo-cli`

### For iOS Development (macOS only)

- **Xcode** (from App Store)
- **CocoaPods** - Install: `sudo gem install cocoapods`
- **iOS SDK** (included with Xcode)

### For Android Development

- **Android Studio** - [Download](https://developer.android.com/studio)
- **Android SDK** (API 28+)
- **Android emulator** (set up in Android Studio)

## Installation Steps

### 1. Clone or Navigate to Project

```bash
cd d:\Projects\clario-react-native
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages from `package.json`:

- expo and expo-router
- react and react-native
- TypeScript
- Navigation libraries
- And more...

### 3. Start Development Server

```bash
npm start
```

You should see:

```
› Press 'a' to open Android
› Press 'i' to open iOS
› Press 'w' to open web
› Press 'r' to reload
› Press 's' to send a log, 'u' to show usage
```

## Running on Different Platforms

### iOS Simulator (macOS only)

```bash
npm run ios
```

Or from the dev menu, press `i`.

**Note:** First run takes a few minutes as it builds the native project.

### Android Emulator

```bash
npm run android
```

Or from the dev menu, press `a`.

**Prerequisites:**

- Android emulator must be running (launch from Android Studio)
- Or use: `emulator -avd Pixel_5_API_30` (adjust AVD name as needed)

### Physical Device (Expo Go)

1. Install **Expo Go** app:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Start dev server: `npm start`

3. Scan QR code with your phone camera or Expo Go app

4. App launches on your device

## Development Workflow

### File-Based Routing

App uses Expo Router for file-based routing. File structure determines routes:

```
app/(tabs)/index.tsx     → Home screen
app/analyzer.tsx         → /analyzer route
app/results.tsx          → /results route
```

### Making Changes

Edit files in `app/` and `src/` directories. Changes hot-reload automatically when you save.

### TypeScript

The project uses TypeScript. TypeScript errors show in terminal but don't block the app from running.

To check types:

```bash
npm run typecheck
```

## Building for Production

### iOS Build

```bash
npm run build-ios
```

This requires:

- Apple Developer Account ($99/year)
- Signing certificates set up in Xcode
- Takes 15-20 minutes

### Android Build

```bash
npm run build-android
```

This requires:

- Google Play Developer Account ($25 one-time)
- Signing key setup
- Takes 10-15 minutes

## Troubleshooting

### "Module not found" errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Metro bundler issues

```bash
# Reset metro cache
npm start -- --reset-cache
```

### iOS Build Failures

```bash
# Clean Xcode build
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
npm run ios
```

### Android Build Failures

```bash
# Clean Android gradle cache
cd android
./gradlew clean
cd ..
npm run android
```

### Port already in use

If port 8081 is in use:

```bash
# Kill process on port 8081 (Unix/Mac)
lsof -ti:8081 | xargs kill -9

# Or on Windows
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

## Project Structure

```
clario-react-native/
├── app/                           # App routes (Expo Router)
│   ├── (tabs)/
│   │   ├── index.tsx             # Home screen
│   │   ├── _layout.tsx           # Tab navigator
│   │   └── explore.tsx           # Explore tab
│   ├── analyzer.tsx              # Job analyzer screen
│   ├── results.tsx               # Results screen
│   ├── _layout.tsx               # Root layout/navigation
│   └── modal.tsx                 # Modal example
│
├── src/                           # Source code
│   ├── types/
│   │   └── index.ts              # TypeScript definitions
│   ├── utils/
│   │   └── analyzer/             # Analysis logic
│   │       ├── index.ts          # Main analyzer
│   │       ├── constants.ts      # Skills & patterns
│   │       ├── skillExtractor.ts
│   │       ├── skillMatcher.ts
│   │       ├── visaAnalyzer.ts
│   │       ├── seniorityDetector.ts
│   │       ├── locationDetector.ts
│   │       ├── scorer.ts
│   │       ├── redFlagDetector.ts
│   │       ├── compensationAnalyzer.ts
│   │       ├── roleClarityAnalyzer.ts
│   │       └── growthSignalAnalyzer.ts
│   ├── components/               # Reusable components
│   ├── screens/                  # Screen components
│   └── navigation/               # Navigation config
│
├── assets/                        # Images, fonts, icons
├── app.json                       # Expo configuration
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── eslint.config.js              # ESLint config
└── README.md                      # Project docs
```

## Key Technologies

- **React Native 0.81** - Cross-platform UI framework
- **Expo 54** - Development platform (abstracts platform complexity)
- **TypeScript 5.9** - Type-safe JavaScript
- **Expo Router 6** - File-based routing system
- **React Native Reanimated 4** - High-performance animations
- **React Navigation 7** - Navigation primitives

## Performance Tips

1. **Use `FlatList` for long lists** - Not `ScrollView`
2. **Memoize expensive components** - `React.memo()`, `useMemo()`
3. **Optimize images** - Use appropriate sizes, formats
4. **Lazy load screens** - Dynamic imports where possible
5. **Profile with React DevTools** - `npm start` → `j` for profiler

## Debugging

### React DevTools

```bash
npm start
# Press 'j' to open debugger
```

### Console Logs

Visible in terminal and Xcode/Android Studio console.

### Network Requests

Install Redux DevTools for network inspection:

```bash
npm install --save-dev @react-native-async-storage/async-storage
```

## Common Commands Reference

```bash
npm start              # Start dev server
npm run ios           # Build and run iOS
npm run android       # Build and run Android
npm run build-ios     # Create iOS production build
npm run build-android # Create Android production build
npm run lint          # Check code style
npm run typecheck     # Check TypeScript types
npm test              # Run tests (when configured)
```

## Next Steps

1. Explore the app in the simulator/emulator
2. Try modifying `app/(tabs)/index.tsx`
3. Navigate to `/analyzer` route
4. Test skill matching with sample job descriptions
5. Review analyzer logic in `src/utils/analyzer/`
6. Customize colors, fonts, and styling to your brand

## Getting Help

- [Expo Docs](https://docs.expo.dev/) - Official documentation
- [React Native Docs](https://reactnative.dev/) - React Native guide
- [Expo GitHub Issues](https://github.com/expo/expo/issues) - Bug reports
- [React Native Community](https://reactnative.dev/help) - Community support

## Resources

- [Expo Snack](https://snack.expo.dev/) - Online code playground
- [Expo Examples](https://github.com/expo/examples) - Code examples
- [React Native Library](https://reactnativelibraryorg/) - Component library
- [Native modules guide](https://docs.expo.dev/modules/overview/) - Native code

## License

Proprietary - ClarioSense 2026

---

**Happy coding! 🚀**

If you run into issues, check the troubleshooting section or refer to the official documentation links above.
