import { useEffect } from 'react';
import './GalleryPage.css'
import { Link } from 'react-router-dom';

export default function GalleryPage() {
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
        
    
        // Cleanup the observer on component unmount
        return () => {
            scrollScale.forEach((el) => observer.unobserve(el));
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
                <h3>معرض الصور</h3>
                <ul>
                    <li>
                        <Link to="/home">الرئيسية</Link>
                    </li>
					<li>
                        <span>معرص الصور</span>
					</li>
				</ul>
            </div>
            </section>
            <section className="gallery-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-1">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-2">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-3">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-4">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-5">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-6">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-7">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-8">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4">
                            <a href="#" className='block-gallery scroll-scale'>
                                <div className="img img-9">
                                    {/*use bg img */}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
