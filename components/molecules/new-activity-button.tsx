import { COLORS } from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { IconButton } from "../atoms/icon-button";

export const NewActivityButton = () => {
  return (
    <Link href="/new-activity" asChild>
      <Pressable>
        <IconButton color={COLORS.icon} name="add" />
      </Pressable>
    </Link>
  );
};
