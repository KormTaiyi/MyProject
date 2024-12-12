import abc from "../../assets/bg6.jpg"
const Homeabout=()=>{
    return(
        <div className="Home_About">
            <div className="homeabout-left">
                <div>
                    <h1>ABOUT <br />US</h1>
                    <p>Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem dapibus. Suspendisse id posuere ex. Vestibulum tempus elementum tortor a convallis. Nam mattis ultricies tincidunt. Ut quis viverra lorem, vitae sagittis sapien. Nam lacinia consequat est sollicitudin aliquam. Etiam id elit malesuada, vehicula arcu at, pellentesque leo.</p>
                </div>
                <div>
                    <p className="about_readmore">READ MORE</p>
                </div>
            </div>
            <div className="homeabout-right">
                <div className="sub_homeabout-right">
                    <img src={abc} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Homeabout;