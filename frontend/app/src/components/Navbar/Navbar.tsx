import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useStore } from '../../store';
import { Link, useLocation } from 'react-router-dom';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isAuthenticated = useStore((state) => state.isAuthenticated);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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