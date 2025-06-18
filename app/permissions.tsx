import { Button } from "@/components";
import { Text, View } from "react-native";
import { usePermissionsStore } from "../utils/hooks/useLocalization";

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={requestLocationPermission}>
        Habilitar localització
      </Button>

      <Text>Estat actual: {locationStatus}</Text>
    </View>
  );
};

export default PermissionsScreen;
