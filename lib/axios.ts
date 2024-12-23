import axios from "axios";

const auth_instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000/api/",
  timeout: 1000,
  headers: { Authorization: `Bearer`, "Content-Type": "application/json" },
});

const no_auth_instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export { auth_instance, no_auth_instance };
