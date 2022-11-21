import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"


const Event = () =>{

    const BASE_URL = 'https://scoffe.masuk.web.id/api/'

    const [loadPost, addLoadPost] = useState([])

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
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    useEffect(() => {
        getPost();
    })

    return(
        <>

        </>
    )
}

export default Event;