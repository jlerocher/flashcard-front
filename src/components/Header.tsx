import { useState } from "react";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { useThemeStore } from "../store/ThemeStore";
import { useUserStore } from "../store/UserStore";
import { Link } from "react-router-dom";
import ButtonVariants from "./ButtonVariants";
import { Menu, MenuList, MenuItem, Input, MenuHandler } from "@material-tailwind/react";
import { handleLogout } from "../services/auth";

interface ThemeProps {
    theme: string;
    toggleTheme: () => void;
}

const Header = () => {
    const theme = useThemeStore((state: unknown) => (state as ThemeProps).theme);
    const toggleTheme = () => useThemeStore.setState({ theme: theme === "light" ? "dark" : "light" });
    const { isLoggedIn, setIsLoggedIn } = useUserStore();
    const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

    
    return (
        <header>
            <h1><Link  to="/">FlashCards</Link> </h1>
            
            <div className="flex space-x-2">
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

                
                <Menu
                    dismiss={{
                    itemPress: true,
                    }}
                    placement="bottom-start"
                >
                    <MenuHandler>
                        <ButtonVariants btnType="headerBtn">
                            <MdMenu className="text-2xl" />
                        </ButtonVariants>
                    </MenuHandler>
                    <MenuList
                    placeholder=""
                    className="mt-16 ml-20 w-3/4 block dark:bg-blue-gray-800 dark:text-white "
                    >
                    <Input
                            placeholder=""
                            label="Recherchez des flash Cards"
                            color="blue"
                            className="text-white"
                            containerProps={{
                                className: "mb-4",
                            }} crossOrigin={undefined}
                    />
                    <MenuItem
                    placeholder=""
                    >
                        <Link to={isLoggedIn ? "/dashboard" : "/login"}>{isLoggedIn ? "Mon compte" : "Se connecter"}</Link>
                    </MenuItem>
                    <MenuItem
                    placeholder=""
                    >
                        <Link to="/categories">Catégories</Link>
                    </MenuItem>
                    <MenuItem
                    placeholder=""
                    >
                        <Link to="/about">À propos</Link>
                    </MenuItem>

                    {isLoggedIn ? 
                    <MenuItem 
                    placeholder=""
                    onClick={() => {
                        handleLogout();
                        setIsLoggedIn(false);
                        
                    }}
                    >
                        <Link to="/" className="font-extrabold text-red-500">Se déconnecter</Link>
                    </MenuItem> : null}

                    </MenuList>
                </Menu>
            </div>
        </header>
    )
}

export default Header