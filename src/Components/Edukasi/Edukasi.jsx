
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
// import Footer from "../Navbar/Footer";
function Edukasi() {
    const BASE_URL = 'https://scoffe.masuk.web.id/api/'
    const [loadPost, setLoadPost] = useState([]);
    const getPost = () => {
        axios.get(`${BASE_URL}education`, {
            headers: {
                'Authorization': `Bearer`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

            //4-1
            .then(function (response) {
                console.log(response);
                setLoadPost(response.data.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //5
    useEffect(() => {
        getPost();
        console.log(loadPost)
    }, [])
    return (
        <>
            <Navbar />
            <div>
                <div className="row d-flex justify-content-center" style={{ marginTop: "75px" }}>
                    <div className="col-10">
                        {
                            loadPost.map((isipost, index) => {
                                return (
                                    <>
                                        <div className="card mb-3" style={{ maxWidth: "70rem",backgroundColor: "#FBFBFB",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                                            <div className="row g-0">
                                                <div className="col-md-4" key={index}>
                                                    <img src={`https://scoffe.masuk.web.id/images/education/${isipost.image}`} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{isipost.title}</h5>
                                                        <p className="card-text">Category: {isipost.category}</p>
                                                        <p className="card-text"><small className="text-muted">{isipost.author}</small></p>
                                                        <hr />
                                                        <p className="card-text"><small className="text-muted">{isipost.created_at}</small></p>
                                                        <Link to={`/petani/${isipost.slug}`} className=" stretched-link"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        
        </>

    );
}

export default Edukasi;