import { useState } from 'react'
import chevronDown from '../assets/chevron-down.png'
import chevronUp from '../assets/chevron-up.png'
import styles from '../styles/Collapse.module.css'

function Collapse(props){
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className={styles.collapse}>
            <div className={styles.header}>
                <h2 className={styles.title}>{props.title}</h2>
                <img className={styles.chevronUp} src={chevronUp} onClick={() => setIsOpen(false)} alt="open"/>
            </div>
            <div className={styles.content}>{props.content}</div>
        </div>
    ) : (
        <div className={styles.collapse}>
            <div className={styles.header}>
                <h2 className={styles.title}>{props.title}</h2>
                <img className={styles.chevronDown} src={chevronDown} onClick={() => setIsOpen(true)} alt="close"/>
            </div>
        </div>
    )
}

export default Collapse