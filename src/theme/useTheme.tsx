import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult{
    toggleTheme: () => void;
    theme: THEME;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === THEME.DARK ? THEME.LIGTH : THEME.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}
