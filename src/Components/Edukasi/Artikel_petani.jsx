import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div style={{ marginTop: "70px" }}>
            {
                loadPost ? (
                    <div key={id}>
                        <h3 style={{ marginLeft: "20%" }}>{loadPost.title}</h3>
                        <hr />
                        <img src={`https://scoffe.masuk.web.id/images/education/${loadPost.image}`} alt="" />
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
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