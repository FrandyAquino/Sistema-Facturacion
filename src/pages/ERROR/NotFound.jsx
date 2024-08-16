// src/components/NotFound.jsx
import React from 'react';
import styles from '@styles/ERROR/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page Not Found</p>
      <a href="/" className={styles.homeLink}>Go to Home</a>
    </div>
  );
};

export default NotFound;
