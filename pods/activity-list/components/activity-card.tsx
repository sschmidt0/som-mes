import { COLORS, CUSTOM_COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
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
        pathname: `./[id]`,
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
        <Text style={styles.infoline}>{infoLine}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {activity.description}
        </Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: CUSTOM_COLOURS.lavenderGray,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: CUSTOM_COLOURS.softLavender,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pressed: {
    opacity: 0.4,
    backgroundColor: CUSTOM_COLOURS.darkBlue,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 800,
    color: CUSTOM_COLOURS.darkBlue,
  },
  associationBox: {
    position: "absolute",
    right: -30,
    top: -22,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: CUSTOM_COLORS.secondary300,
  },
  associationText: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.text,
  },
  infoline: {
    marginTop: -6,
    fontSize: 10,
  },
  description: {
    marginBottom: 2,
    fontSize: 12,
  },
});
