import { Link } from "react-router-dom";
import Downloadi from "../../images/download.webp"


const Download = () => {
    return (
        <div className="download-page d-flex flex-row align">
            <div className="col-lg-6 col-md-8 col-sm-11 px-5 my-auto">
                <h2>Nikmati Keindahannya dan Temukan Berbagai Hal Baru</h2>
                <p>Informasi lengkap mengenai kopi, edukasi dari para ekspertise di bidang kopi, dan informasi kegiatan bertemakan kopi.
                    Temukan teman baru dan berbagai diskusi menarik dalam forum. Semuanya dapat Anda dapatkan dan akses secara mudah melalui
                    Scoffee. Aplikasi edukasi karya anak negeri! "GRATISSS!"</p>
                <a href="https://reactjs.org/" target="_blank" className='cv-btn'>Download</a>
            </div>
            <div className="col-lg-6 col-md-3 col-sm-1 my-auto" >
                <img src={Downloadi} alt=""></img>
            </div>
        </div>
    )
}

export default Download;