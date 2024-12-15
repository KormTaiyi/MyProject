import FooterCom from "../components/FooterCom";
import HeaderCom from "../components/HeaderCom";
import HeroSection from "../components/Home/HeroSection"

const HomePage=()=>{
    return(
        <div>
            <HeaderCom/>
            <div className="w-4/5 bg-slate-600 h-96 m-auto">
                <HeroSection/>
            </div>
            <FooterCom/>
        </div>
    )
}
export default HomePage;