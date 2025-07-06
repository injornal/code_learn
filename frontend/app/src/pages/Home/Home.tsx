import React from 'react';
import styles from './Home.module.css';
import Navbar from "../../components/Navbar/Navbar";
import { useStore } from "../../store";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styles.coursesHeader}>
                    <h1 className={styles.coursesTitle}>Welcome to CodeLearn</h1>
                    <p className={styles.coursesSubtitle}>
                        Your journey to mastering programming starts here. Discover courses, track your progress, and build your future in tech.
                    </p>
                </div>
            </div>
        </div>
    );
}
