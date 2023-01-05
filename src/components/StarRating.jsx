import filledStar from "../assets/star-filled.png"
import emptyStar from "../assets/star-empty.png"
import styles from "../styles/StarRating.module.css"

function StarRating({ rating }){
    let starsFilled = []
    let starsEmpty = []
    for (let i = 0; i < rating; i++) {
      starsFilled.push(<img className={styles.star} src={filledStar} alt="star" key={i}/>);
    }
    for (let i = 0; i < 5 - rating; i++){
        starsEmpty.push(<img className={styles.star} src={emptyStar} alt="star" key={i}/>)
    }
    return (
      <div className={styles.starContainer}>
        {starsFilled}{starsEmpty}
      </div>
    )
  }

export default StarRating