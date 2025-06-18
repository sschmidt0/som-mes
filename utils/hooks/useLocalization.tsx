import {
  checkLocationPermission,
  requestLocationPermission,
} from "@/core/permissions/localization";
import { MapsPermissionStatus } from "@/infrastructure/interfaces";
import { create } from "zustand";

interface MapsPermissionsState {
  locationStatus: MapsPermissionStatus;
  requestLocationPermission: () => Promise<MapsPermissionStatus>;
  checkLocationPermission: () => Promise<MapsPermissionStatus>;
}

export const usePermissionsStore = create<MapsPermissionsState>()((set) => ({
  locationStatus: MapsPermissionStatus.CHECKING,

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({ locationStatus: status });
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({ locationStatus: status });
    return status;
  },
}));
