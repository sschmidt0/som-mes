import { Icon } from "@/components";
import { NewActivityButton } from "@/components/molecules/new-activity-button";
import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
import { Stack, useRouter } from "expo-router";

const StackLayout = () => {
  const router = useRouter();

  const onHeaderArrowIconClick = () => {
    router.back();
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
