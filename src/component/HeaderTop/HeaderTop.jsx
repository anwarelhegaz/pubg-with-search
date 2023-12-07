
import "./HeaderTop.css"
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function HeaderTop() {
    return (
        <>
            <header className="header-top">
                <div className="container">
                    <div className="header-contant d-flex justify-content-between align-items-center">
                        <div className=" ">
                            <div className="contact-ph">
                                <span><AiFillPhone />  الرقم الموحد 00268542</span>
                            </div>
                        </div>

                        <div dir="ltr" className="dash d-flex  align-items-center ">
                            <div className="language d-flex align-content-center">
                                <a className="pe-2"><FaGlobeAmericas /></a>
                                <Link to="dashboard" className="dashboard-link">Dashborad</Link>
                                
                            </div>
                            <ul className="social-header-top p-0 m-0">
                                <li className="mx-2"><a href="#" ><AiFillFacebook /></a></li>
                                <li className="mx-2"><a href="#"><AiOutlineTwitter /></a></li>
                                <li className="mx-2"><a href="#"><AiFillInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    )
}
