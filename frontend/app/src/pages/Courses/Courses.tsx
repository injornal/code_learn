import React, { useEffect, useState, Suspense } from "react";
import styles from "./Courses.module.css";
import Course, { CourseData } from "../../components/Course/Course";
import Navbar from "../../components/Navbar/Navbar";

export default function Courses(): React.ReactElement {
    const [courseData, setCourseData] = useState<CourseData[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("/api/courses");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: CourseData[] = await response.json();
                setCourseData(data);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            }
        }
        fetchCourses();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className={styles.coursesContainer}>
                    <div className={styles.coursesHeader}>
                        <h1 className={styles.coursesTitle}>Explore Our Courses</h1>
                        <p className={styles.coursesSubtitle}>
                            Discover a wide range of courses designed to help you advance your career and master new skills.
                        </p>
                    </div>

                    <div className={styles.coursesGrid}>
                        <Suspense fallback={<div className={styles.loadingContainer}>Loading courses...</div>}>
                            {courseData.map((course, index) => (
                                <Course key={course.id || index} course={course}/>
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}