

const CardEvent = (props) =>{
    return(
        <>
            <div class="card col-5 bg-dark text-white m-2">
                <img src={`https://scoffe.masuk.web.id/images/events/${props.image}`} class="card-img" alt="..."/>
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title bg-dark">{props.title}</h5>
                </div>
            </div>
        </>
    )
}

export default CardEvent;