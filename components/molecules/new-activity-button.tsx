import { CUSTOM_COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { IconButton } from "../atoms/icon-button";

export const NewActivityButton = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/new-activity");
  };

  return (
    // <Link href="/new-activity" asChild>
    <Pressable onPress={handlePress}>
      <IconButton color={CUSTOM_COLORS.primary900} name="add" />
    </Pressable>
    // </Link>
  );
};
