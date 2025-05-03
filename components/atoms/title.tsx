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
    fontSize: SIZE.title,
  },
});
