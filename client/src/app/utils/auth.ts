import { Jwt, TOKENT_KEY } from "../shared/interface/auth";

export const setToken = (value: Jwt) => localStorage.setItem(TOKENT_KEY, JSON.stringify(value))
export const getToken = () => JSON.parse(localStorage.getItem(TOKENT_KEY));
export const isAuth = () => Boolean(getToken());
