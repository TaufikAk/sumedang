import Storei from "../../images/googleplayi.png"

const Footer = () =>{
    return(
        <footer>
        <div className="row">
        <div className="col-5">
            <span>&copy; Scoffee 2022</span>
            
        </div>
        <div className="col-5">
        <img src={Storei}></img>
        </div>
        </div>
    </footer>
    )
}

export default Footer;