import { useState } from "react";
import styles from './ThemeSelector.module.css';


export default function ThemeSelector() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className={styles.themeSelector}>
            <button className={styles.themeButton}
                onClick={() => setIsOpen(!isOpen)}>Select Theme</button>
            {isOpen && (
                <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : null}`} onMouseLeave={() => setIsOpen(false)}>
                    <li className={styles.dropdownItem}
                        onClick={() => {
                            document.documentElement.setAttribute('data-theme', 'default');
                        }}>Blue</li>
                    <li className={styles.dropdownItem}
                        onClick={() => {
                        document.documentElement.setAttribute('data-theme', 'sunset-glow');
                    }}>Sunset Glow</li>
                </ul>
            )}
        </div>
    )
}