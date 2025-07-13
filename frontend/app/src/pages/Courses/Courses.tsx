import React from "react";
import styles from "./Courses.module.css";
import CourseMap from "../../components/CourseMap/CourseMap";

export default function Courses(): React.ReactElement {
    return (
        <div className={styles.canvasWrapper}>
            <CourseMap />
        </div>
    );
}