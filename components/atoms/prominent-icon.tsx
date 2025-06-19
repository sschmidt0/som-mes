import { CUSTOM_COLOURS } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface ProminentIconProps {
  size?: number;
  name: keyof typeof MaterialIcons.glyphMap;
  invertColors?: boolean;
}

export const ProminentIcon: React.FC<ProminentIconProps> = ({
  name,
  size = 40,
  invertColors = false,
}) => {
  const boxSize = size + 2 * 16;
  const backgroundColor = invertColors
    ? CUSTOM_COLOURS.darkBlue
    : CUSTOM_COLOURS.lavenderGray;
  const iconColor = invertColors
    ? CUSTOM_COLOURS.lavenderGray
    : CUSTOM_COLOURS.darkBlue;

  return (
    <View
      style={[
        styles.container,
        {
          width: boxSize,
          height: boxSize,
          backgroundColor,
        },
      ]}
    >
      <MaterialIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: CUSTOM_COLOURS.lavenderBlue,
    borderRadius: "50%",
  },
});
