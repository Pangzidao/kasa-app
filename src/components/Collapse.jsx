import { useState } from 'react'

function Collapse(props){
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>{props.title}</h2>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>ouvrir</button>
    )
}

export default Collapse