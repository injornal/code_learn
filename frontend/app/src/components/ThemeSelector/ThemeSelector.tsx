import { useState } from "react";
import styles from './ThemeSelector.module.css';


/**
 * @file ThemeSelector.tsx
 * @summary This component allows users to select different themes for the application.
 * It manages the dropdown menu state and applies the selected theme to the document's root element.
 * @module ThemeSelector
 */

/**
 * ThemeSelector component.
 * Provides a UI for theme selection, allowing users to switch between available themes.
 * The selected theme is applied by setting a `data-theme` attribute on the `documentElement`.
 *
 * @returns {React.ReactElement} The ThemeSelector component UI.
 */
const ThemeSelector = (): React.ReactElement => {
    /**
     * State to control the visibility of the theme dropdown menu.
     * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
     */
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

export default ThemeSelector;