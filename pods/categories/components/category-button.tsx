import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { CUSTOM_COLOURS } from "@/constants/Colors";
import { Category } from "../../../core/models/categories.model";

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
          <View style={styles.upperInnerContainer}>
            <View style={styles.icon}>
              <MaterialIcons name={icon} size={10} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.shortText}>{shortText}</Text>
          </View>
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
    gap: 8,
    padding: 12,
    backgroundColor: CUSTOM_COLOURS.lavenderGray,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: CUSTOM_COLOURS.softLavender,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  upperInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: CUSTOM_COLOURS.lavenderBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginRight: 40,
    fontSize: 14,
    color: CUSTOM_COLOURS.darkBlue,
    fontWeight: "bold",
  },
  shortText: {
    color: CUSTOM_COLOURS.darkBlue,
    fontSize: 12,
    textAlign: "left",
  },
});
