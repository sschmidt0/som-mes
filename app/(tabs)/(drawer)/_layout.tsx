import { Icon } from "@/components/atoms/tab-bar-icon";
import CustomDrawer from "@/components/molecules/custom-drawer";
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
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profil",
          title: "Profil",
          drawerIcon: ({ color }) => (
            <Icon name="person-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(stack)"
        options={{
          drawerLabel: () => null,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
