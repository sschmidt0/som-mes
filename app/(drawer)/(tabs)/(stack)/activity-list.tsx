import { Category } from "@/pods/categories/categories.model";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ActivityList = () => {
  const params = useLocalSearchParams();
  const category = {
    id: params.id,
    icon: params.icon,
    longText: params.longText,
    shortText: params.shortText,
    title: params.title,
  } as Category;

  return (
    // <SafeAreaView style={styles.container}>
    //   <ActivityList category={category} />
    // </SafeAreaView>
    <View style={styles.container}>
      <Text>{category.title}</Text>
    </View>
  );
};

export default ActivityList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
