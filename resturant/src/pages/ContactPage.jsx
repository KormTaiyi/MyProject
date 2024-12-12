import AllBenner from "../components/AllBenner"
import HeadCom from "../components/HeadCom"
import FootCom from "../components/FootCom"
import ContactCom from "../components/contact/ContactCom"
import MapCom from "../components/contact/MapCom"

const ContactPage=()=>{
    return (
        <div>
            <HeadCom/>
            <AllBenner/>
            <ContactCom/>
            <MapCom/>
            <FootCom/>
        </div>
    )
}
export default ContactPage;