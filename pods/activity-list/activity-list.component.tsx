import { ProminentIcon } from "@/components/atoms/prominent-icon";
import { COLORS } from "@/constants/Colors";
import { Category } from "@/core/models/categories.model";
import { ACTIVITIES } from "@/db/example.data";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const filteredActivities = ACTIVITIES.filter(
    (activity) => activity.icon === category.id
  );

  const hasActivities = filteredActivities.length > 0;

  React.useEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  }, [navigation, category.title]);

  return (
    <ScrollView
      contentContainerStyle={styles.parentContainer}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.upperContainer}>
        <ProminentIcon name={category.icon} />
        <Text style={styles.subtitle}>{category.shortText}</Text>
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
  parentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: COLORS.background,
  },
  upperContainer: {
    alignItems: "center",
    marginBottom: 24,
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
    gap: 14,
    marginBottom: 24,
  },
});
