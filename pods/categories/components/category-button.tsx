import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Category } from "../categories.model";

export type CategoryButtonProps = Category & {
  squareSize: number;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  id,
  icon,
  longText,
  squareSize,
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
    >
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <View
          style={[styles.container, { width: squareSize, height: squareSize }]}
        >
          <MaterialIcons name={icon} size={30} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: Colors.primary100,
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    width: "100%",
    marginVertical: 4,
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  text: {
    fontStyle: "italic",
  },
});
