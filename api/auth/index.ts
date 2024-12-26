import { auth_instance, no_auth_instance } from "@/lib/axios";
import { Profile, ROLE, Tokens } from "@/types/auth";

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

export async function updateProfile(profile: Profile, email: string) {
  try {
    const response = await auth_instance.put("/auth/edit", {
      ...profile,
      email,
      phoneUrl: "",
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    return err;
  }
}
