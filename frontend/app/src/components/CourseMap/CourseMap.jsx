import React, { useRef, useEffect } from 'react';
import styles from './CourseMap.module.css';

const CourseMap = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //Our first draw
    context.fillStyle = 'var(--primary-bg)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  
  return (
    <div className={styles.courseMapContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

export default CourseMap;