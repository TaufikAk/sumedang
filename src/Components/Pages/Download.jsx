import Downloadi from "../../images/download.png"


const Download = () =>{
    return(
        <div className="download-page d-flex flex-row">
            <div className="col-6 px-5 my-auto">
                <h2>Download Sekarang dan Dapatkan Semuanya</h2>
                <p>Informasi lengkap mengenai kopi, 
      edukasi dari para ekspertise di bidang kopi, dan informasi kegiatan bertemakan kopi. Semuanya dapat Anda dapatkan dan akses secara 
      mudah melalui Scoffee. Aplikasi edukasi karya anak negeri!</p>
        <button></button>
            </div>
        <div className="col-6">
            <img src={Downloadi} alt=""></img>
        </div>
        </div>
    )
}

export default Download;