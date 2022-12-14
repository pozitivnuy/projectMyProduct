import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
   const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'testClass'])}>

            <button onClick={toggleTheme}>Change theme </button>
                <Link to={'/'}>Main pages</Link>
                <Link to={'/about'}>About page</Link>
                <Suspense fallback={<div>Loading...</div>}>
                     <Routes>
                         <Route path={'/about'} element={<AboutPageLazy/>}/>
                         <Route path={'/'} element={<MainPageLazy/>}/>
                     </Routes>
                </Suspense>
        </div>
    );
};

export default App;
