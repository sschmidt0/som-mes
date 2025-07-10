import { CustomDrawer } from "@/components";
import { Icon } from "@/components/atoms/icon";
import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  const navigation = useNavigation();

  const onMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        headerLeft: () => (
          <Icon
            name={"menu-outline"}
            size={20}
            color={CUSTOM_COLOURS.lavenderBlue}
            onIconPress={onMenuIconPress}
          />
        ),
        overlayColor: COLORS.overlayColor,
        drawerActiveTintColor: CUSTOM_COLOURS.orangeCoral,
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Categories",
          title: "Categories",
          drawerIcon: ({ color }) => <Icon name="grid" color={color} />,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
