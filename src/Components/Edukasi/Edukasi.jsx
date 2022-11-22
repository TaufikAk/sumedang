import petani from "../../images/petani.jpg"
import barista from "../../images/barista1.jpg"
import roasting from "../../images/roasting1.jpg"
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Edukasi() {
    return (
        <>
            <Navbar />
            <div>
                <div className="row d-flex justify-content-center" style={{ marginTop: "75px" }}>
                    <div className="col-10">
                        <div className="card mb-3" style={{ maxWidth: "70rem", backgroundColor: "#E7E8E6" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={petani} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Artikel Pertanina</h5>
                                        <hr />
                                        <p className="card-text">Sumbar:"https://peluangusaha.kontan.co.id/news/petani-kopi-butuh-edukasi-untuk-menjaga-konsistensi-kualitas-biji-kopi"</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to={"/petani"} className=" stretched-link"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">

                        <div className="card mb-3" style={{ maxWidth: "70rem", backgroundColor: "#E7E8E6" }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Roasting Kopi</h5>
                                        <hr />
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to={"/roasting"} className=" stretched-link"></Link>
                                    </div>
                                </div>
                                    <div className="col-md-4">
                                        <img src={roasting} className="img-fluid rounded-start" alt="..." />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">

                        <div className="card mb-3" style={{ maxWidth: "70rem", backgroundColor: "#E7E8E6" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={barista} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Barista</h5>
                                        <hr />
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to={"/barista"} className=" stretched-link"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Edukasi;