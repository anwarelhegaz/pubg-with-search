import { useEffect } from 'react';
import './BranchesPage.css'
import { Link } from 'react-router-dom';

export default function BranchesPage() {

    // Animating Elements with Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
            } else {
            entry.target.classList.remove("show-items");
            }
        });
        });
    
        const scrollScale = document.querySelectorAll(".scroll-scale");
        scrollScale.forEach((el) => observer.observe(el));
    
        const scrollTop = document.querySelectorAll(".scroll-top");
        scrollTop.forEach((el) => observer.observe(el));
    
        const scrollButton = document.querySelectorAll(".scroll-bottom");
        scrollButton.forEach((el) => observer.observe(el));
    
        const scrollLeft = document.querySelectorAll(".scroll-left");
        scrollLeft.forEach((el) => observer.observe(el));
    
        const scrollRight = document.querySelectorAll(".scroll-right");
        scrollRight.forEach((el) => observer.observe(el));
        
    
        // Cleanup the observer on component unmount
        return () => {
            scrollScale.forEach((el) => observer.unobserve(el));
            scrollTop.forEach((el) => observer.unobserve(el));
            scrollButton.forEach((el) => observer.unobserve(el));
            scrollLeft.forEach((el) => observer.unobserve(el));
            scrollRight.forEach((el) => observer.unobserve(el));
        };
      }, []); // Empty dependency array ensures the effect runs only once

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <section className="title-page scroll-scale">
            <div className="container">
                <h3>الفروع</h3>
                <ul>
                    <li >
                        <Link to="/home">الرئيسية</Link>
                    </li>
					<li>
                        <span>الفروع</span>
					</li>
				</ul>
            </div>
        </section>
        <section className="branch-inner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div className="block-map scroll-left">
                            <div className="google-map-code">
                                <iframe src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"></iframe>
                            </div>
                            <div className="address-map-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker-alt"></i>
                                        <span>بنى سويف كورنيش النيل بجوار شركة الغاز الطبيعى </span>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>
                                            <i> 0123456788</i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xs-12 col-lg-6">
                        <div className="block-map scroll-scale">
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d926499.5318243024!2d46.490958279802825!3d24.89324685088861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YXYt9i52YUg2LDZiNmCINin2YTYr9mK2LHYqQ!5e0!3m2!1sar!2ssa!4v1580156543576!5m2!1sar!2ssa" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"></iframe>
                            </div>
                            <div className="address-map-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker-alt"></i>
                                        <span> البدائع ، الشارع العام ، قبل دوار البلدية	</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>
                                            <i> 00966555583754</i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="block-map scroll-right">
                            <div className="google-map-code">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d926499.5318243024!2d46.490958279802825!3d24.89324685088861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YXYt9i52YUg2LDZiNmCINin2YTYr9mK2LHYqQ!5e0!3m2!1sar!2ssa!4v1580156543576!5m2!1sar!2ssa" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"></iframe>

                            </div>
                            <div className="address-map-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker-alt"></i>
                                        <span> الرس ، الشارع العام ، جوار مكتبة الراية ، مقابل السيف	</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>
                                            <i> 00966554464478</i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        
        </>
    )
}
