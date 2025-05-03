import { Ionicons } from "@expo/vector-icons";
import React from "react";

export interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
}

export const Icon: React.FC<IconProps> = ({ name, color }) => {
  return <Ionicons name={name} size={16} color={color} />;
};
