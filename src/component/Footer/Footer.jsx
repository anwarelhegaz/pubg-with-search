import "./Footer.css"
import logo from "../../assets/images/logo.png"
import myLogo from "../../assets/images/my-logo.png"
import { Link } from "react-router-dom"
import AnimationObserver from "../AnimationObserver/AnimationObserver"
export default function Footer() {
    
    return (
        <footer className="footer">
            <AnimationObserver />
            <div className="footer-top">
                <div className="container">
                    <div className="news-letter">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="title-letter scroll-right">
                                            <h3>كن على إطلاع بأحداثنا ؟</h3>
                                            <h5>إشترك بالبريد الإلكتروني ليصلك جديد الأخبار</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <form action="">
                                            <div className="form-content scroll-left">
                                                <div className="super">
                                                    <span><i className="fa-solid fa-envelope"></i></span>
                                                    <input type="text" placeholder="البريد الالكتروني"/>
                                                    <button><i className="fa fa-paper-plane"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-footer">
                        <div className="row">
                            <div className="col-xs-12 col-lg-4">
                                <div className="about-footer scroll-scale">
                                    <h3>من نحن</h3>
                                    <a href="#" className="logo">
                                        <img src={logo} alt="logo-img" />
                                    </a>
                                    <p>تعتبر مطاعم بابجي من أفضل مطاعم بني سويف والتي تقوم بتقديم مختلف الأكلات المصرية 
                                        ؛و الاهتمام بالجودة والسعر العادل هو ما تمتاز به،
                                        بالاضافة الى اختيار أفضل اللحوم والمكونات التي تهدف من خلاله لتحقيق رضي العميل .
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-1 col-xs-12"></div>
                            <div className="col-xs-12 col-lg-7">
                                <div className="site-map scroll-right">
                                    <div>
                                        <h3>خريطة الموقع</h3>
                                    </div>
                                    <ul className="links">
                                        <li><Link to="/home">الرئيسية</Link></li>
                                        <li><Link to="/we-are">من نحن</Link></li>
                                        <li><Link to="/list-food">قائمة الطعام</Link></li>
                                        <li><Link to="/branches">فروعنا</Link></li>
                                        <li><Link to="/gallery">معرض الصور</Link></li>
                                        <li><Link to="/contact">اتصل بنا</Link></li>
                                    </ul>
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom scroll-top">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-xs-12 col-lg-6">
                            <p>
                                © جميع الحقوق محفوظة لـ<a href="#"> مطاعم بابجي </a>2023	
                            </p>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <a className="logo-contentd" href="https://ahmed-hosn.github.io/" target="_blank" rel="noreferrer">
                                <span>صمَّمَ بواسطه احمد حسني</span>
                                <img src={myLogo} alt="deve-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
