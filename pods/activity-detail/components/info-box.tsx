import { Icon } from "@/components/atoms/icon";
import { COLORS, CUSTOM_COLORS } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface InfoBoxProps {
  time: string;
  assistants: string;
  city: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ assistants, city, time }) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.time}>{time}</Text>

      <View style={styles.assistantsBox}>
        <Icon name="person" color={CUSTOM_COLORS.primary300} />
        <Text style={styles.assistantText}>{`${assistants} assistiran`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    gap: 8,
    paddingHorizontal: 16,
  },
  city: {
    color: COLORS.textColor,
    fontSize: 20,
    fontWeight: 800,
    textAlign: "center",
  },
  time: {
    color: COLORS.textColor,
    fontSize: 14,
    fontWeight: 800,
    textAlign: "center",
  },
  assistantsBox: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 16,
  },
  assistantText: {
    color: COLORS.textColor,
    fontSize: 14,
    textAlign: "center",
  },
});
