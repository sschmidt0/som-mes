import { StyleSheet, View } from "react-native";
import MapView, { Region } from "react-native-maps";

export interface CumstomMapProps {
  latitude?: number;
  longitude?: number;
}

export const CustomMap: React.FC<CumstomMapProps> = ({
  latitude = 41.3851,
  longitude = 2.1734,
}) => {
  const barcelonaRegion: Region = {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={barcelonaRegion}
      />
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
