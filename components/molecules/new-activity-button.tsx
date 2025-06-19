import { CUSTOM_COLOURS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { IconButton } from "../atoms/icon-button";

export const NewActivityButton = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/new-activity");
  };

  return (
    <Pressable onPress={handlePress}>
      <IconButton color={CUSTOM_COLOURS.darkBlue} size={20} name="add" />
    </Pressable>
  );
};
