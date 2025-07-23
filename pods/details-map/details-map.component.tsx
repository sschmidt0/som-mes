import { CUSTOM_COLOURS } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MapHeader } from "./components/map-header";

export const DetailsMapComponent = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const initialLatitude = params.latitude ? Number(params.latitude) : 41.3851;
  const initialLongitude = params.longitude ? Number(params.longitude) : 2.1734;

  const handleIconPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <MapHeader title={params.title as string} onGoBack={handleIconPress} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsPointsOfInterest={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        showsTraffic={false}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: initialLatitude,
            longitude: initialLongitude,
          }}
          title={`Activitat "${params.title}"`}
          description={`Quan: ${params.time}`}
          pinColor={CUSTOM_COLOURS.darkBlue}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    backgroundColor: CUSTOM_COLOURS.lightPeach,
  },
});
