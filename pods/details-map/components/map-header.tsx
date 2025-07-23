import { Icon } from "@/components";
import { CUSTOM_COLOURS } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface MapHeaderProps {
  title: string;
  onGoBack: () => void;
}

export const MapHeader: React.FC<MapHeaderProps> = ({ title, onGoBack }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.headerInner}>
        <Icon
          name="chevron-back-outline"
          color={CUSTOM_COLOURS.darkBlue}
          size={20}
          onIconPress={onGoBack}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: 120,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    zIndex: 1,
  },
  headerInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerText: {
    color: CUSTOM_COLOURS.darkBlue,
    fontSize: 20,
    fontWeight: 600,
  },
});
