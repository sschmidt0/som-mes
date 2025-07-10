import { CUSTOM_COLOURS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DrawerItem } from "../atoms/drawer-item";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const router = useRouter();
  const navigation = useNavigation();

  const handlePress = (path: string) => {
    router.push(`/${path}`);
    navigation.dispatch(DrawerActions.closeDrawer);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Som+</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.list}>
          <DrawerItem
            label="Categories"
            currentPath="/categories"
            icon="apps"
            onPress={() => handlePress("categories")}
          />
          <DrawerItem
            label="Sobre la desenvolupadora"
            currentPath="/about"
            icon="information-circle"
            onPress={() => handlePress("about")}
          />
          <DrawerItem
            label="El perquè de l'app"
            currentPath="/objectives"
            icon="golf"
            onPress={() => handlePress("objectives")}
          />
          <DrawerItem
            label="Perfil"
            currentPath="/profile"
            icon="person"
            onPress={() => handlePress("profile")}
          />
          <DrawerItem
            label="Notificacions"
            currentPath="/notifications"
            icon="notifications"
            onPress={() => handlePress("notifications")}
          />
        </View>
        <Pressable style={styles.logout}>
          <Ionicons
            name="log-out-outline"
            size={20}
            color={CUSTOM_COLOURS.darkBlue}
          />
          <Text style={styles.logoutText}>Tancar sessió</Text>
        </Pressable>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoContainer: {
    paddingTop: 150,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: CUSTOM_COLOURS.softLavender,
  },
  logo: {
    fontSize: 64,
    fontWeight: "bold",
    color: CUSTOM_COLOURS.darkBlue,
  },
  content: {
    flex: 1,
    marginTop: -20,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: CUSTOM_COLOURS.darkBlue,
    borderRadius: 8,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: CUSTOM_COLOURS.darkBlue,
  },
  drawerLabel: {
    fontSize: 16,
  },
});
