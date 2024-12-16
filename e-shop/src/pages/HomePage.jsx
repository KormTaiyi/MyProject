import FooterCom from "../components/FooterCom";
import HeaderCom from "../components/HeaderCom";
import HeroSection from "../components/Home/HeroSection"

const HomePage=()=>{
    return(
        <div className="w-4/5 m-auto">
                <HeaderCom/>
            <div className="w-full bg-slate-600 h-96 ">
                <HeroSection/>
            </div>
                <FooterCom/>
        </div>
    )
}
export default HomePage;