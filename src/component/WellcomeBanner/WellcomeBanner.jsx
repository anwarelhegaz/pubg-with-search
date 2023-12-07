import './WellcomeBanner.css'
// import  bannerImg  from "../../assets/images/banner-img-1.png"
import ChangeWord from '../ChangeWord/ChangeWord';
import AnimationObserver from '../AnimationObserver/AnimationObserver';


export default function WellcomeBanner() {

    return (
        <section className="wellcome-banner">
            <AnimationObserver />
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="text-banner scroll-scale">
                            <span className='sp-span'>نرحب بكم في</span>
                            <h1>مطاعم بابجي</h1>
                            <ChangeWord />
                            <p>نحن نعمل على اختيار أفضل اللحوم والمكونات حرصاً على تقديم أشهى المأكولات لعملائنا.</p>
                            <a href="#" className='cus-btn '>أقرء المذيد</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="image-banner scroll-left">
                            {/* <div className="img">
                                <img src={bannerImg} alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
