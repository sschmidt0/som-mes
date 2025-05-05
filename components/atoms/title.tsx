import { CUSTOM_COLORS } from "@/constants/Colors";
import { SIZE } from "@/constants/Size";
import { StyleSheet, Text } from "react-native";

export interface TitleProps {
  children: string;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 16,
    color: CUSTOM_COLORS.primary900,
    fontSize: SIZE.title,
    fontWeight: "bold",
    textAlign: "center",
  },
});
