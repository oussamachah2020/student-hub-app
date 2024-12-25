export interface User {
  username: string;
  fistName: string;
  lastName: string;
  role: ROLE;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export enum ROLE {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
}

export interface Profile {
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
}
