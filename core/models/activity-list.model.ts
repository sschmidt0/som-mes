export type CategoryType =
  | "sports"
  | "social"
  | "games"
  | "workshops"
  | "volunteering"
  | "culture";

export interface ActivityType {
  id: number;
  assistants: number;
  association?: string;
  categoryTitle: string;
  icon: CategoryType;
  city: string;
  time: Date;
  title: string;
  description: string;
}
