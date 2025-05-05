import { Icon } from "@/components/atoms/tab-bar-icon";
import { NewActivityButton } from "@/components/molecules/new-activity-button";
import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { useDrawerStore } from "@/store/drawer.store";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  const { setIsOpen } = useDrawerStore();
  const handleDrawerIconPress = () => {
    setIsOpen(true);
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: CUSTOM_COLORS.primary100,
        tabBarInactiveTintColor: COLORS.background,
        tabBarStyle: {
          backgroundColor: CUSTOM_COLORS.primary900,
          borderTopWidth: 1,
          borderTopColor: CUSTOM_COLORS.primary500,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        headerShadowVisible: false,
        headerRight: () => <NewActivityButton />,
        headerLeft: () => (
          <Icon
            name={"menu-outline"}
            size={20}
            color={CUSTOM_COLORS.primary900}
            onIconPress={handleDrawerIconPress}
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
        name="(drawer)"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
