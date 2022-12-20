import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import styles from "../styles/Header.module.css"
 
function Header() {
    return (
        <div className={styles.banner}>
            <img src={logo} alt="logo" className={styles.image}></img>
            <nav>
                <Link to="/" className={styles.links}>Accueil</Link>
                <Link to="/about" className={styles.links}>À Propos</Link>
            </nav>
        </div>
        
    )
}

export default Header