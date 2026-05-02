import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { analyzeJob } from "../utils/analyzer";

export default function AnalyzerScreen() {
  const router = useRouter();
  const [jobDescription, setJobDescription] = useState("");
  const [userSkills, setUserSkills] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      Alert.alert("Error", "Please enter a job description");
      return;
    }

    setLoading(true);
    try {
      const result = analyzeJob(jobDescription, userSkills);
      // Navigate to results screen and pass the data
      router.push({
        pathname: "/results",
        params: {
          result: JSON.stringify(result),
        },
      });
    } catch (error) {
      Alert.alert("Error", "Failed to analyze job description");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSampleJD = () => {
    const sampleJD = `Senior React Developer

About Us:
We're a fast-growing fintech startup disrupting the financial services industry with cutting-edge AI technology.

The Role:
We're seeking a Senior React Developer to lead our frontend engineering efforts. You'll own the design and implementation of our customer-facing web application, working closely with our backend team and product managers.

Key Responsibilities:
- Design and implement scalable React components and state management solutions
- Lead code reviews and mentor junior developers
- Collaborate with product and design teams to build delightful user experiences
- Optimize application performance and ensure accessibility compliance
- Mentor 2-3 junior engineers on the team

Requirements:
- 7+ years of software development experience, with 5+ years using React
- Strong proficiency in TypeScript, React, and modern JavaScript
- Experience with state management (Redux, Zustand, or similar)
- Expert-level HTML, CSS, and responsive design
- Proficiency with Git and GitHub
- Experience with testing frameworks (Jest, React Testing Library)
- Understanding of REST APIs and GraphQL
- Experience with performance optimization and profiling

Nice to Have:
- Experience with Next.js or other React frameworks
- Background in financial services or fintech
- Open source contributions
- Experience with Webpack or Vite
- Knowledge of Docker and Kubernetes

What We Offer:
- Competitive salary: $180,000 - $220,000 per year
- Equity package with 4-year vesting
- Comprehensive health insurance (medical, dental, vision)
- Unlimited PTO and flexible work arrangements
- 100% remote or hybrid option (choose your location)
- Learning and development budget of $2,000/year
- MacBook Pro for development

Location: Remote (US-based preferred, visa sponsorship available for exceptional candidates)

This is an exciting opportunity to work with modern technologies and impact the fintech industry.`;

    setJobDescription(sampleJD);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Job Analyzer</Text>
          <Text style={styles.subtitle}>
            Analyze job fit and get recommendations
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Job Description *</Text>
          <TextInput
            style={[styles.input, styles.largeInput]}
            placeholder="Paste job description here..."
            placeholderTextColor="#999"
            multiline
            value={jobDescription}
            onChangeText={setJobDescription}
            numberOfLines={10}
          />
          <TouchableOpacity
            style={styles.sampleButton}
            onPress={handleSampleJD}
          >
            <Text style={styles.sampleButtonText}>Load Sample JD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Your Skills</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter skills (comma-separated, e.g., React, TypeScript, Node.js)"
            placeholderTextColor="#999"
            multiline
            value={userSkills}
            onChangeText={setUserSkills}
            numberOfLines={4}
          />
          <Text style={styles.hint}>
            Comma-separated list of your skills. Leave empty to see only JD
            requirements.
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.analyzeButton,
            loading && styles.analyzeButtonDisabled,
          ]}
          onPress={handleAnalyze}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.analyzeButtonText}>Analyze Job</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#1a1a1a",
  },
  largeInput: {
    minHeight: 150,
    textAlignVertical: "top",
  },
  hint: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
  },
  sampleButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#e3f2fd",
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  sampleButtonText: {
    color: "#1976d2",
    fontSize: 12,
    fontWeight: "600",
  },
  analyzeButton: {
    backgroundColor: "#16a34a",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  analyzeButtonDisabled: {
    opacity: 0.7,
  },
  analyzeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
