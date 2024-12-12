import {Link} from "react-router-dom";
import logo from "../assets/logo-2.png"
import "/style.css"

const HeadCom=()=>{
    return (
        <div className="Header">
            <ul type="none" className="head_item">
                <li><Link to="/" className="head_link" >HOME</Link></li>
                <li><Link to="/menu" className="head_link">OUR MENU</Link></li>
                <li><Link to="/history" className="head_link">HISTORY</Link></li>
                <li><Link to="/contact" className="head_link">CONTACT</Link></li>
            </ul>
            <img src={logo} alt="logo" className="head_logo"/>
            <ul type="none" className="head_item_reser">
                <li><Link to="/reservation" className="head_reserva">MAKE RESERVATION</Link></li>
            </ul>
        </div>
    )
}
export default HeadCom;