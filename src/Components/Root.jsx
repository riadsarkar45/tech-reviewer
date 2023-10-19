import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Layout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = !isLightTheme;
        setIsLightTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'light' : 'dark');
    };

    // Use the effect to set the theme on component mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsLightTheme(storedTheme === 'light');
        }
    }, []);

    // Dynamically set the data-theme attribute based on isLightTheme
    const dataTheme = isLightTheme ? 'light' : 'dark';

    return (
        <div data-theme={dataTheme}>
            <Header></Header>
            <div className='flex justify-end'>
                <button onClick={toggleTheme} className=' btn btn-success btn-sm justify-center'>
                    {isLightTheme ? 'Go Dark Mood' : 'Go Light Mood'}
                </button>
            </div>
            <Outlet></Outlet>
            <ToastContainer/>
            <Footer></Footer>
        </div>
    );
};

export default Root;
