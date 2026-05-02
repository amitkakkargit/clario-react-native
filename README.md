# ClarioSense React Native

A React Native app for iOS and Android that analyzes job descriptions and evaluates candidate-job fit using AI-powered insights.

## Features

- **Job Description Analysis** - Paste job postings for comprehensive analysis
- **Skills Matching** - Compare your skills against job requirements with detailed breakdown
- **Smart Recommendations** - Get actionable "Apply", "Maybe", or "Skip" recommendations
- **Visa Sponsorship Detection** - Identify visa sponsorship signals and requirements
- **Compensation Review** - Evaluate salary transparency and benefits offerings
- **Role Clarity Analysis** - Assess role expectations and growth opportunities
- **Seniority Detection** - Identify role seniority level from job posting
- **Location Detection** - Determine remote, hybrid, or on-site requirements

## Quick Start

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm start
   ```

3. Run on your device:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

## Development

### iOS Development

```bash
npm run ios
```

### Android Development

```bash
npm run android
```

### Build for Production

```bash
npm run build-ios    # Build iOS app
npm run build-android # Build Android app
```

## Project Structure

```
app/
  (tabs)/              # Tab navigation
    index.tsx          # Home screen with features
  analyzer.tsx         # Job analyzer input
  results.tsx          # Analysis results
  _layout.tsx          # Navigation layout

src/
  types/               # TypeScript types
  utils/analyzer/      # Core analysis logic
```

## How It Works

1. **Paste Job Description** - Enter a job posting in the analyzer
2. **Add Your Skills** - (Optional) Enter your skills for personalized matching
3. **Get Analysis** - AI analyzes skills, visa, seniority, location, compensation
4. **View Results** - Receive fit score (0-100) and detailed recommendations

## Supported Skills

The analyzer recognizes 100+ technical skills across:

- Programming Languages (JavaScript, Python, Java, Go, Rust, etc.)
- Frameworks (React, Vue, Angular, Next.js, Django, Spring, etc.)
- Cloud (AWS, Azure, GCP, Docker, Kubernetes, Terraform, etc.)
- Databases (PostgreSQL, MongoDB, Redis, Elasticsearch, etc.)
- DevOps (CI/CD, GitHub Actions, Jenkins, ArgoCD, etc.)
- Data & ML (Spark, TensorFlow, PyTorch, Kafka, dbt, etc.)
- Mobile (React Native, Flutter, iOS, Android, Expo, etc.)
- Testing (Jest, Cypress, Playwright, Vitest, etc.)
- Soft Skills & More

## Technologies

- **React Native 0.81** - Cross-platform app development
- **Expo 54** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **Expo Router** - File-based routing
- **React Native Reanimated** - Smooth animations

## Platform Support

- **iOS** - iPhone and iPad (iOS 14+)
- **Android** - Android devices (Android 8+)

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
