import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchBar/searchBar';
import '../../atoms/searchBar/searchBar.css';
import './navBar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickInsideDropdown = (e) => {
        e.stopPropagation(); // Prevent propagation of the click event
    };

    const handleClickOutsideDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    const handleIconClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideDropdown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideDropdown);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">Love4Games</div>
            <SearchBar/>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className = "navbar-dropdown" ref = {dropdownRef}>
                    <div className = "profile-icon" onClick = {handleIconClick} style = {{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faUser} />
                        {
                            isDropdownOpen && (
                                <ul className="dropdown-menu" onClick={handleClickInsideDropdown}>
                                    <li><Link to="/login">Log In</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            )
                        }
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
