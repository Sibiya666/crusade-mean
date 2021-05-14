import { MenuItem } from "./auth-interface";

export const MIN_LENGTH_OF_EMAIL = 8;
export const MIN_LENGTH_OF_PASSWORD = 16;

export const MENU_LIST: MenuItem[] = [
    {
        link: 'login',
        label: 'Login'
    },
    {
        link: 'registration',
        label: 'Registration'
    }
]