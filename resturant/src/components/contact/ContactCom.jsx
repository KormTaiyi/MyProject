import "./ContactStyle.css"

const ContactCom=()=>{
    return(
        <div className="Contact-section">
            <div className="contact-left">
                <ul type="none">
                    <h1>CONTACT INFO</h1>
                    <li className="contact-box">
                        <i>DINING</i>
                        <h2>(555) 555-7788</h2>
                    </li>
                    <li className="contact-box">
                        <i>TAKE OUT</i>
                        <h2>(555) 456-2442</h2>
                    </li>
                    <li className="contact-box">
                        <i>EMAIL</i>
                        <p>Korm.taiyi289@gmail.com</p>
                    </li>
                    <li className="contact-box">
                        <i>LOCATION</i>
                        <p> 2011 St <br /> Kok Kleang , SenSok
                        <br /> Phnom Penh</p>
                    </li>
                </ul>
                <ul type="none">
                    <h1>OPENING HOURS</h1>
                    <li className="contact-box">
                        <i>MONDAY - FRIDAY</i>
                        <p>9:00 AM - 10:00 PM</p>
                    </li>
                    <li className="contact-box">
                        <i>SATURDAY</i>
                        <p>9:00 AM - 18:00 PM</p>
                    </li>
                    <li className="contact-box">
                        <i>SUNDAY</i>
                        <p>Closed</p>
                    </li>
                </ul>
            </div>
            <div className="contact-right">
                <form className="contact-form">
                    <h2>DROP AS A LINE</h2>
                    <input type="text" placeholder="NAME: " required/>
                    <input type="email" placeholder="EMAIL: " required/>
                    <textarea placeholder="MESSAGE"></textarea>
                    <button >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactCom;