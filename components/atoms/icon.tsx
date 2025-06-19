import { Ionicons } from "@expo/vector-icons";
import React from "react";

export interface IconProps {
  size?: number;
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  onIconPress?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 14,
  onIconPress,
}) => {
  return (
    <Ionicons name={name} size={size} color={color} onPress={onIconPress} />
  );
};
