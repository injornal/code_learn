import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useStore } from '../../store';
import { Link, useLocation } from 'react-router-dom';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

/**
 * @file Navbar.tsx
 * @summary This component renders the main navigation bar of the application.
 * It includes navigation links, a theme selector, authentication buttons, and a mobile menu toggle.
 * @module Navbar
 */

/**
 * Navbar component.
 * Displays the application's primary navigation, including links to different sections,
 * user authentication status, and a responsive mobile menu.
 *
 * @returns {React.ReactElement} The Navbar component UI.
 */
const Navbar = (): React.ReactElement => {
    /**
     * State to control the visibility of the mobile navigation menu.
     * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
     */
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isAuthenticated = useStore((state) => state.isAuthenticated);
    const location = useLocation();

    /**
     * Toggles the mobile navigation menu's open/closed state.
     * This function is called when the mobile menu toggle button is clicked.
     */
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    /**
     * Determines if a given path matches the current location's pathname.
     * Used to apply an 'active' class to navigation links.
     *
     * @param {string} path - The path to check against the current location.
     * @returns {boolean} True if the path matches the current location, false otherwise.
     */
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.navLeft}>
                    <Link to="/" className={styles.logo}>
                        CodeLearn
                    </Link>
                </div>
                <div className={styles.navCenter}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link 
                                to="/" 
                                className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
                            >
                                <i className={`fa fa-home ${styles.navIcon}`}></i>
                                Home
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link 
                                to="/courses" 
                                className={`${styles.navLink} ${isActive('/courses') ? styles.active : ''}`}
                            >
                                <i className={`fa fa-graduation-cap ${styles.navIcon}`}></i>
                                Courses
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <ThemeSelector />
                        </li>
                    </ul>
                </div>
                <div className={styles.navRight}>
                    <ul className={styles.navList}>
                        {isAuthenticated ? (
                            <li className={styles.navItem}>
                                <Link to="/profile" className={`${styles.navLink} ${styles.authButton} ${isActive('/profile') ? styles.active : ''}`}>
                                    <i className={`fa fa-user ${styles.navIcon}`}></i>
                                    Profile
                                </Link>
                            </li>
                        ) : (
                            <li className={styles.navItem}>
                                <Link to="/login" className={`${styles.navLink} ${styles.authButton} ${isActive('/login') ? styles.active : ''}`}>
                                    <i className={`fa fa-sign-in ${styles.navIcon}`}></i>
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                <button 
                    className={styles.mobileMenuToggle}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <i className={`fa fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
                </button>

                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavList}>
                        <li className={styles.mobileNavItem}>
                            <Link 
                                to="/" 
                                className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className={`fa fa-home ${styles.navIcon}`}></i>
                                Home
                            </Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                            <Link 
                                to="/courses" 
                                className={`${styles.mobileNavLink} ${isActive('/courses') ? styles.active : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <i className={`fa fa-graduation-cap ${styles.navIcon}`}></i>
                                Courses
                            </Link>
                        </li>
                        
                        {isAuthenticated ? (
                            <li className={styles.mobileNavItem}>
                                <Link 
                                    to="/profile" 
                                    className={`${styles.mobileNavLink} ${isActive('/profile') ? styles.active : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className={`fa fa-user ${styles.navIcon}`}></i>
                                    Profile
                                </Link>
                            </li>
                        ) : (
                            <li className={styles.mobileNavItem}>
                                <Link 
                                    to="/login" 
                                    className={`${styles.mobileNavLink} ${isActive('/login') ? styles.active : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <i className={`fa fa-sign-in ${styles.navIcon}`}></i>
                                    Login
                                </Link>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;