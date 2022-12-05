import { createContext } from "react";

export const UiContext = createContext({
  openMenuItems: false,
  setOpenMenu: () => {},
  setSubItem: () => {},
  spacialProduct: {},
  cities: [],
  setCities: () => [],
  selectedCity: {},
  setCelectedCity: () => {},
});
