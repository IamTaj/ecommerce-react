import { atom } from "recoil";

export const cartStore = atom({
  key: "cartData",
  default: [],
});
