import background from "../assets/home-top-image.png"
import styles from "../styles/Home.module.css"

function Home() {
  return (
  <div>
    <img src={background} alt="background" className={styles.image}></img>
  </div>
  
  )
}

export default Home;
