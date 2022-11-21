import "./Coffee.css"
import coba1 from "../../images/feature_1.png"
import coba2 from "../../images/feature_2.png"
import about from "../../images/about.png"
import Navbar from "../Navbar/Navbar";
function Coffee() {
    return (
        <div id="bg1">
            <Navbar/>
            <div className="container">
                <div className="row" id="p1" >
                    
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px"}}>
                            <img src={coba1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px" }}>
                            <img src={coba2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px"}}>
                            <img src={coba1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px" }}>
                            <img src={coba2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                 
                    
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px"}}>
                            <img src={coba1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px" }}>
                            <img src={coba2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px"}}>
                            <img src={coba1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card col-6" style={{ width: "18rem",marginTop:"10px" }}>
                            <img src={coba2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4>Nama Kopi Asal</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                 
                </div>
                        {/* <img src={about} alt="" style={{width:"50px",height:"50px",display:"flex",justifyContent:"end"}}/> */}
            </div>
            

        </div>
    );
}

export default Coffee;