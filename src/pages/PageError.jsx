import errorNumberImage from "../assets/404.png"
import { Link } from 'react-router-dom'
import styles from "../styles/PageError.module.css"

function PageError() {
    return (
        <div className={styles.container}>
            <img src={errorNumberImage} alt="404" className={styles.errorNumberImage}></img>
            <h1 className={styles.errorMessage}>Oups! La page que vous demandez n'existe pas</h1>
            <Link className={styles.homeLink} to="/">Retourner sur la page d'accueil</Link>

        </div>
    )
}
 
export default PageError