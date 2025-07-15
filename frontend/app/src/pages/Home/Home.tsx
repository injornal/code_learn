import styles from './Home.module.css';

/**
 * @file Home.tsx
 * @summary This component represents the Home page of the application.
 * It provides a welcoming introduction to CodeLearn and highlights its key features.
 * @module Home
 */

/**
 * Home component.
 * Displays a welcome message and a brief introduction to the CodeLearn platform.
 * This component serves as the landing page for the application.
 *
 * @returns {React.ReactElement} The Home page UI.
 */
const Home = (): React.ReactElement => {
    return (
        <div>
            <div className="container">
                <div className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Welcome to CodeLearn</h1>
                    <p className={styles.pageSubtitle}>
                        Your journey to mastering programming starts here. Discover courses, track your progress, and build your future in tech.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;