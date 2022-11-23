import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Artikel.css"

function Artikel_petani() {
    const { id } = useParams()
    const [loadPost, setLoadPost] = useState([]);
    useEffect(() => {
        axios.get(`https://scoffe.masuk.web.id/api/education/${id}`)
        .then(function (response) {
            // console.log(response);
            setLoadPost(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);


    return (
        <div style={{ marginTop: "70px" }} id="bg4" >
            {
                loadPost ? (
                    <div key={id} >
                        <h3 style={{ marginLeft: "30%" }}><b>{loadPost.title}</b></h3>
                        <hr />
                        <img src={`https://scoffe.masuk.web.id/images/education/${loadPost.image}`} width="auto" height="400px" alt="" style={{marginLeft:"25%"}}/>
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <p><b>{loadPost.author}</b></p>
                                    <p>{loadPost.body}</p>

                                </div>
                                <div className="col-4   ">

                                </div>
                            </div>
                        </div>
                    </div>
                )
                    : 'masuk'
            }


        </div >
    );
}

export default Artikel_petani;