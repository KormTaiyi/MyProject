import { Outlet } from "react-router-dom"
// import HeadCom from "../HeadCom";
// import FootCom from "../FootCom";

const MainLayout=()=>{
    return (
        <>
            {/* <HeadCom/> */}
            <Outlet/>
            {/* <FootCom/> */}
        </>
    )
}
export default MainLayout;