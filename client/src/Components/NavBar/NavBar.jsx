import React from 'react'
import styles from '../NavBar/NavBar.module.css'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = ({onSearch}) => {
  const location=useLocation()

  const handleClick = (event) => {
    event.preventDefault();
    window.location.reload();
};

  const isHomePage = location.pathname === "/home";
  return (
    <div className={styles.main}>
      <div className={styles.cont}>
        <Link to="/home" className={styles.link}>Home</Link>
        {isHomePage && <div className={styles.search}>
          <SearchBar onSearch={onSearch}/>
        </div>}
        <Link to="/form" className={styles.form}>POKEMON +</Link>
          
            <Link  exact to="/">RETURN TO LANDING</Link >
            
      </div>
          <div>
          <button className={styles.circularButton} onClick={(event) => handleClick(event)}>
          Recargar Página ↻
          </button>
          </div>
    </div>
  )
}

export default NavBar