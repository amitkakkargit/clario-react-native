import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { JobAnalysisResult } from "../src/types";

export default function ResultsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  let result: JobAnalysisResult | null = null;
  try {
    if (typeof params.result === "string") {
      result = JSON.parse(params.result);
    }
  } catch (error) {
    Alert.alert("Error", "Failed to parse analysis results");
  }

  if (!result) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No analysis results available</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getScoreColor = (score: number): string => {
    if (score >= 70) return "#16a34a";
    if (score >= 45) return "#d97706";
    return "#dc2626";
  };

  const getRecommendationColor = (action: string): Record<string, string> => {
    const colors: Record<string, Record<string, string>> = {
      Apply: { bg: "#dcfce7", border: "#16a34a", text: "#166534" },
      Maybe: { bg: "#fef3c7", border: "#d97706", text: "#92400e" },
      Skip: { bg: "#fee2e2", border: "#dc2626", text: "#991b1b" },
    };
    return colors[action] || colors["Maybe"];
  };

  const recColors = getRecommendationColor(result.recommendation.action);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Analysis Results</Text>
      </View>

      {/* Score Badge */}
      <View style={styles.scoreContainer}>
        <View
          style={[
            styles.scoreBadge,
            {
              borderColor: getScoreColor(result.score),
              shadowColor: getScoreColor(result.score),
            },
          ]}
        >
          <Text
            style={[styles.scoreValue, { color: getScoreColor(result.score) }]}
          >
            {result.score}
          </Text>
          <Text style={styles.scoreLabel}>Fit Score</Text>
        </View>
      </View>

      {/* Recommendation */}
      <View
        style={[
          styles.recommendation,
          {
            backgroundColor: recColors.bg,
            borderColor: recColors.border,
          },
        ]}
      >
        <Text style={[styles.recAction, { color: recColors.text }]}>
          {result.recommendation.action}
        </Text>
        <Text style={[styles.recReason, { color: recColors.text }]}>
          {result.recommendation.reason}
        </Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Skills Matched</Text>
          <Text style={styles.statValue}>{result.skills.percentage}%</Text>
          <Text style={styles.statDetail}>
            {result.skills.matched.length} /{" "}
            {result.skills.matched.length + result.skills.missing.length}
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Visa Risk</Text>
          <Text
            style={[
              styles.statValue,
              {
                color: getScoreColor(
                  result.visa.risk === "High"
                    ? 0
                    : result.visa.risk === "Medium"
                      ? 50
                      : 100,
                ),
              },
            ]}
          >
            {result.visa.risk}
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Seniority</Text>
          <Text style={styles.statValue}>{result.seniority}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Location</Text>
          <Text style={styles.statValue}>
            {result.location.types.join(", ")}
          </Text>
        </View>
      </View>

      {/* Skills Section */}
      <ExpandableSection
        title="Skills Analysis"
        isExpanded={expandedSections.skills}
        onToggle={() => toggleSection("skills")}
      >
        <View style={styles.skillsContent}>
          <View style={styles.skillGroup}>
            <Text style={styles.skillGroupTitle}>
              Matched Skills ({result.skills.matched.length})
            </Text>
            <View style={styles.skillsList}>
              {result.skills.matched.length > 0 ? (
                result.skills.matched.map((skill, idx) => (
                  <View
                    key={idx}
                    style={[styles.skillTag, styles.skillTagMatched]}
                  >
                    <Text
                      style={[styles.skillTagText, styles.skillTagTextMatched]}
                    >
                      {skill}
                    </Text>
                  </View>
                ))
              ) : (
                <Text style={styles.noSkillsText}>No matched skills</Text>
              )}
            </View>
          </View>

          <View style={styles.skillGroup}>
            <Text style={styles.skillGroupTitle}>
              Missing Skills ({result.skills.missing.length})
            </Text>
            <View style={styles.skillsList}>
              {result.skills.missing.length > 0 ? (
                result.skills.missing.map((skill, idx) => (
                  <View
                    key={idx}
                    style={[styles.skillTag, styles.skillTagMissing]}
                  >
                    <Text
                      style={[styles.skillTagText, styles.skillTagTextMissing]}
                    >
                      {skill}
                    </Text>
                  </View>
                ))
              ) : (
                <Text style={styles.noSkillsText}>No missing skills</Text>
              )}
            </View>
          </View>
        </View>
      </ExpandableSection>

      {/* Warnings Section */}
      {result.warnings.length > 0 && (
        <ExpandableSection
          title={`Warnings (${result.warnings.length})`}
          isExpanded={expandedSections.warnings}
          onToggle={() => toggleSection("warnings")}
        >
          <View style={styles.warningsContent}>
            {result.warnings.map((warning, idx) => (
              <View key={idx} style={styles.warningItem}>
                <Text style={styles.warningIcon}>⚠️</Text>
                <Text style={styles.warningText}>{warning}</Text>
              </View>
            ))}
          </View>
        </ExpandableSection>
      )}

      {/* Visa Section */}
      <ExpandableSection
        title="Visa Sponsorship"
        isExpanded={expandedSections.visa}
        onToggle={() => toggleSection("visa")}
      >
        <View style={styles.visaContent}>
          <View style={styles.visaRiskBadge}>
            <Text style={styles.visaRiskLabel}>Risk Level:</Text>
            <Text
              style={[
                styles.visaRiskValue,
                {
                  color: getScoreColor(
                    result.visa.risk === "High"
                      ? 0
                      : result.visa.risk === "Medium"
                        ? 50
                        : 100,
                  ),
                },
              ]}
            >
              {result.visa.risk}
            </Text>
          </View>
          {result.visa.signals.length > 0 && (
            <View>
              <Text style={styles.signalsTitle}>Signals Detected:</Text>
              {result.visa.signals.map((signal, idx) => (
                <Text key={idx} style={styles.signalItem}>
                  • {signal}
                </Text>
              ))}
            </View>
          )}
          {result.visa.note && (
            <Text style={styles.visaNote}>{result.visa.note}</Text>
          )}
        </View>
      </ExpandableSection>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back to Analyzer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

interface ExpandableSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function ExpandableSection({
  title,
  isExpanded,
  onToggle,
  children,
}: ExpandableSectionProps) {
  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.sectionHeader} onPress={onToggle}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionToggle}>{isExpanded ? "▼" : "▶"}</Text>
      </TouchableOpacity>
      {isExpanded && <View style={styles.sectionContent}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  scoreBadge: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: "700",
  },
  scoreLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  recommendation: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  recAction: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  recReason: {
    fontSize: 14,
    lineHeight: 20,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  statLabel: {
    fontSize: 12,
    color: "#999",
    fontWeight: "500",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  statDetail: {
    fontSize: 11,
    color: "#666",
  },
  section: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  sectionToggle: {
    fontSize: 12,
    color: "#999",
  },
  sectionContent: {
    padding: 16,
  },
  skillsContent: {
    gap: 16,
  },
  skillGroup: {
    marginBottom: 12,
  },
  skillGroupTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillTag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
  },
  skillTagMatched: {
    backgroundColor: "#dcfce7",
    borderColor: "#16a34a",
  },
  skillTagMissing: {
    backgroundColor: "#fee2e2",
    borderColor: "#dc2626",
  },
  skillTagText: {
    fontSize: 12,
    fontWeight: "500",
  },
  skillTagTextMatched: {
    color: "#166534",
  },
  skillTagTextMissing: {
    color: "#991b1b",
  },
  noSkillsText: {
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
  },
  warningsContent: {
    gap: 12,
  },
  warningItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  warningIcon: {
    fontSize: 16,
    marginTop: 2,
  },
  warningText: {
    flex: 1,
    fontSize: 13,
    color: "#92400e",
    lineHeight: 18,
  },
  visaContent: {
    gap: 12,
  },
  visaRiskBadge: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  visaRiskLabel: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  visaRiskValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  signalsTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  signalItem: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
    lineHeight: 16,
  },
  visaNote: {
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#1976d2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
