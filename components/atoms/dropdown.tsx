import { CUSTOM_COLOURS } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export interface DropdownItem {
  label: string;
  value: string;
  key: string;
}

export interface Dropdown {
  items: DropdownItem[];
  label: string;
  value: string;
  onSelectActivity: (value: string) => void;
}

export const Dropdown: React.FC<Dropdown> = ({
  items,
  label,
  value,
  onSelectActivity,
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container]}>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={onSelectActivity}
          items={items}
          placeholder={{}}
          value={value}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color={CUSTOM_COLOURS.lavenderBlue}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOURS.lavenderGray,
    justifyContent: "center",
    borderRadius: 10,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "black",
    paddingRight: 30,
    backgroundColor: CUSTOM_COLOURS.lavenderGray,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "black",
    paddingRight: 30,
  },
  iconContainer: {
    top: "50%",
    right: 12,
    transform: [{ translateY: -12 }],
  },

  // modalViewMiddle: {
  //   backgroundColor: Colors.white,
  //   color: Colors.white,
  // },
  // modalViewBottom: {
  //   backgroundColor: Colors.primary700,
  //   color: Colors.white,
  // },
  // chevron: {
  //   color: Colors.primary700,
  // },
});
