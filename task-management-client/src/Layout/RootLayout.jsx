import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared Component/Navbar';
import Footer from '../Shared Component/Footer';

const RootLayout = () => {

    const darkMode = JSON.parse(localStorage.getItem("darkMode")) || false; //console.log('is dark mode', darkMode);
    const [isDark, setIsDark] = useState(darkMode || false);

    // Apply dark mode class to <html> tag
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div className={`dark:bg-slate-600 dark:text-white`}>

            <div><Navbar /></div>

            <div className='pt-[14vh] pb-[5vh] mx-auto w-fit'>
                <input type="checkbox"
                    onChange={(e) => {
                        const darkMode = e.target.checked;
                        setIsDark(darkMode); //console.log('is dark mode', darkMode);
                        localStorage.setItem('darkMode', darkMode);
                    }}
                    className="toggle"
                    checked={isDark}
                />
            </div>

            <div className='lg:w-11/12 mx-auto mb-20 lg:mb-32'>
                <Outlet />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;