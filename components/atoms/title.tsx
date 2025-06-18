import { CUSTOM_COLOURS } from "@/constants/Colors";
import { SIZE } from "@/constants/Size";
import { StyleSheet, Text, TextStyle } from "react-native";

export interface TitleProps {
  children: string;
  customStyles?: TextStyle;
}

export const Title: React.FC<TitleProps> = ({ children, customStyles }) => {
  return <Text style={[styles.title, customStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 16,
    color: CUSTOM_COLOURS.darkBlue,
    fontSize: SIZE.title,
    fontWeight: "bold",
    textAlign: "center",
  },
});
