import "./HomeStyle.css"
import pic from "../../assets/bg4.jpg"
import pic1 from "../../assets/bg5.jpg"

const Homemenu=()=>{
    return(
        <div className="home_menu">
            <div className="home-menu-1">
                <div className="sub-home-menu-1">
                    <img src={pic} alt="" />
                    <p>DINING MENU</p>
                </div>
                <div className="sub-home-menu-1">
                    <img src={pic1} alt="" />
                    <p>DESERT MENU</p>
                </div>
            </div>
            <div className="home-menu-2">
                <div>
                    <h1>OUR <br /> MENU</h1>
                    <p>Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem dapibus. Suspendisse id posuere ex</p>
                </div>
                <button>EXPLORE MENU</button>
            </div>
            <div className="home-menu-3">
                <h1>TODAY`S <br /> SPECIALS</h1>
                <p>Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem dapibus.</p>
            </div>
            <div className="home-menu-4">
                <div className="sub-home-menu-4 ">
                    <div className="sub-home-menu-4-box">
                        
                    </div>
                    <div className="sub-home-menu-4-box">

                    </div>
                    <div className="sub-home-menu-4-box">

                    </div>
                    <div className="sub-home-menu-4-box">

                    </div>
                    <div className="sub-home-menu-4-box">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homemenu;