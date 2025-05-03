import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
    "Nunito-Italic": require("../assets/fonts/Nunito-Italic-VariableFont_wght.ttf"),
  });

  React.useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        paddingHorizontal: 12,
      }}
    >
      <Slot />
    </GestureHandlerRootView>
  );
}
