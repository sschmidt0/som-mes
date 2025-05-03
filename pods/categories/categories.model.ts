import { CategoryType } from "@/utils/types/categories.type";
import { MaterialIcons } from "@expo/vector-icons";

export interface Category {
  id: CategoryType;
  icon: keyof typeof MaterialIcons.glyphMap;
  longText: string;
  shortText: string;
  title: string;
}
