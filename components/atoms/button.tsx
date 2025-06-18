import { CUSTOM_COLOURS } from "@/constants/Colors";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
}

export const Button = ({ children, ...rest }: Props) => {
  return (
    <Pressable style={styles.btnPrimary} {...rest}>
      <Text style={{ color: "white" }}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: CUSTOM_COLOURS.darkBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
});
