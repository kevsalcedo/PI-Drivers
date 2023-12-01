import React from 'react';
import styles from '../landing/Landing.module.css';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={styles.body}>
          <h1>PI Drivers</h1>
          <h3>By: Kevin Salcedo</h3>
          <Link to="/home">
                <button className={styles.loginButton}>Login</button>
            </Link>
        </div>
      );
}

export default Landing;