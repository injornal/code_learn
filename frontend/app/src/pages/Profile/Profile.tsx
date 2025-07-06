import React from 'react';
import styles from './Profile.module.css';

export default function Profile(): React.ReactElement {
    return (
        <div className="container">
            <div className={styles.profileHeader}>
                <h1>Profile Page</h1>
                <p>This is the profile page.</p>
            </div>
        </div>
    );
}