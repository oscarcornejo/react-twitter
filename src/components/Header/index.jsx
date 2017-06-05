import React from 'react'
import styles from './header.css'

//Componente Representacional
function Header () {
  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>React-Twitter</h1>
    </header>
  )
}

export default Header
