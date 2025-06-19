import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

interface IconButtonProps {
  name: keyof typeof MaterialIcons.glyphMap;
  color: string;
  size?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  color,
  size,
}) => {
  return <MaterialIcons name={name} size={size || 24} color={color} />;
};
