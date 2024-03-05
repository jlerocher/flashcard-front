import { create } from "zustand";

export interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

export const useThemeStore = create(() => ({
    theme: "light" || "dark"
}));