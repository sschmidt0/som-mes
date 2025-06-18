import { MapsPermissionStatus } from "@/infrastructure/interfaces";
import { router } from "expo-router";
import { PropsWithChildren, useEffect } from "react";
import { AppState } from "react-native";
import { usePermissionsStore } from "../../utils/hooks/useLocalization";

const CheckMapsPermissionsProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === MapsPermissionStatus.GRANTED) {
      router.replace("/categories");
    } else if (locationStatus !== MapsPermissionStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, [checkLocationPermission]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [checkLocationPermission]);

  return <>{children}</>;
};
export default CheckMapsPermissionsProvider;
