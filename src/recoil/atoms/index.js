import { atom } from "recoil";
//Helpers
import { getInitialTheme } from "../../helpers";

export const theme = atom({
  key: "theme",
  default: getInitialTheme(),
});

export const articles = atom({
  key: "articles",
  default: [],
});

export const article = atom({
  key: "article",
  default: null,
});

export const page = atom({
  key: "page",
  default: 0,
});
