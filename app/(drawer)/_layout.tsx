import { CustomDrawer } from "@/components";
import { Icon } from "@/components/atoms/icon";
import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: COLORS.overlayColor,
        drawerActiveTintColor: CUSTOM_COLORS.primary900,
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "Sobre la desenvolupadora",
          title: "Sobre la desenvolupadora",
          drawerIcon: ({ color }) => (
            <Icon name="information-circle-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="objectives"
        options={{
          drawerLabel: "Per què l'app Som +",
          title: "Per què l'app Som +",
          drawerIcon: ({ color }) => <Icon name="bulb-outline" color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
