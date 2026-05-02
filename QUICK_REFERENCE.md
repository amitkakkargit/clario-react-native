# 📚 ClarioSense React Native - Quick Reference

## 🚀 Quick Start (Choose One)

### Fastest Start

```bash
cd d:\Projects\clario-react-native
npm install && npm start
```

### Windows Users

```
Double-click: quick-start.bat
```

### Mac/Linux Users

```bash
bash quick-start.sh
```

---

## 📱 Run on Your Device

### iOS (macOS only)

```bash
npm run ios
```

### Android

```bash
npm run android
```

### Phone (Any OS)

1. Install "Expo Go" app
2. Run: `npm start`
3. Scan QR code

---

## 📂 Key Files

### Screens to Visit

- `app/analyzer.tsx` - Job analyzer input
- `app/results.tsx` - Analysis results
- `app/(tabs)/index.tsx` - Home screen

### Analysis Logic

- `src/utils/analyzer/index.ts` - Main analyzer
- `src/utils/analyzer/constants.ts` - Skills (100+)
- `src/utils/analyzer/skillMatcher.ts` - Matching

### Configuration

- `package.json` - Dependencies
- `app.json` - Expo config
- `tsconfig.json` - TypeScript config

---

## 📖 Documentation Files

| File                      | Purpose                 | Read Time |
| ------------------------- | ----------------------- | --------- |
| `README.md`               | Overview                | 5 min     |
| `GETTING_STARTED.md`      | User guide              | 10 min    |
| `SETUP.md`                | Setup + troubleshooting | 20 min    |
| `IMPLEMENTATION.md`       | Technical details       | 15 min    |
| `PROJECT_SUMMARY.md`      | Executive summary       | 5 min     |
| `COMPLETION_CHECKLIST.md` | What's included         | 5 min     |

---

## 🛠️ Common Commands

| Command                 | Purpose              |
| ----------------------- | -------------------- |
| `npm start`             | Start dev server     |
| `npm run ios`           | iOS simulator        |
| `npm run android`       | Android emulator     |
| `npm run build-ios`     | Build for App Store  |
| `npm run build-android` | Build for Play Store |
| `npm install`           | Install dependencies |
| `npm run lint`          | Check code style     |

---

## ✨ App Features

### Screens

- Home screen (Features + CTA)
- Analyzer screen (Input job & skills)
- Results screen (Complete analysis)

### Analysis

- Job description parsing
- Skill extraction & matching
- Visa sponsorship detection
- Seniority level detection
- Location type detection
- Fit score (0-100)
- Recommendations (Apply/Maybe/Skip)

### Recognized Skills

- 100+ technical skills
- 15 skill categories
- Programming, frameworks, cloud, databases, DevOps, ML, mobile, testing, etc.

---

## 📊 Analysis Output

Each job analysis provides:

- **Fit Score**: 0-100 rating
- **Recommendation**: Apply / Maybe / Skip
- **Skill Match**: % of required skills matched
- **Visa Risk**: Low / Medium / High / Unknown
- **Seniority**: Senior / Mid / Junior / Unknown
- **Location**: Remote / Hybrid / On-site
- **Warnings**: Key concerns
- **Details**: Matched & missing skills

---

## 🔧 Troubleshooting

### "Module not found"

```bash
npm install
npm start -- --reset-cache
```

### Port already in use

```bash
npx lsof -ti:8081 | xargs kill -9  # Mac/Linux
```

### iOS build issues

```bash
cd ios && rm -rf Pods && pod install && cd ..
```

### Android build issues

```bash
cd android && ./gradlew clean && cd ..
```

---

## 📍 Project Structure

```
clario-react-native/
├── app/                    # Mobile screens
│   ├── analyzer.tsx       # Job analyzer
│   ├── results.tsx        # Results display
│   └── (tabs)/index.tsx   # Home screen
├── src/utils/analyzer/    # Analysis engine (12 modules)
├── package.json           # Dependencies
├── app.json               # Expo config
├── README.md              # Overview
├── GETTING_STARTED.md     # User guide
└── ...
```

---

## 🎓 Technology Stack

- React Native 0.81
- Expo 54
- TypeScript 5.9
- Expo Router 6
- React Navigation 7

---

## ✅ What's Included

✅ Complete React Native app
✅ iOS + Android support
✅ 12-module analyzer
✅ 100+ recognized skills
✅ Production-ready code
✅ TypeScript throughout
✅ Full documentation
✅ Quick-start scripts
✅ Sample job descriptions

---

## 🚀 Next Steps

1. **Now**: `npm install`
2. **Next**: `npm start`
3. **Then**: Press `i` or `a` or scan QR code
4. **Finally**: Test the app!

---

## 💡 Sample Usage

```typescript
// In analyzer.tsx
const result = analyzeJob(jobDescription, userSkills);

// Result contains:
// - score: 78
// - recommendation: "Apply"
// - skills.percentage: 85
// - visa.risk: "Low"
// - seniority: "mid"
// - location.types: ["remote"]
// - warnings: [...]
```

---

## 📞 Support

- **Expo**: https://docs.expo.dev/
- **React Native**: https://reactnative.dev/
- **Community**: https://chat.expo.dev/

---

## 🎉 You're All Set!

Everything is ready. Start with:

```bash
npm install
npm start
```

**Happy coding! 🚀**

---

**Last Updated**: May 1, 2026  
**Status**: ✅ Production Ready
