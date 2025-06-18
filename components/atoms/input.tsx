import { COLORS, CUSTOM_COLOURS } from "@/constants/Colors";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";

export type InputProps = {
  customStyles?: TextStyle;
  isInvalid?: false;
  label: string;
  multiline?: boolean;
  placeholder?: string;
  secure?: boolean;
  value: string;
  onUpdateValue: (value: string) => void;
} & TextInputProps;

export const Input: React.FC<InputProps> = (props) => {
  const { onUpdateValue, multiline, isInvalid, label, ...restProps } = props;

  return (
    <View style={styles.inputContainer}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        {...restProps}
        style={[
          styles.input,
          isInvalid && styles.inputInvalid,
          multiline && styles.inputMultiline,
          props.customStyles,
        ]}
        onChangeText={onUpdateValue}
        autoCapitalize="none"
        multiline={multiline}
        numberOfLines={8}
        maxLength={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 8,
    marginLeft: 10,
    color: COLORS.textColor,
    fontSize: 16,
  },
  labelInvalid: {
    color: COLORS.error,
  },
  input: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    borderColor: CUSTOM_COLOURS.lavenderGray,
    backgroundColor: CUSTOM_COLOURS.lavenderGray,
    borderWidth: 1,
  },
  inputInvalid: {
    backgroundColor: COLORS.error,
  },
  inputMultiline: { height: 184 },
});
