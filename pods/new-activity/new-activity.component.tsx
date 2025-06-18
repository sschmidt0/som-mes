import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Dropdown } from "@/components";
import { Input } from "@/components/atoms/input";
import { Title } from "@/components/atoms/title";
import { CUSTOM_COLOURS } from "@/constants/Colors";
import { Activity } from "@/core/models";
import { Link, useNavigation } from "expo-router";
import { CustomMap } from "../activity-detail/components/custom-map";

type ActivityWithoutAssociation = Omit<Activity, "association">;

export const NewActivityComponent: React.FC = () => {
  const navigation = useNavigation();

  const emptyActivity: ActivityWithoutAssociation = {
    title: "",
    description: "",
    place: "",
    category: "",
    date: "",
    time: "",
    assistants: 0,
  };
  const [activity, setActivity] =
    React.useState<ActivityWithoutAssociation>(emptyActivity);

  const isAssociation = true; //!!user?.isAssociation;
  const associationPlaceholder = "GENT"; // user.association

  const handleInputChanges = (field: keyof Activity, value: string) => {
    const updatedActivity = { ...activity, [field]: value };
    setActivity(updatedActivity);
  };

  const restoreActivity = () => {
    setActivity(emptyActivity);
  };

  const items = [
    { label: "Football", value: "football", key: "football" },
    { label: "Baseball", value: "baseball", key: "baseball" },
    { label: "Hockey", value: "hockey", key: "hockey" },
  ];

  const handlePrevisualize = () => {
    console.log({ activity });
  };

  React.useEffect(() => {
    navigation.setOptions({
      title: "Nova activitat",
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <KeyboardAvoidingView behavior="padding">
          <Title customStyles={styles.title}>Informació bàsica</Title>
          <Input
            label="Títol de l'activitat"
            value={activity.title}
            onUpdateValue={(value) => handleInputChanges("title", value)}
          />
          {isAssociation && (
            <Input
              editable={false}
              label="Nom de l'associació"
              placeholder={associationPlaceholder}
              value={associationPlaceholder}
              onUpdateValue={(value) =>
                handleInputChanges("association", value)
              }
            />
          )}
          <Input
            label="Dia de l'activitat"
            value={activity.date}
            onUpdateValue={(value) => handleInputChanges("date", value)}
          />
          <Input
            label="Hora de l'activitat"
            value={activity.time}
            onUpdateValue={(value) => handleInputChanges("time", value)}
          />
          {/* <DateTimeInput
            label="Data de l'activitat"
            mode="date"
            value={activity.date}
            onUpdateValue={(value) => handleInputChanges("date", value)}
          />
          <DateTimeInput
            label="Hora de l'activitat"
            mode="time"
            value={activity.time}
            onUpdateValue={(value) => handleInputChanges("time", value)}
          /> */}
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior="padding">
          <Title customStyles={styles.title}>Lloc de la trobada</Title>
          <Text>
            {
              "Fes clic en el següent enllaç per obrir un mapa on introduir la ubicació de l'activitat"
            }
          </Text>
          {/* <Input
            label="Lloc de la trobada (obrir mapa per afegir-la)"
            value={activity.place}
            onUpdateValue={(value) => handleInputChanges("place", value)}
          /> */}
          <Link style={styles.mapLink} href="./map-view">
            Obrir mapa per afegir la ubicació
          </Link>
          <View style={styles.map}>
            <CustomMap />
          </View>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding">
          <Title customStyles={styles.title}>Descripció</Title>
          <Dropdown
            items={items}
            label="Categoria de l'activitat"
            value={activity.category}
            onSelectActivity={(value) => handleInputChanges("category", value)}
          />
          <Input
            customStyles={styles.spaceBottom}
            label="Descripció de l'activitat"
            multiline={true}
            value={activity.description}
            onUpdateValue={(value) => handleInputChanges("description", value)}
          />
        </KeyboardAvoidingView>

        {/* <Link style={styles.mapLink} href="./map-view">
            Obrir mapa per afegir la ubicació
          </Link> */}
        {/* <Input
            label="Ubicació de l'activitat (obrir mapa per afegir-la)"
            value={activity.place}
            onUpdateValue={(value) => handleInputChanges("place", value)}
          /> */}

        {/* <View style={styles.buttonContainer}>
          <Button
            text="Cancelar"
            customStyles={[styles.button, styles.cancelButton]}
            onPressed={restoreActivity}
          />
          <Button
            text="Previsualitzar"
            customStyles={styles.button}
            onPressed={handlePrevisualize}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // map: {
  //   width: "100%",
  //   height: 300,
  //   borderRadius: 10,
  // },
  // buttonMap: {
  //   marginTop: 10,
  // },
  // buttonContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   gap: 10,
  //   marginTop: 20,
  // },
  // button: {
  //   width: "50%",
  // },
  // cancelButton: {
  //   backgroundColor: CUSTOM_COLORS.secondary300,
  //   textShadowColor: "rgba(0, 0, 0, 0.75)",
  //   textShadowOffset: { width: -1, height: 1 },
  //   textShadowRadius: 10,
  // },
  // mapLink: {
  //   marginVertical: 10,
  //   paddingVertical: 12,
  //   paddingHorizontal: 10,

  //   borderRadius: 10,
  //   borderWidth: 1,
  //   fontSize: 16,
  // },
  container: {
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 40,
  },
  spaceBottom: {
    marginBottom: 40,
  },
  textDescription: {
    fontSize: 16,
    color: CUSTOM_COLOURS.darkBlue,
    marginBottom: 8,
  },
  map: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: CUSTOM_COLOURS.lavenderBlue,
  },
  mapLink: {
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: CUSTOM_COLOURS.orangeCoral,
    fontSize: 16,
    color: CUSTOM_COLOURS.orangeCoral,
    backgroundColor: CUSTOM_COLOURS.lavenderGray,
  },
  cancelButton: {
    backgroundColor: CUSTOM_COLOURS.lightPeach,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
