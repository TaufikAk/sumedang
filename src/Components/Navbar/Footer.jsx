import Storei from "../../images/googleplayi.png"

const Footer = () =>{
    return(
        <footer>
        <div className="d-flex flex-row justify-content-around align-items-center p-3">
            <span>&copy; Scoffee 2022</span>
            <img src={Storei}></img>
        </div>
    </footer>
    )
}

export default Footer;