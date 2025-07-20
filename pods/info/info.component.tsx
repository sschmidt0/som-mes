import { Title } from "@/components/atoms/title";
import { COLORS } from "@/constants/Colors";
import { ITEM } from "@/utils/types/texts.type";
import { Fragment } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export interface InfoComponentProps {
  texts: ITEM[];
}

export const InfoComponent: React.FC<InfoComponentProps> = ({ texts }) => {
  return (
    <View style={styles.globalContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {texts.map((text) => {
            return (
              <Fragment key={text.id}>
                <Title>{text.title}</Title>
                {text.content.map((paragraph) => (
                  <Text key={paragraph.id} style={styles.text}>
                    {paragraph.text}
                  </Text>
                ))}
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    paddingBottom: 24,
  },
  scrollContainer: {
    marginTop: -4,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  container: {
    gap: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textColor,
    textAlign: "justify",
  },
});
