import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.container}
      scrollEnabled={false}
    >
      <View style={styles.content}>
        <View>
          <Text style={styles.logo}>Som +</Text>
        </View>

        <DrawerItemList {...props} />
      </View>
      <View style={styles.logout}>
        <Ionicons name="log-out-outline" size={16} />
        <Text>Tancar sessió</Text>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginBottom: 36,
  },
  logo: {
    marginBottom: 16,
    fontSize: 48,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoutText: {},
});
