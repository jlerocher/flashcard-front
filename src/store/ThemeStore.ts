import { create } from "zustand";


export const useThemeStore = create(() => ({
    theme: "light" || "dark"
}));