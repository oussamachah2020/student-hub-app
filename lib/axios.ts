import { vanillaAuthStore } from "@/zustand/auth-store";
import axios from "axios";

// Base URL from environment variables
const baseURL = process.env.EXPO_PUBLIC_API_URL!;
if (!baseURL) {
  throw new Error("API base URL is not defined in the environment variables.");
}

// Axios instance for authorized requests
const auth_instance = axios.create({
  baseURL,
  timeout: 5000, // Increased timeout for more robustness
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor to dynamically attach the access token
auth_instance.interceptors.request.use(
  (config) => {
    const accessToken = vanillaAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Axios instance for non-authorized requests
const no_auth_instance = axios.create({
  baseURL,
  timeout: 5000, // Increased timeout for more robustness
  headers: { "Content-Type": "application/json" },
});

// Exporting instances
export { auth_instance, no_auth_instance };
