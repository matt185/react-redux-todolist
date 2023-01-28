import React from 'react';
import Title from "./components/Title"
import Header from "./components/Header"
import styles from "./styles/modules/app.module.scss"
import AppContent from './components/AppContent';

function App() {
  return (
    <div className="container">
      <Title> Todo List </Title>
      <div className={styles.app__wrapper}>
        <Header />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
