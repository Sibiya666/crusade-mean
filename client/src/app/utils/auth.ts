import { Jwt, AUTH_TOKENT_KEY } from "../shared/interface/auth";

export const setAuthToken = (value: Jwt) => localStorage.setItem(AUTH_TOKENT_KEY, JSON.stringify(value))
export const getAuthToken = () => JSON.parse(localStorage.getItem(AUTH_TOKENT_KEY));
export const isAuth = () => Boolean(getAuthToken());
