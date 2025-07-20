import { Icon } from "@/components";
import { NewActivityButton } from "@/components/molecules/new-activity-button";
import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";

const StackLayout = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const onHeaderArrowIconClick = () => {
    router.back();
  };

  const onHeaderMenuIconClick = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
        headerLeft: () => {
          return (
            <Icon
              name="arrow-back-outline"
              size={20}
              color={CUSTOM_COLOURS.darkBlue}
              onIconPress={onHeaderArrowIconClick}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="activity-list"
        options={{
          title: "Activity List",
          headerRight: () => <NewActivityButton />,
        }}
      />
    </Stack>
  );
};
export default StackLayout;
