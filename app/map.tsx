import { CUSTOM_COLOURS } from "@/constants/Colors";
import { barcelonaRegion } from "@/core/initial-region";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={barcelonaRegion}
        showsPointsOfInterest={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        showsTraffic={true}
        focusable={true}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    backgroundColor: CUSTOM_COLOURS.lightPeach,
  },
});
