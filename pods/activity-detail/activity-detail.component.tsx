import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
import { CategoryType } from "@/core/models";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CustomMap } from "./components/custom-map";
import { InfoBox } from "./components/info-box";

export interface Props {}

export const ActivityDetailComponent: React.FC<Props> = () => {
  const params = useLocalSearchParams();
  const activity = {
    id: parseInt(params.id as string),
    assistants: parseInt(params.assistants as string),
    association: params.association as string,
    category: params.category,
    categoryTitle: params.categoryTitle as string,
    city: params.city as string,
    icon: params.icon as CategoryType,
    time: new Date(params.time as string),
    title: params.title as string,
    description:
      (params.description as string) || "No hi ha descripció disponible.",
    place: {
      latitude: params.latitude
        ? parseFloat(params.latitude as string)
        : 41.3851,
      longitude: params.longitude
        ? parseFloat(params.longitude as string)
        : 2.1734,
    },
  };

  const isFromOrganization = !!activity.association;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <CustomMap activity={activity} />
        <Text style={styles.title}>{activity.title}</Text>

        <InfoBox
          assistants={activity.assistants}
          city={activity.city}
          time={activity.time}
        />

        {isFromOrganization && (
          <View>
            <Text style={styles.label}>Organitzat per:</Text>
            {/* TODO: add url to activity when association and convert to link */}
            <Text style={styles.associationText}>{activity.association}</Text>
          </View>
        )}

        <Text style={styles.description}>{activity.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 24,
  },
  title: {
    marginVertical: 16,
    color: CUSTOM_COLOURS.darkBlue,
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
  },
  label: {
    marginTop: 24,
    fontSize: 14,
    fontStyle: "italic",
  },
  associationText: {
    color: COLORS.textColor,
    fontSize: 14,
    fontWeight: 800,
  },
  description: {
    marginTop: 28,
    color: COLORS.textColor,
    fontSize: 14,
    lineHeight: 24,
    textAlign: "justify",
  },
});
