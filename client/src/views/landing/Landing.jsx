import React from 'react';
import styles from '../landing/Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.body}>
          <h1>PI Drivers</h1>
          <h3>By: Kevin Salcedo</h3>
          <button className={styles.loginButton}>Login</button>
        </div>
      );
}

export default Landing;