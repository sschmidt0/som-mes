import { Title } from "@/components/atoms/title";
import { ITEM } from "@/utils/types/texts.type";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export interface InfoComponentProps {
  texts: ITEM[];
}

export const InfoComponent: React.FC<InfoComponentProps> = ({ texts }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {texts.map((text) => {
          if (text.isTitle) {
            return <Title key={text.id}>{text.content}</Title>;
          }
          return (
            <Text key={text.id} style={styles.text}>
              {text.content}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
