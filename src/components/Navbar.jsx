import React from 'react'
import './Navbar.scss';
import { useState } from "react";
import { BsFillSunFill,BsMoonFill } from "react-icons/bs";

const Navbar = () => {

    const [checkTheme, settheme] = useState(true);
    const [changeColor, setColor] = useState(false);

    const changeColorOnChange = () =>{
        if (window.scrollY > 100) {
            setColor(true);
            console.log('scrolled');
        }else{
            setColor(false);
        }
    }
    var checkColor = changeColor ? 'changeColor' : '';
    
    window.addEventListener('scroll' , changeColorOnChange);

    const handleTheme = () =>{
        settheme(checkTheme => !checkTheme);
        setColor(changeColor => !changeColor)
    }
    if (checkTheme) {
        if (document.getElementById('running-app')) {
            document.getElementById('running-app').style.backgroundColor = "#fff"
            document.getElementById('running-app').style.color = "#000"
        }
    }else{
        if (document.getElementById('running-app')) {
            document.getElementById('running-app').style.backgroundColor = "#000"
            document.getElementById('running-app').style.color = "#fff"   
        }
    }

  return (
    <div className={`navbar ${checkColor}`}>
        <div className='container'>
            <nav>
                <div className="navbar_logo">
                    Application
                </div>
                <ul>
                    <li>News</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='theme-issues' onClick={handleTheme}>
                        {checkTheme ? <BsFillSunFill /> : <BsMoonFill />}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
