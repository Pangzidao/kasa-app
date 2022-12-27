import { useState } from 'react'
import chevronDown from '../assets/chevron-down.png'
import chevronUp from '../assets/chevron-up.png'
import styles from '../styles/Collapse.module.css'

function Collapse(props){
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div>
            <h2>{props.title}</h2>
            <img className={styles.chevronUp} src={chevronUp} onClick={() => setIsOpen(false)} alt="open"/>
            <span>{props.content}</span>
        </div>
    ) : (
        <div>
            <h2>{props.title}</h2>
            <img className={styles.chevronDown} src={chevronDown} alt="close" onClick={() => setIsOpen(true)}/>
        </div>
    )
}

export default Collapse