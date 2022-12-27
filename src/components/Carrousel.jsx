import { useState } from "react";
import styles from "../styles/Carrousel.module.css"
import chevronLeft from "../assets/chevron-left.png"
import chevronRight from "../assets/chevron-right.png"

function Carrousel(props){
    const [index, setIndex] = useState(0);
    const pictures = props.pictures
    
    const prev = () => {
        index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1)
      }
    
      const next = () => {
        index === pictures.length - 1 ? setIndex(0) : setIndex(index + 1)
      }

      if (pictures.length === 1){
        return(
            <div className={styles.carrousel}>
                <img className={styles.backgroundPicture}src={pictures[0]} alt="Carousel" />
            </div>
        )
      }else{
        return (
            <div className={styles.carrousel}>
              <img className={styles.chevronLeft} alt="previous" width="40px" src={chevronLeft} onClick={prev} />
              <img className={styles.backgroundPicture}src={pictures[index]} alt="Carousel" />
              <img className={styles.chevronRight} alt="previous" width="40px" src={chevronRight} onClick={next} />
              <p className={styles.pictureIndex}>{index + 1}/{pictures.length}</p>
            </div>
        )
      }
      

}

export default Carrousel