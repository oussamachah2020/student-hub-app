import { no_auth_instance } from "@/lib/axios";
import { ROLE, Tokens } from "@/types/auth";
import { useAuthStore } from "@/zustand/auth-store";

export async function login(username: string, password: string) {
  try {
    const response = await no_auth_instance.post("/auth/login", {
      username,
      password,
    });

    if (response.status === 200) {
      const data: Tokens = await response.data;
      return data;
    }
  } catch (error) {
    return error;
  }
}

export async function register(email: string, password: string) {
  try {
    const response = await no_auth_instance.post("/auth/register", {
      email,
      password,
      role: ROLE.TEACHER,
    });

    if (response.status === 200) {
      const data: Tokens = await response.data;
      return data;
    }
  } catch (err) {
    return err;
  }
}
