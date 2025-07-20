import { Title } from "@/components/atoms/title";
import { COLORS } from "@/constants/Colors";
import { ITEM } from "@/utils/types/texts.type";
import { Image } from "expo-image";
import { Fragment } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export interface InfoComponentProps {
  foto?: string | number;
  texts: ITEM[];
}

export const InfoComponent: React.FC<InfoComponentProps> = ({
  texts,
  foto,
}) => {
  const hasFoto = !!foto;

  return (
    <View style={styles.globalContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {texts.map((text) => {
            return (
              <Fragment key={text.id}>
                <Title>{text.title}</Title>
                {hasFoto && (
                  <Image
                    source={typeof foto === "string" ? { uri: foto } : foto}
                    style={styles.image}
                    contentFit="cover"
                  />
                )}
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
    paddingHorizontal: 10,
  },
  container: {
    gap: 16,
  },
  image: {
    width: 200,
    height: 200,
    margin: "auto",
    borderRadius: "50%",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textColor,
    textAlign: "justify",
  },
});
