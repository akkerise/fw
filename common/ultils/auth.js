import { parseJson } from "./json";

export const getToken = () => parseJson(localStorage.getItem("auth"))

export const setToken = (t) => {
  localStorage.setItem("auth", JSON.stringify(t));
};

export const removeToken = () => {
  localStorage.removeItem("auth");
};
