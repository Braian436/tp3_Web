import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}