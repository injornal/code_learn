import React, { useRef, useEffect, useState } from 'react';
import styles from './CourseMap.module.css';

/**
 * @file CourseMap.tsx
 * @summary This component renders a visual course map using an HTML5 canvas.
 * It provides a basic canvas setup and drawing context for future course visualization logic.
 * @module CourseMap
 */

/**
 * Props for the CourseMap component.
 * @interface CourseMapProps
 * @property {string} [className] - Optional CSS class names to apply to the container div.
 * @property {any} [rest] - Any other HTML attributes to pass to the canvas element.
 */
interface CourseMapProps {
  className?: string;
  [key: string]: any;
}

const CourseMap = ({ className, ...props }: CourseMapProps): React.ReactElement => {
  const canvasRef = useRef(null);

  /**
   * useEffect hook to initialize the canvas and drawing context.
   * It sets the canvas background color when the component mounts or updates.
   */
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.fillStyle = "var(--primary-bg)";
    context.fillRect(0, 0, canvas.width, canvas.height);
  });

  return (
    <div className={`${styles.courseMapContainer} ${className || ''}`}>
      <canvas ref={canvasRef} className={styles.canvas} {...props} />
    </div>
  );
}

export default CourseMap;
