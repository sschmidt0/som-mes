import { ActivityType } from "@/core/models/activity-list.model";

export const ACTIVITIES: ActivityType[] = [
  {
    id: 1,
    assistants: 13,
    association: "GENT",
    categoryTitle: "Jocs de taula i activitats recreatives",
    icon: "games",
    city: "Barcelona",
    time: new Date(),
    title: "Jocs de taula",
    place: {
      latitude: 41.392794499406214,
      longitude: 2.1596229423304423,
    },
    description:
      "Vine a jugar a jocs de taula amb nosaltres! Tindrem una selecció de jocs per a tots els gustos i nivells. No cal portar res, només les ganes de passar-ho bé!",
  },
  {
    id: 2,
    assistants: 7,
    categoryTitle: "Activitats a l'aire lliure i esports",
    icon: "sports",
    city: "Barcelona",
    time: new Date(),
    title: "Caminata",
    place: {
      latitude: 41.3851,
      longitude: 2.1734,
    },
    description:
      "Uneix-te a nosaltres per a una caminada pel parc! És una gran oportunitat per fer exercici i conèixer gent nova. Tots els nivells són benvinguts!",
  },
  {
    id: 3,
    assistants: 4,
    categoryTitle: "Trobades socials",
    icon: "social",
    city: "Esplugues de Llobregat",
    time: new Date(),
    title: "Bailem swing",
    place: {
      latitude: 41.3809,
      longitude: 2.0833,
    },
    description:
      "Vine a gaudir d'una classe de swing! No cal experiència prèvia, només ganes de ballar i passar-ho bé. Tindrem música en viu i un ambient molt acollidor.",
  },
  {
    id: 4,
    assistants: 11,
    association: "GENT",
    categoryTitle: "Activitats a l'aire lliure i esports",
    icon: "sports",
    city: "Sant Just Desvern",
    time: new Date(),
    title: "Trobada en el parc",
    place: {
      latitude: 41.3809,
      longitude: 2.0833,
    },
    description:
      "Uneix-te a nosaltres per a una trobada esportiva al parc! Farem jocs i activitats per a totes les edats. És una gran oportunitat per fer nous amics i gaudir de la natura.",
  },
  {
    id: 5,
    assistants: 8,
    categoryTitle: "Trobades socials",
    icon: "social",
    city: "Barcelona",
    time: new Date(),
    title: "Prenem un café",
    place: {
      latitude: 41.3851,
      longitude: 2.1734,
    },
    description:
      "Vine a prendre un cafè amb nosaltres! És una gran oportunitat per conèixer gent nova i fer nous amics. Tindrem un ambient molt acollidor i relaxat.",
  },
  {
    id: 6,
    assistants: 13,
    association: "GENT",
    categoryTitle: "Jocs de taula i activitats recreatives",
    icon: "games",
    city: "Barcelona",
    time: new Date(),
    title: "Jocs de taula",
    place: {
      latitude: 41.392794499406214,
      longitude: 2.1596229423304423,
    },
    description:
      "Vine a jugar a jocs de taula amb nosaltres! Tindrem una selecció de jocs per a tots els gustos i nivells. No cal portar res, només les ganes de passar-ho bé!",
  },
  {
    id: 7,
    assistants: 7,
    categoryTitle: "Activitats a l'aire lliure i esports",
    icon: "sports",
    city: "Barcelona",
    time: new Date(),
    title: "Caminata",
    place: {
      latitude: 41.3851,
      longitude: 2.1734,
    },
    description:
      "Uneix-te a nosaltres per a una caminada pel parc! És una gran oportunitat per fer exercici i conèixer gent nova. Tots els nivells són benvinguts!",
  },
];
