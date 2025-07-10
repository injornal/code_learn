import React from 'react';
import styles from './Course.module.css';

export type CourseData = {
    id: number;
    title: string;
}

interface CourseProps {
    course: CourseData;
}

export default function Course({ course }: CourseProps): React.ReactElement {
    return (
        // Combine the global 'card' class with the module's 'courseCard' class
        // for a robust and non-breaking way to apply shared and specific styles.
        <div className={`card ${styles.courseCard}`}>
            <img src="https://placehold.co/600x400/161b22/e6edf3?text=Course" alt={course.title} className={styles.courseImage} />
            <h3 className={styles.courseTitle}>{course.title}</h3>
            <p className={styles.courseDescription}>A brief description of what this course is about and the skills you will gain.</p>
            <div className={styles.courseMeta}>
                <span>
                    {/* You can replace these emojis with an icon library like Font Awesome */}
                    ⭐️ 4.5
                </span>
                <span>👥 120 students</span>
            </div>
            <button className="btn btn-primary mt-md">View Course</button>
        </div>
    );
}