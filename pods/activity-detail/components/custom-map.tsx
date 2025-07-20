import { ActivityType } from "@/core/models";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export interface CustomMapProps {
  activity: ActivityType;
}

export const CustomMap: React.FC<CustomMapProps> = ({ activity }) => {
  const router = useRouter();

  const handleOnMapClick = () => {
    router.push({
      pathname: "/map",
      params: {
        latitude: activity.place.latitude,
        longitude: activity.place.longitude,
        title: activity.title,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleOnMapClick}>
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={{
            latitude: activity.place.latitude,
            longitude: activity.place.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
