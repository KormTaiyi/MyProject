import "../Menu/MenuStyle.css"
import { Switch } from 'antd';


const ManuCom =()=>{
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <>
            <div className="Contain-menu ">
                <div className="Change-state">
                    <b>MAIN COURSES</b>
                    <Switch undefaultChecked onChange={onChange} />
                    <b>SIDE DISHES</b>
                </div>
                <div className="sub-contain-menu">
                    <div className="foot-menu">
                        <div className="foot-box">
                            <div className="box-img">
                                <img src={{}} alt=""/>
                            </div>
                            <div className="box-des">
                                <b><span></span></b>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contain-menu">
                <div className="Change-state">
                    <Switch defaultChecked onChange={onChange} />
                </div>
                <div className="sub-contain-menu">

                </div>
            </div>
        </>
    )
}
export default ManuCom;