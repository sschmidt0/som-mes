import { Icon } from "@/components/atoms/tab-bar-icon";
import { NewActivityButton } from "@/components/molecules/new-activity-button";
import { COLORS } from "@/constants/Colors";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        //headerShown: false,

        tabBarActiveTintColor: "blue",
        headerShadowVisible: false,
        headerRight: () => <NewActivityButton />,
        sceneStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      //screenOptions={
      //{
      // headerTintColor: Colors.white,
      // headerStyle: {
      //   backgroundColor: Colors.primary900,
      // },
      // headerRight: () => <NewActivityButton />,
      // tabBarActiveTintColor: Colors.primary300,
      // tabBarInactiveTintColor: Colors.white,
      // tabBarStyle: { backgroundColor: Colors.primary900 },
      //  }
      //  }
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
    </Tabs>
  );
};

export default TabsLayout;
