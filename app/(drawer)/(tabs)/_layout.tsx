import { Icon } from "@/components/atoms/icon";
import { NewActivityButton } from "@/components/molecules/new-activity-button";
import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { Tabs, useNavigation } from "expo-router";

const TabsLayout = () => {
  const navigation = useNavigation();

  const onMenuIconPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CUSTOM_COLOURS.darkBlue,
        tabBarInactiveTintColor: CUSTOM_COLOURS.lavenderGray,
        tabBarStyle: {
          backgroundColor: CUSTOM_COLOURS.lavenderBlue,
          borderTopWidth: 1,
          borderTopColor: CUSTOM_COLOURS.lavenderBlue,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        headerShadowVisible: false,
        headerRight: () => <NewActivityButton />,
        headerLeft: () => (
          <Icon
            name={"menu-outline"}
            size={20}
            color={CUSTOM_COLOURS.darkBlue}
            onIconPress={onMenuIconPress}
          />
        ),
        sceneStyle: {
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => <Icon name="apps" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificacions",
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <Icon name="person-sharp" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "",
          href: null,
          tabBarStyle: { display: "none" },
          headerShown: true,
          headerRight: () => null,
        }}
      />
      <Tabs.Screen
        name="objectives"
        options={{
          title: "",
          href: null,
          tabBarStyle: { display: "none" },
          headerShown: true,
          headerRight: () => null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
