import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeStore } from "../store/ThemeStore";
import { Link } from "react-router-dom";
import ButtonVariants from "./ButtonVariants";

interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

const Header = () => {
    const theme = useThemeStore((state: unknown) => (state as ThemeProps).theme);
    const toggleTheme = () => useThemeStore.setState({ theme: theme === "light" ? "dark" : "light" });
    const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

    
    return (
        <header>
            <h1><Link  to="/">FlashCards</Link> </h1>
            
            <ButtonVariants btnType="headerBtn"
            aria-description="Theme changer button"
            aria-label="theme-button"
            onClick={() => {
                if (theme === "light") {
                    toggleTheme();
                    setIsDarkThemeEnabled(true);
                    document.documentElement.classList.add("dark");
                } else if (theme === "dark") {
                    toggleTheme();
                    setIsDarkThemeEnabled(false)
                    document.documentElement.classList.remove("dark");
                }
            }}
            >
                
                {!isDarkThemeEnabled ? <MdDarkMode className="text-2xl" /> : <MdLightMode className="text-2xl" />}
            </ButtonVariants>
        </header>
    )
}

export default Header