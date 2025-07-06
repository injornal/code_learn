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
        <div className={styles.courseCard}>
            <h3 className={styles.courseTitle}>{course.title}</h3>
        </div>
    );
}