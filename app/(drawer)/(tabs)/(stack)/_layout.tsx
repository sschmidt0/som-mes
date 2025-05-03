import { COLORS } from "@/constants/Colors";
import { Stack, useNavigation } from "expo-router";
const StackLayout = () => {
  const navigation = useNavigation();

  //   const onHeaderLeftClick = (canGoBack: boolean) => {
  //     if (canGoBack) {
  //       navigation.dispatch(StackActions.pop());
  //       return;
  //     }

  //     navigation.dispatch(DrawerActions.toggleDrawer);
  //   };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
        // headerLeft: ({ tintColor, canGoBack }) => (
        //   <Ionicons
        //     name={canGoBack ? "arrow-back-outline" : "grid-outline"}
        //     className="mr-5"
        //     size={20}
        //     onPress={() => onHeaderLeftClick(canGoBack)}
        //   />
        // ),
      }}
    >
      <Stack.Screen
        name="activity-list"
        options={{
          title: "Activity List",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
