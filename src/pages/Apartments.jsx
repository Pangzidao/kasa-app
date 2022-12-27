import apartments from "../datas/apartments.json";
import { useParams } from 'react-router-dom'
import Carrousel from "../components/Carrousel";
import PageError from "../components/PageError";
import Collapse from "../components/Collapse";
import StarRating from "../components/StarRating";


function Apartments(){
    const { apartmentId } = useParams()
    const apartmentData = apartments.find(apartment => apartment.id === apartmentId)
    
    if (apartmentData){
        return (
            <div>
                <Carrousel pictures={apartmentData.pictures}/>
                <h1>{apartmentData.title}</h1>
                <h2>{apartmentData.location}</h2>
                {apartmentData.tags.map((tag, index) => {
                    return(<p key={index}>{tag}</p>)
                })}
                <p>{apartmentData.host.name}</p>
                <img src={apartmentData.host.picture} alt={apartmentData.host.name}/>
                <StarRating rating={apartmentData.rating}/>
                <Collapse title="Description" content={apartmentData.description} />
                <Collapse title="Équipements" content={apartmentData.equipments.map((equipement, index) => {
                    return(<p key={index}>{equipement}</p>)
                })} />
            </div>
        )
    }else{
        return (
            <PageError />
        )
    }
}

export default Apartments