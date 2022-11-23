import { useEffect, useState } from "react";
import DetailEvent from "./DetailEvent";


const CardEvent = (props) =>{

    const [show, addShow] = useState(false);

    const changeCard = () =>{
        
    }
    // useEffect(()=>{
    //     console.log(props.index)
    // })
    return(
        <>
            <div className="card col-lg-5 col-md-10 bg-dark text-white m-2 p-0 rounded rounded-5" onClick={() => addShow(true)}>
                <img src={`https://scoffe.masuk.web.id/images/events/${props.image}`} className="img-fluid w-100 rounded rounded-5" alt="..."/>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title bg-dark">{props.title}</h5>
                </div>
            </div>
            <DetailEvent show={show} onHide={()=>addShow(false)} key={props.id} title={props.title} date={props.date} author={props.author}
            body={props.body} image={props.image} />
        </>
    )
}

export default CardEvent;