import "./Coffee.css"
import about from "../../images/about.png"
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Coffee() {
    const BASE_URL = 'https://be.scoffee.my.id/api/'
    const [loadPost, setLoadPost] = useState([]);
    const getPost = () => {
        axios.get(`${BASE_URL}coffee`, {
            headers: {
                'Authorization': `Bearer`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

            .then(function (response) {
                setLoadPost(response.data.data.data)
            })
             .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getPost();
    }, [])
    return (
        <div id="bg1">
            <Navbar />
            <div className="container">
                <div className="row" id="p1" >
                    <div className="col-8">
                        <div className="row">
                            {
                                loadPost.map((isipost, index) => {
                                    return (

                                        <div className="card col-6" key={index}style={{ width: "18rem", margin: "10px",backgroundColor: "#FBFBFB" }}>
                                            <img src={`https://be.scoffee.my.id/images/coffee/${isipost.image}`} className="card-img-top" alt="..." width="auto" height="200px" style={{marginTop:"10px"}}/>
                                            <div className="card-body">
                                                <h4>{isipost.name}</h4>
                                                <p className="card-text"><small className="text-muted">{isipost.type}</small></p>
                                                <hr />
                                                <p className="card-text">{isipost.origin}</p>
                                                <p className="card-text"><small className="text-muted">{isipost.created_at}</small></p>
                                                <Link to={`/detailcoffee/${isipost.slug}`} className=" stretched-link"></Link>
                                            </div>
                                        </div>

                                    )
                                })
                            }


                        </div>
                    </div>
                    <div className="col-3">
                        <img src={about} alt="" style={{ width: "0px", height: "0px" }} />
                    </div>
                </div>
            </div>
    
        </div>
    );
}

export default Coffee;