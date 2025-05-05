import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CATEGORIES } from "../../db/categories";
import { CategoryButton } from "./components/category-button";

export const CategoriesComponent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {CATEGORIES.map((category) => (
          <CategoryButton
            key={category.id}
            id={category.id}
            icon={category.icon}
            longText={category.longText}
            shortText={category.shortText}
            title={category.title}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 12,
    marginVertical: 8,
  },
});
