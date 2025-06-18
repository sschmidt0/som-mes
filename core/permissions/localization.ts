import { MapsPermissionStatus } from "@/infrastructure/interfaces";
import * as Location from "expo-location";
import { Alert, Linking } from "react-native";

export const requestLocationPermission =
  async (): Promise<MapsPermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      if (status === "denied") {
        manualPermissionRequest();
      }

      return MapsPermissionStatus.DENIED;
    }

    return MapsPermissionStatus.GRANTED;
  };

export const checkLocationPermission = async () => {
  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case "granted":
      return MapsPermissionStatus.GRANTED;
    case "denied":
      return MapsPermissionStatus.DENIED;
    default:
      return MapsPermissionStatus.UNDETERMINED;
  }
};

const manualPermissionRequest = async () => {
  Alert.alert(
    "Permís de localització necessari",
    "Per continuar has d’habilitar el permís de localització als ajustos de l’app",
    [
      {
        text: "Obrir ajustos",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancel·la",
        style: "destructive",
      },
    ]
  );
};
