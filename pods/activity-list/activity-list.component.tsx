import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { Category } from "@/core/models/categories.model";
import { ACTIVITIES } from "@/db/example.data";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ActivityCard } from "./components/activity-card";
import { NoActivity } from "./components/no-activity";

export const ActivityListComponent = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const category = {
    id: params.id,
    icon: params.icon,
    longText: params.longText,
    shortText: params.shortText,
    title: params.title,
  } as Category;

  const filteredActivities = ACTIVITIES.filter(
    (activity) => activity.category === category.id
  );

  const hasActivities = filteredActivities.length > 0;

  React.useEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  }, [navigation, category.title]);

  return (
    <ScrollView contentContainerStyle={styles.parentContainer}>
      <Text style={styles.subtitle}>{category.shortText}</Text>
      <View style={styles.upperContainer}>
        <MaterialIcons
          style={styles.icon}
          name={category.icon}
          size={80}
          color={CUSTOM_COLORS.primary800}
        />

        <Text style={styles.description}>{category.longText}</Text>
      </View>

      <View style={styles.activitiesContainer}>
        {hasActivities ? (
          <>
            {filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </>
        ) : (
          <NoActivity />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: COLORS.background,
  },
  upperContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  icon: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: CUSTOM_COLORS.primary100,
    borderRadius: "50%",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textColor,
    textAlign: "justify",
  },
  activitiesContainer: {
    marginTop: 16,
  },
  quantity: {
    fontSize: 14,
    fontWeight: "600",
    color: CUSTOM_COLORS.primary900,
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: CUSTOM_COLORS.primary100,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: CUSTOM_COLORS.primary800,
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 14,
    color: COLORS.textColor,
    lineHeight: 20,
  },
});
