import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGTH;

const ThemeProvider: FC = ({children}) => {
    const [theme,setTheme] = useState<THEME>(defaultTheme);

    const defaultPropsTheme = useMemo(() => ({
        theme,
        setTheme,
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultPropsTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
