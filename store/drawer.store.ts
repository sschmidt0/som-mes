import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface DrawerState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useDrawerStore = create<DrawerState>()(
  devtools((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
  }))
);
