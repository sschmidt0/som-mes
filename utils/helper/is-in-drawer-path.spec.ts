import { DRAWER_PATHS } from "@/constants/drawer-paths";
import { describe } from "vitest";
import { isPathInDrawerPaths } from "../is-in-drawer-path";

describe("isPathInDrawerPaths", () => {
  it("debería devolver true si el path está en DRAWER_PATHS", () => {
    expect(isPathInDrawerPaths(DRAWER_PATHS.ABOUT)).toBe(true);
    expect(isPathInDrawerPaths(DRAWER_PATHS.OBJECTIVES)).toBe(true);
    expect(isPathInDrawerPaths(DRAWER_PATHS.PROFILE)).toBe(true);
  });

  it("debería devolver false si el path no está en DRAWER_PATHS", () => {
    expect(isPathInDrawerPaths("/non-existent-path")).toBe(false);
    expect(isPathInDrawerPaths("/random")).toBe(false);
  });

  it("debería devolver false si el path es una cadena vacía", () => {
    expect(isPathInDrawerPaths("")).toBe(false);
  });

  it("debería devolver false si el path es null o undefined", () => {
    expect(isPathInDrawerPaths(null as unknown as string)).toBe(false);
    expect(isPathInDrawerPaths(undefined as unknown as string)).toBe(false);
  });
});
