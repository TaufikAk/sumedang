import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import CardEvent from "./Card/CardEvent"


const Event = () =>{

    const BASE_URL = 'https://scoffe.masuk.web.id/api/'

    const [loadPost, addLoadPost] = useState([]);
    const [page, addPage] = useState([]);
    const [search, addSearch] = useSearchParams()

    const getPost = () =>{
        axios.defaults.withCredentials = true
        axios.get(`${BASE_URL}events`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response)
            addLoadPost(response.data.data.data)
            // addPage(response.data.data.links)
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    useEffect(() => {
        getPost();
        // console.log(loadPost);
    },[])

    return(
        <div className="bg-event">
            <h1 className="m-5"> Event </h1>
            <div className="row m-5 gap-3 d-flex justify-content-evenly">
                {
                    loadPost.map((isiPost, index) => {
                        return <CardEvent key={isiPost.id} index={index} id={isiPost.id} title={isiPost.title} date={isiPost.date} author={isiPost.author}
                        body={isiPost.body} image={isiPost.image} />
                    })
                }
            </div>
        </div>
    )
}

export default Event;