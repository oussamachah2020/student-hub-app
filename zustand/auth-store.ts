import { User } from "@/types/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  setUser: (user: User) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
};

// Create the store
const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: "",
      refreshToken: "",

      setUser: (value) => set(() => ({ user: value })),
      // Set tokens
      setTokens: (accessToken: string, refreshToken: string) => {
        set({ accessToken, refreshToken });
      },

      // Clear tokens
      logout: () => {
        set({ accessToken: null, refreshToken: null, user: null });
      },
    }),
    {
      name: "auth-storage", // Name for localStorage or AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

const vanillaAuthStore = useAuthStore;

// Export store to use outside components
export { useAuthStore, vanillaAuthStore };
