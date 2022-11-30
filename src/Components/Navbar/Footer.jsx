import Storei from "../../images/googleplayi.png"

const Footer = () => {
    return (
        <footer style={{
            position: "relative",
            height: "80px",

        }}>
            <div className="d-flex flex-row justify-content-around align-items-center pt-4" >
                <span>&copy; Scoffee 2022</span>
                <img src={Storei}></img>
            </div>
        </footer>
    )
}

export default Footer;