import "./Coffee.css"
import coba1 from "../../images/feature_1.png"
import coba2 from "../../images/feature_2.png"
import about from "../../images/about.png"
import Navbar from "../Navbar/Navbar";
function Coffee() {
    return (
        <div id="bg1">
            <Navbar />
            <div className="container">
                <div className="row" id="p1" >
                    <div className="col-8">
                        <div className="row">
                            <div className="card col-6" style={{ width: "18rem", margin: "10px" }}>
                                <img src={coba1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Nama Kopi Asal</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-6" style={{ width: "18rem", margin: "10px" }}>
                                <img src={coba2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Nama Kopi Asal</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-6" style={{ width: "18rem", margin: "10px" }}>
                                <img src={coba1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Nama Kopi Asal</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-6" style={{ width: "18rem", margin: "10px" }}>
                                <img src={coba2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Nama Kopi Asal</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-6" style={{ width: "18rem", margin: "10px" }}>
                                <img src={coba1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Nama Kopi Asal</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card col-6" style={{ width: "18rem", margin: "10px" }}>
                                <img src={coba2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4>Nama Kopi Asal</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
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