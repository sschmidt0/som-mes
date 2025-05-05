import { DRAWER_PATHS } from "@/constants/drawer-paths";

export const isPathInDrawerPaths = (path: string): boolean =>
  !!path && Object.values(DRAWER_PATHS).includes(path);
