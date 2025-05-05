import { CUSTOM_COLORS } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export const NoActivity = () => {
  return (
    <View style={styles.noContent}>
      <Text style={styles.noContentText}>
        Vaja, encara no hi ha activitats en aquesta categoria. Per què no en
        proposes una?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noContent: {
    marginTop: 40,
    alignItems: "center",
  },
  noContentText: {
    fontSize: 16,
    color: CUSTOM_COLORS.primary700,
    textAlign: "center",
  },
});
