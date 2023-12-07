import './Gallary.css'
import AnimationObserver from '../AnimationObserver/AnimationObserver'
import { Link } from 'react-router-dom'

export default function Gallary() {
    return (
        <section className="gallary">
            <AnimationObserver />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="main-header scroll-scale">
                            <h3>
                                معرض الصور
                            </h3>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <a href="#" className='block-gallery scroll-right'>
                                    <div className="img img-1">
                                        {/*use bg img */}
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <a href="#" className='block-gallery small scroll-scale'>
                                    <div className="img img-2">
                                        {/*use bg img */}
                                    </div>
                                </a>
                                <a href="#" className='block-gallery small scroll-scale'>
                                    <div className="img img-3">
                                        {/*use bg img */}
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                            <a href="#" className='block-gallery scroll-left'>
                                    <div className="img img-4">
                                        {/*use bg img */}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="super text-center scroll-left ">
                            <Link to="/gallery" className="btn-more ">
                                <span>المزيد</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
