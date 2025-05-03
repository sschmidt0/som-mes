import { CategoriesComponent } from "./categories.component";

export interface CategoriesContainerProps {
  isLogin?: boolean;
}

export const CategoriesContainer: React.FC<CategoriesContainerProps> = () => {
  return <CategoriesComponent />;
};
