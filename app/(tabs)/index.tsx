import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1976d2" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.header}>
          <Text style={styles.title}>ClarioSense</Text>
          <Text style={styles.subtitle}>Analyze Job Fit with AI</Text>
          <Text style={styles.description}>
            Get instant insights into job descriptions and evaluate your
            candidacy
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <FeatureCard
            icon="📋"
            title="Paste Job Descriptions"
            description="Analyze any job posting to understand requirements and culture fit"
          />
          <FeatureCard
            icon="💼"
            title="Skills Matching"
            description="Compare your skills against job requirements with detailed breakdown"
          />
          <FeatureCard
            icon="🎯"
            title="Smart Recommendations"
            description="Get actionable insights on whether to apply or pass"
          />
          <FeatureCard
            icon="🛡️"
            title="Visa Analysis"
            description="Detect visa sponsorship signals and requirements"
          />
          <FeatureCard
            icon="💰"
            title="Compensation Review"
            description="Evaluate salary transparency and benefits offerings"
          />
          <FeatureCard
            icon="🚀"
            title="Growth Potential"
            description="Assess opportunities for learning and career advancement"
          />
        </View>

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push("/analyzer")}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Start Analyzing</Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>How It Works</Text>
          <StepCard
            step="1"
            title="Paste Job Description"
            description="Copy and paste a job posting or enter your skills"
          />
          <StepCard
            step="2"
            title="AI Analysis"
            description="Our AI analyzes the job posting for key signals"
          />
          <StepCard
            step="3"
            title="Get Results"
            description="Receive detailed insights and recommendations"
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ClarioSense helps you make data-driven decisions about job
            applications.
          </Text>
          <Text style={styles.footerVersion}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <View style={styles.stepCard}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{step}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa" },
  contentContainer: { paddingTop: 20, paddingBottom: 40 },
  header: {
    backgroundColor: "#1976d2",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 30,
  },
  title: { fontSize: 36, fontWeight: "800", color: "#fff", marginBottom: 8 },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e3f2fd",
    marginBottom: 12,
  },
  description: { fontSize: 14, color: "#e3f2fd", lineHeight: 20 },
  featuresSection: { paddingHorizontal: 20, marginBottom: 30 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#1976d2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: { fontSize: 28, marginRight: 12 },
  featureContent: { flex: 1 },
  featureTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  featureDescription: { fontSize: 12, color: "#666", lineHeight: 16 },
  ctaButton: {
    marginHorizontal: 20,
    backgroundColor: "#16a34a",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#16a34a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaButtonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  infoSection: { paddingHorizontal: 20, marginBottom: 30 },
  infoTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 16,
  },
  stepCard: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1976d2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  stepNumberText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  stepContent: { flex: 1, paddingTop: 4 },
  stepTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  stepDescription: { fontSize: 12, color: "#666", lineHeight: 16 },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    marginBottom: 8,
  },
  footerVersion: { fontSize: 11, color: "#ccc", textAlign: "center" },
});
