import { CUSTOM_COLORS } from "@/constants/Colors";
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
  size = 80,
  invertColors = false,
}) => {
  const boxSize = size + 2 * 16;
  const backgroundColor = invertColors
    ? CUSTOM_COLORS.primary800
    : CUSTOM_COLORS.primary100;
  const iconColor = invertColors
    ? CUSTOM_COLORS.primary100
    : CUSTOM_COLORS.primary800;

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
    backgroundColor: CUSTOM_COLORS.primary100,
    borderRadius: "50%",
  },
});
