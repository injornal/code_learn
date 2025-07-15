import React, { useEffect } from "react";
import styles from "./Courses.module.css";
import CourseMap from "../../components/CourseMap/CourseMap";

/**
 * @file Courses.tsx
 * @summary This component represents the Courses page, displaying a visual course map.
 * It manages global body/html scrolling behavior to ensure the course map is the primary focus.
 * @module Courses
 */

/**
 * Courses component.
 * Renders the CourseMap component and controls the scrolling behavior of the body and html elements.
 * It adds a specific class to body and html to prevent scrolling when the component is mounted,
 * and removes it when the component unmounts.
 *
 * @returns {React.ReactElement} The Courses page UI.
 */
const Courses = (): React.ReactElement => {
    /**
     * useEffect hook to manage body and html classes for scrolling behavior.
     * Adds 'courses-page-active' class on mount to prevent scrolling and removes it on unmount.
     */
    useEffect(() => {
        // Add class to body and html to prevent scrolling
        document.body.classList.add('courses-page-active');
        document.documentElement.classList.add('courses-page-active');
        
        // Cleanup function to remove classes when component unmounts
        return () => {
            document.body.classList.remove('courses-page-active');
            document.documentElement.classList.remove('courses-page-active');
        };
    }, []);

    return (
        <div className={`${styles.canvasWrapper} ${styles.coursesPage}`}>
            <CourseMap />
        </div>
    );
}

export default Courses;