import { useEffect, useState } from "react";
import DetailEvent from "./DetailEvent";
import Calendar from "../../../images/calendar.png"
import moment from "moment/moment";


const CardEvent = (props) => {

    const [show, addShow] = useState(false);

    const sliceTitle = () => {
        if(props.title.length <= 40){
            return props.title.padEnd(50,`${' '}`)
        } else{
            return `${props.title.slice(0,40)}...`
        }
    }

    const sliceDescription = () =>{
        if(props.body.length <= 70){
            return props.body
        } else{
            return `${props.body.slice(0,70)}...`
        }
    }

    return (
        <>
            <div className="card col-lg-3 col-md-5 m-2 p-0 rounded rounded-3" onClick={() => addShow(true)}>
                <img src={`https://be.scoffee.my.id/images/events/${props.image}`} className="card-img-top rounded-top rounded-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sliceTitle()}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: sliceDescription()}}></p>
                    <p className="card-text"><img src={Calendar} alt="" /> {moment(props.date).format('DD-MM-YYYY')}</p>
                </div>
            </div>
            <DetailEvent key={props.id} show={show} onHide={() => addShow(false)} title={props.title} date={props.date} author={props.author}
                body={props.body} image={props.image} />
        </>
    )
}

export default CardEvent;