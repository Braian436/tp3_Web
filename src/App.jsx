import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Main />
    </div>
  );
}