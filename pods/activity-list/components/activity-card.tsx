import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { ActivityType } from "@/core/models/activity-list.model";
import { formatDateTime } from "@/utils/helper/format-date-time";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ActivityCardProps {
  activity: ActivityType;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const dateTime = formatDateTime(activity.time);
  const infoLine = `${activity.assistants} assistiran  • ${dateTime} •  ${activity.city}`;

  return (
    <Link
      href={{
        pathname: `/(tabs)/(drawer)/(stack)/activity/[id]`,
        params: {
          id: activity?.id,
          assistants: activity?.assistants,
          association: activity?.association,
          categoryTitle: activity?.categoryTitle,
          city: activity?.city,
          icon: activity?.icon,
          time: formatDateTime(activity?.time),
          title: activity?.title,
          description: activity?.description,
        },
      }}
      asChild
      style={styles.container}
    >
      <Pressable
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{activity.title}</Text>
          {activity?.association && (
            <View style={styles.associationBox}>
              <Text style={styles.associationText}>{activity.association}</Text>
            </View>
          )}
        </View>
        <Text style={styles.assistants}>{infoLine}</Text>
        <Text>
          {activity.description?.length > 100
            ? `${activity.description.slice(0, 100)}...`
            : activity.description}
        </Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: CUSTOM_COLORS.primary500,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 800,
    color: COLORS.text,
    marginBottom: 4,
  },
  associationBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    padding: 4,
    backgroundColor: CUSTOM_COLORS.secondary300,
  },
  associationText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 4,
  },
  assistants: {
    marginBottom: 4,
    fontSize: 12,
  },
  pressed: {
    opacity: 0.9,
    backgroundColor: CUSTOM_COLORS.primary100,
  },
});
