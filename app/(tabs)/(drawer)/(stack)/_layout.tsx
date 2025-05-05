import { Icon } from "@/components/atoms/tab-bar-icon";
import { NewActivityButton } from "@/components/molecules/new-activity-button";
import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { useDrawerStore } from "@/store/drawer.store";
import { Stack, useRouter } from "expo-router";

const StackLayout = () => {
  const router = useRouter();
  const { setIsOpen } = useDrawerStore();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    setIsOpen(true);
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
        headerLeft: ({ canGoBack }) => {
          console.log({ canGoBack });
          return (
            <Icon
              name={canGoBack ? "arrow-back-outline" : "menu-outline"}
              size={20}
              color={CUSTOM_COLORS.primary900}
              onIconPress={() => onHeaderLeftClick(!!canGoBack)}
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
