import React,{useState, useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import './mode.css'

const Header=()=>{
    const color=useContext(ThemeContext);
    const [darkMode,setDarkMode]= useState(false);
    const handleClick=()=>{
        setDarkMode(!darkMode);
    }
    return(
        <header>
            <h2 style={{color}}>React Hooks</h2>
            <button type='button' onClick={handleClick}>{darkMode? 'Dark Mode': 'Ligth Mode'}</button>      
        </header>
    );
};

export default Header;