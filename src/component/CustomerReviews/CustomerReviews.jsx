import "./CustomerReviews.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AnimationObserver from "../AnimationObserver/AnimationObserver";

export default function CustomerReviews() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };
    return (
        <section className="customer-reviews">
            <AnimationObserver />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="main-header scroll-scale">
                            <h3>
                                اراء العملاء
                            </h3>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="row ">
                            <div className="col-xs-12 col-lg-6">
                                <div className="img-client scroll-scale">
                                    <img src="https://thouqaldeera.com/wp-content/uploads/2020/01/client.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-lg-6">
                            <div className="carosale-customer scroll-right">
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay
                                    autoPlaySpeed={2000}
                                    >
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">ابراهيم عبدالله</div>
                                            </div>
                                            <div className="body-block">
                                                <p>	يعطيهم العافيه بصراحة طبخهم ممتاز مرة واسعار معقولة </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">حسام الدين</div>
                                            </div>
                                            <div className="body-block">
                                                <p>	مطعم رائع ومميز وكذلك عندهم جودة ممتازة .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">محمد السعدي</div>
                                            </div>
                                            <div className="body-block">
                                                <p>انا عميل لديهم منذ مدةواكلهم اكثر من رائع.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='items-cus'>
                                        <div className='client-block' href="#">
                                            <div className="title-client">
                                                <div className="icon"><span>&quot;</span></div>  
                                                <div className="name-client">محمد الشهرى</div>
                                            </div>
                                            <div className="body-block">
                                                <p>بصراحة طبخ أكثر من رائع وخدمة مميزة .</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
