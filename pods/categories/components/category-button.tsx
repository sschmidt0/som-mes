import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { CUSTOM_COLORS } from "@/constants/Colors";
import { Category } from "../categories.model";

export type CategoryButtonProps = Category & {
  customStyles?: string;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  id,
  customStyles,
  icon,
  longText,
  shortText,
  title,
}) => {
  return (
    <Link
      href={{
        pathname: "./activity-list",
        params: {
          id,
          icon,
          longText,
          shortText,
          title,
        },
      }}
      asChild
      style={[styles.link, customStyles && ""]}
    >
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.container}>
          <View style={styles.icon}>
            <MaterialIcons name={icon} size={50} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
    backgroundColor: CUSTOM_COLORS.primary100,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: CUSTOM_COLORS.primary500,
    shadowColor: "#000", // Sombra ligera
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pressed: {
    opacity: 0.75,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: CUSTOM_COLORS.primary500,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "80%",
    marginRight: 40,
    fontSize: 20,
    textTransform: "uppercase",
    color: CUSTOM_COLORS.primary900,
    fontWeight: "bold",
  },
});
