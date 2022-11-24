import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Footer from "../Navbar/Footer";
import "./Artikel.css"

function Artikel_petani() {
    const { slug } = useParams()
    const [loadPost, setLoadPost] = useState([]);
   

 
    useEffect(() => {
        axios.get(`https://scoffe.masuk.web.id/api/education/${slug}`)
            .then(function (response) {
                // console.log(response);
                setLoadPost(response.data.data)
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    return (
        <>
            <div style={{ marginTop: "70px" }} id="bg4"   >
                {
                    loadPost ? (
                        <div key={slug} >
                            <h3 style={{ marginLeft: "30%" }}><b>{loadPost.title}</b></h3>
                            <hr />
                            <img src={`https://scoffe.masuk.web.id/images/education/${loadPost.image}`} width="auto" height="300px" alt="" style={{ marginLeft: "10%", marginRight: "10%", borderRadius: "20px" }} />
                            <div className="container">
                                <div className="row">
                                    <div className="col-8" >

                                        <p><b>{loadPost.author}</b></p>
                                        <div dangerouslySetInnerHTML={{__html: loadPost.body}}></div>
                                        {/* <p >

                                            {loadPost.body}
                                        </p> */}

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
        </>
    );
}

export default Artikel_petani;