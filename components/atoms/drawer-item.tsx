import { CUSTOM_COLOURS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItem as DrawerItemComponent } from "@react-navigation/drawer";
import { usePathname } from "expo-router";
import { FC } from "react";
import { Icon } from "./icon";

export interface DrawerItemProps {
  label: string;
  currentPath: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export const DrawerItem: FC<DrawerItemProps> = ({
  label,
  currentPath,
  icon,
  onPress,
}) => {
  const path = usePathname();
  const isActive = path === currentPath;

  return (
    <DrawerItemComponent
      label={label}
      onPress={onPress}
      focused={isActive}
      pressOpacity={0.5}
      activeTintColor={CUSTOM_COLOURS.darkBlue}
      activeBackgroundColor={CUSTOM_COLOURS.lavenderGray}
      icon={() => (
        <Icon
          name={icon}
          size={20}
          color={CUSTOM_COLOURS.darkBlue}
          onIconPress={onPress}
        />
      )}
    />
  );
};
