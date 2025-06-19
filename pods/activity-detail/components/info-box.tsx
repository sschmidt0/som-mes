import { Icon } from "@/components/atoms/icon";
import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
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
      <View style={styles.iconTextLine}>
        <Icon name="location" color={CUSTOM_COLOURS.orangeCoral} />
        <Text style={styles.infoText}>{city}</Text>
      </View>
      <View style={styles.iconTextLine}>
        <Icon name="calendar" color={CUSTOM_COLOURS.orangeCoral} />
        <Text style={styles.infoText}>{time}</Text>
      </View>
      <View style={styles.iconTextLine}>
        <Icon name="people" color={CUSTOM_COLOURS.orangeCoral} />
        <Text style={styles.infoText}>{`${assistants} assistiran`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    gap: 4,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  infoText: {
    color: COLORS.textColor,
    fontSize: 12,
    fontWeight: "500",
  },
  iconTextLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
