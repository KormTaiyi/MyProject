import FootCom from "../components/FootCom";
import HeadCom from "../components/HeadCom";
import Homeabout from "../components/home/Homeabout";
import Homebenner from "../components/home/Homebenner";
import Homehistory from "../components/home/Homehistory";
import Homemenu from "../components/home/Homemenu";

const HomePage=()=>{
    return (
        <div>
            <HeadCom/>
            <Homebenner/>
            <Homeabout/>
            <Homehistory/>
            <Homemenu/>
            <FootCom/>
        </div>
    )
}
export default HomePage;