import { ActivityDetailContainer } from "@/pods/activity-detail";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";

const ActivityDetailScreen = () => {
  const navigation = useNavigation();
  const { categoryTitle } = useLocalSearchParams();

  React.useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  return <ActivityDetailContainer />;
};
export default ActivityDetailScreen;
