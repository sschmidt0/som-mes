import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Association } from "./components/association";
import { CustomMap } from "./components/custom-map";
import { InfoBox } from "./components/info-box";

export interface Props {}

export const ActivityDetailComponent: React.FC<Props> = () => {
  const params = useLocalSearchParams();
  const activity = {
    id: params.id,
    assistants: params.assistants as string,
    association: params.association as string,
    category: params.category,
    city: params.city as string,
    icon: params.icon as keyof typeof MaterialIcons.glyphMap,
    time: params.time as string,
    title: params.title,
    description: params.description || "No hi ha descripció disponible.",
  };

  console.log(activity.description);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {!!activity?.association && (
          <Association association={activity?.association} />
        )}
        <CustomMap latitude={0} longitude={0} />
        <Text style={styles.title}>{activity.title}</Text>

        <InfoBox
          assistants={activity.assistants}
          city={activity.city}
          time={activity.time}
        />
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{activity.description}</Text>
        </View>
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
    marginBottom: 8,
    color: CUSTOM_COLORS.primary900,
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
  },
  descriptionBox: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  description: {
    color: COLORS.textColor,
    fontSize: 14,
    lineHeight: 24,
    textAlign: "justify",
  },
});
