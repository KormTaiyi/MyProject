import FooterCom from "../components/FooterCom";
import HeaderCom from "../components/HeaderCom";
import HeroSection from "../components/Home/HeroSection"
import ProductCategory from "../components/Home/ProductCategory"
import ChooseUs from "../components/Home/ChooseUs"
import BennerSection from "../components/Home/BennerSection"
import HomeShowProduct from "../components/Home/HomeShowProduct"

const HomePage=()=>{
    return(
        <div>
            <div className="w-[88%] m-auto">
                <HeaderCom/>
                <HeroSection/>
                <ProductCategory/>
                <ChooseUs/>
                <BennerSection/>
                <HomeShowProduct/>
                <BennerSection/>
            </div>
            <div className="bg-gray-200">
                <FooterCom />
            </div>
        </div>
    )
}
export default HomePage;