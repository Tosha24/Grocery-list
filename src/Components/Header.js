import React from 'react';
import styles from '../Styles/Header.module.css';

const Header = ({title}) => {  // destructuring 
  return (
    <header className={styles.header_title}>
        <p className={styles.title}>{title}</p>
    </header>
  )
}

export default Header