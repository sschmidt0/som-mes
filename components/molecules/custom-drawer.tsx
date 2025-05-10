import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import { isPathInDrawerPaths } from "@/utils/helper/is-in-drawer-path";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const path = usePathname();
  const isDrawerPath = isPathInDrawerPaths(path);

  const drawerActiveBackgroundColor = isDrawerPath
    ? CUSTOM_COLORS.primary100
    : COLORS.background;

  return (
    <DrawerContentScrollView
      {...props}
      style={styles.container}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <View>
          <Text style={styles.logo}>Som +</Text>
        </View>

        <DrawerItemList
          {...props}
          state={props.state}
          navigation={props.navigation}
          descriptors={{
            ...props.descriptors,
            ...Object.keys(props.descriptors).reduce(
              (
                acc: Record<string, (typeof props.descriptors)[string]>,
                key
              ) => {
                acc[key] = {
                  ...props.descriptors[key],
                  options: {
                    ...props.descriptors[key].options,
                    drawerLabelStyle: styles.drawerLabel,
                    drawerItemStyle: styles.drawerItem,
                    drawerActiveTintColor: CUSTOM_COLORS.primary900,
                    drawerActiveBackgroundColor: drawerActiveBackgroundColor,
                  },
                };
                return acc;
              },
              {}
            ),
          }}
        />
      </View>
      <View style={styles.logout}>
        <Ionicons
          name="log-out-outline"
          size={20}
          color={CUSTOM_COLORS.primary900}
        />
        <Text style={styles.logoutText}>Tancar sessió</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    marginBottom: 36,
    paddingVertical: 16,
    paddingLeft: 0,
  },
  logo: {
    marginBottom: 16,
    fontSize: 64,
    fontWeight: "bold",
    color: CUSTOM_COLORS.primary900,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: CUSTOM_COLORS.primary100,
    borderRadius: 8,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: CUSTOM_COLORS.primary900,
  },
  drawerItem: {
    borderRadius: 8,
    marginVertical: 4,
    paddingVertical: 8,
  },
  drawerLabel: {
    fontSize: 16,
  },
});
