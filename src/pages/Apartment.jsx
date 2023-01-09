import apartments from "../datas/apartments.json";
import { useParams } from 'react-router-dom'
import Carrousel from "../components/Carrousel";
import PageError from "./PageError";
import Collapse from "../components/Collapse";
import StarRating from "../components/StarRating";
import styles from "../styles/Apartment.module.css"


function Apartment(){
    const { apartmentId } = useParams()
    const apartmentData = apartments.find(apartment => apartment.id === apartmentId)
    
    
    if (apartmentData){
        const firstNameLastName = apartmentData.host.name.split(" ")
        const firstName = firstNameLastName[0]
        const lastName = firstNameLastName[1]
        return (
            <div>
                <Carrousel pictures={apartmentData.pictures}/>
                <div className={styles.body}>
                    <div className={styles.bodyHeader}>
                        <div className={styles.titleTags}>
                            <h1 className={styles.title}>{apartmentData.title}</h1>
                            <h2 className={styles.subtitle}>{apartmentData.location}</h2>
                            <div className={styles.tagsContainer}>
                                {apartmentData.tags.map((tag, index) => {
                                    return(<p className={styles.tags} key={index}>{tag}</p>)
                                })}
                            </div> 
                        </div>
                        <div className={styles.pictureRating}>
                            <div className={styles.namePicture}>
                                <div className={styles.name}>
                                    <p>{firstName}</p>
                                    <p>{lastName}</p>
                                </div>
                                <img className={styles.picture} src={apartmentData.host.picture} alt={apartmentData.host.name}/>
                            </div>
                            <StarRating className={styles.rating} rating={apartmentData.rating}/>
                        </div>
                    </div>
                   <div className={styles.collapsesContainer}>
                        <div className={styles.collapse}>
                            <Collapse title="Description" content={apartmentData.description} />
                        </div>
                        <div className={styles.collapse}>
                            <Collapse title="Équipements" content={apartmentData.equipments.map((equipement, index) => {
                                return(<p key={index}>{equipement}</p>)
                            })} />
                        </div>
                        
                   </div>
                    
                </div>
                
            </div>
        )
        }else{
            return (
                <PageError />
            )
    }
}

export default Apartment