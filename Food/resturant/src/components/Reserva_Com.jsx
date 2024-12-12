import "../../style.css"
const Reserva_Com=()=>{
    return (
        <div className="Background-pic">
            <div className="Reservation_section">
                <h3>Reservation</h3>
                <h1>BOOK A TABLE</h1>
                <form className="Res-form">
                    <input type="text" placeholder="NAME: " /><br />
                    <input type="text"  placeholder="PHONE: " /><br />
                    <input type="text" placeholder="NUMBER OF PERSON:" /><br />
                    <input type="text" placeholder="RESERVATION DAY:" /><br />
                    <input type="text" placeholder="HOUR:" /><br />
                </form>
                <button className="Res-btn">Book A Table</button>
            </div>
        </div>
    )
}
export default Reserva_Com;