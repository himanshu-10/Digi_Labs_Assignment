import React, { useState } from 'react';
import './Navbar.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import logo from '../asset/Vector.jpg'
const Navbar = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const handleToggleNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <div className="navbar">
            {/* <div className="logo">Mode UI</div> */}
            <img src={logo} alt="Your Alt Text" className='logo' />
            <div className='Nav-Two-Side'>
                <div className={`nav-links ${isMobileNavOpen ? 'open' : ''}`}>
                    <div className='first-value'>
                        <p>Card acces <span className='Drop-Down-Icon'><RiArrowDropDownLine /></span></p>
                    </div>
                    <p >Banking</p>
                    <p>Processing</p>
                    <p>About</p>
                    <p>Carrier</p>
                    <p>Contact</p>
                </div>
                {/* Login side */}
                <div className="login-link-1">Login <span><FaArrowRightToBracket /></span></div>
            </div>
            <div className="mobile-menu-icon" onClick={handleToggleNav}>
                <FaBars />
            </div>
        </div>
    );
};

export default Navbar;
