import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface AssociationProps {
  association: string;
}

export const Association: React.FC<AssociationProps> = ({ association }) => {
  return (
    <View style={styles.association}>
      <Text>Organitzat per:</Text>
      <Text style={styles.associationText}>{association}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  association: {
    position: "absolute",
    top: 16,
    right: 16,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: CUSTOM_COLORS.secondary300,
    color: COLORS.textColor,
    borderRadius: 8,
    transform: [{ rotate: "18deg" }],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 2,
  },
  associationText: {
    color: COLORS.textColor,
    fontSize: 18,
    fontWeight: 800,
    textAlign: "center",
  },
});
