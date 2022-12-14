import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detailcoffee() {
    const { slug } = useParams()
    const [loadPost, setLoadPost] = useState([]);
    useEffect(() => {
        axios.get(`https://be.scoffee.my.id/api/coffee/${slug}`)
            .then(function (response) {
                setLoadPost(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div style={{ marginTop: "70px" }} >
                {
                    loadPost ? (
                        <div key={slug} >
                            <h3 style={{ marginLeft: "30%" }}><b>{loadPost.name}</b></h3>
                            <hr />
                            <img src={`https://be.scoffee.my.id/images/coffee/${loadPost.image}`} width="auto" height="400px" alt="" style={{ marginLeft: "10%", marginRight: "10%", borderRadius: "20px" }} />
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        <h5><b>{loadPost.origin}</b></h5>
                                        <div dangerouslySetInnerHTML={{ __html: loadPost.description }}></div>

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

export default Detailcoffee;