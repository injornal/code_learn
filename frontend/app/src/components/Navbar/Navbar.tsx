// src/components/Navbar/Navbar.tsx

import styles from './Navbar.module.css'; // Make sure this path is correct
import { useStore } from '../../store'; // Assuming your store setup is correct
import { Link } from 'react-router'; // Changed from 'react-router' to 'react-router-dom' as it's the common package

export default function Navbar() {
    const isAuthenticated = useStore((state) => state.isAuthenticated);

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.left}><Link to="/">Home</Link></li>
                <li className={styles.left}><Link to="/courses">Courses</Link></li>
                {isAuthenticated ? (
                    <li className={styles.left}><Link to="/profile">Profile</Link></li>
                ) : (
                    <li className={styles.left}><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
}