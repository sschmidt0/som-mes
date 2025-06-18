import { barcelonaRegion } from "@/core/initial-region";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export interface CumstomMapProps {
  latitude?: number;
  longitude?: number;
}

export const CustomMap: React.FC<CumstomMapProps> = ({
  latitude = 41.3851,
  longitude = 2.1734,
}) => {
  const router = useRouter();

  const handleOnMapClick = () => {
    router.push("/map");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleOnMapClick}>
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={barcelonaRegion}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 240,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 16,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
