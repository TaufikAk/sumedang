import { useEffect } from "react";


const CardEvent = (props) =>{
    const changeCard = () =>{
        
    }
    // useEffect(()=>{
    //     console.log(props.index)
    // })
    return(
        <>
            <div className="card col-lg-5 col-md-10 bg-dark text-white m-2 p-0 rounded rounded-5">
                <img src={`https://scoffe.masuk.web.id/images/events/${props.image}`} className="img-fluid w-100 rounded rounded-5" alt="..."/>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title bg-dark">{props.title}</h5>
                </div>
            </div>
        </>
    )
}

export default CardEvent;