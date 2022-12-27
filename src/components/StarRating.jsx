import filledStar from "../assets/star-filled.png"
import emptyStar from "../assets/star-empty.png"

function StarRating({ rating }){
    let starsFilled = []
    let starsEmpty = []
    for (let i = 0; i < rating; i++) {
      starsFilled.push(<img src={filledStar} alt="star" className="" key={i}/>);
    }
    for (let i = 0; i < 5 - rating; i++){
        starsEmpty.push(<img src={emptyStar} alt="star" className="" key={i}/>)
    }
    return (
      <div className="star-rating">
        {starsFilled}{starsEmpty}
      </div>
    )

    

  }

export default StarRating