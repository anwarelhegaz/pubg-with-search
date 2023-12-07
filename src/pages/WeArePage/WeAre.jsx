import { useEffect } from "react";
import './WeAre.css'
import { Link } from "react-router-dom";
export default function WeAre() {
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
                <h3>من نحن</h3>
                <ul>
					<li>
						<Link to="/home">الرئيسية</Link>
					</li>
					<li>
                        <span>من نحن</span>
					</li>
				</ul>
            </div>
        </section>
        
        <section className="about-inner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div className="text-about scroll-right">
                            <h3>من نحن</h3>
                            <p className='info'>تعتبر مطاعم ومطابخ بابجي من أفضل وأشهر مطاعم البروست فى مصر 
                            والتى تقوم بتقديم مختلف الاكلات وقد اكتسبت ثقة عملائها من خلال :
                            </p>
                            <p className='bio'>العناية الفائقة بالجودة والنظافة وتقديم الطعام الصحي .
                                    التميز فى خدمة العملاء والإعتماد على امهر الخبرات .
                                    اختيار أفضل المواد المستخدمة فى عملية الطبخ .
                                    تدريب كوادرنا البشرية العاملة فى المطاعم .
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="img-about scroll-scale">
                            <img src="https://scontent.fcai20-3.fna.fbcdn.net/v/t39.30808-6/392945886_728808479293203_1448005758268147099_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEyoBFh5oXJ7YNcv64KjBzyIBNBM_AXD0MgE0Ez8BcPQ95IwuYRVa-SQoNNlKIVHEqtoc5OWKh0eMwwo0v3w8ib&_nc_ohc=Hcds5mZIGmsAX95Zm-K&_nc_ht=scontent.fcai20-3.fna&oh=00_AfCcHRzX_3urrW2N5OBUOF217z2w3OGgy_hEjSlbWU4ZQQ&oe=653FFF4C" alt="img-rroduct" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
    )
}
