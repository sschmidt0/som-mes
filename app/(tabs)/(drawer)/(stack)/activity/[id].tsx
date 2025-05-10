import { ActivityDetailContainer } from "@/pods/activity-detail";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";

const ActivityDetail = () => {
  const navigation = useNavigation();
  const { categoryTitle } = useLocalSearchParams();

  React.useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  return <ActivityDetailContainer />;
};
export default ActivityDetail;
