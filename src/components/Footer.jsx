import React from 'react'
import logo from "../assets/logo-footer.png"
import styles from "../styles/Footer.module.css"
 
function Footer() {
    return (
        <div className={styles.footer}>
            <img src={logo} alt="logo" className={styles.image}></img>
            <p className={styles.copyright}>{'\u00a9'} 2020 Kasa. All rights reserved</p>
        </div>
        
    )
}

export default Footer