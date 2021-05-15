export interface Jwt {
    token: string;
}

export interface Candidate {
    email: string;
    password: string;
}

export const AUTH_TOKENT_KEY = 'jwt';