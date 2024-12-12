import "/style.css"
import {Link} from "react-router";
import logo from "../assets/logo-1.png"
import { FaFacebookF,FaInstagram,FaTelegramPlane } from "react-icons/fa";

const FootCom=()=>{
    return (
        <div className="Foot">
            <div className="FootMenu">
                <img src={logo} alt="logo" />
                <ul className="FootItem" type="none">
                    <li><Link to="/" className="FootLink">HOME</Link></li>
                    <li><Link to="/menu" className="FootLink">OUR MENU</Link></li>
                    <li><Link to="/history" className="FootLink">HISTORY</Link></li>
                    <li><Link to="/contact" className="FootLink">CONTACT</Link></li>
                </ul>
                <div className="FootIcon">
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaTelegramPlane />
                </div>
            </div>
            <div className="FootCopy">
                <p>Copyright © 2024 Flavio Restaurant <br />
                Powered by Flavio Restaurant</p>
            </div>
        </div>
    )
}
export default FootCom;