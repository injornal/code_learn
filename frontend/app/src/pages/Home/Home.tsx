import styles from './Home.module.css';

export default function Home() {
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
