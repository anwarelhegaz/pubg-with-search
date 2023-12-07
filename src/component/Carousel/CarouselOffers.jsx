// import './CarouselOffers.css'
// import imgOne from '../../assets/images/soon-img.jpg'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// export default function CarouselOffers() {

//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//             },
//             desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3
//             },
//             tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//             },
//             mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//             }
//         };
//     return (

//         <div className="carosale-super scroll-scale">
//             <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 itemClass="carousel-item-padding-40-px"
//                 autoPlay
//                 autoPlaySpeed={3000}
//                 >
//                 <div className='items'>
//                     <a className='block-courses' href="#">
//                         <img src={imgOne} alt="" />
//                         <div className="details">
//                             <div className="name-course">
//                                 <h4>تتوفر قريبا </h4>
//                                 <p>اضغط للطلـــب&nbsp;</p>
//                             </div>
//                         </div>
//                     </a>
//                 </div>
//                 <div className='items'>
//                     <a className='block-courses' href="#">
//                         <img src={imgOne} alt="" />
//                         <div className="details">
//                             <div className="name-course">
//                                 <h4>تتوفر قريبا </h4>
//                                 <p>اضغط للطلـــب&nbsp;</p>
//                             </div>
//                         </div>
//                     </a>
                    
//                 </div>
//                 <div className='items'>
//                     <a className='block-courses' href="#">
//                         <img src={imgOne} alt="" />
//                         <div className="details">
//                             <div className="name-course">
//                                 <h4>تتوفر قريبا </h4>
//                                 <p>اضغط للطلـــب&nbsp;</p>
//                             </div>
//                         </div>
//                     </a>
//                 </div>
//                 <div className='items'>
//                     <a className='block-courses' href="#">
//                         <img src={imgOne} alt="" />
//                         <div className="details">
//                             <div className="name-course">
//                                 <h4>تتوفر قريبا </h4>
//                                 <p>اضغط للطلـــب&nbsp;</p>
//                             </div>
//                         </div>
//                     </a>
//                 </div>
//             </Carousel>;
//         </div>
//     );
// }


import './CarouselOffers.css'
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function CarouselOffers ({ category }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    // useEffect(() => {
    //     setLoading(true);
    //     setError(null);
    //         axios.get(`http://localhost:3005/items?category=${category}`)
    //         .then(response => {
    //             setItems(response.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //             setError('حدث خطا اثناء التحميل برجاء اعاده تحميل الصفحه ...');
    //             setLoading(false);
    //         });
    // }, [category]);
    
    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(`https://babgy.otrans.co/api/auth/fetchallproduct?category=${category}`)
        .then(response => {
            setItems(response.data.items);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError('حدث خطا اثناء التحميل برجاء اعاده تحميل الصفحه ...');
            setLoading(false);
        });
    }, [category]);
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        
        const offerItems = items
        .filter((item) => item.category === 'العروض')
        .map((item) => (
                <Link to={`/view/${item.id}`} key={item.id} className='items'>
                    <div className='block-courses' href='#'>
                        <img src={`https://babgy.otrans.co/product/${item.image}`} alt='' />
                        <div className='details'>
                            <div className='name-course'>
                                <h4 className='pro-name'>{item.name}</h4>
                                <span className='pro-price'>جنيه {item.price}</span>
                                <p className='pro-bio'>{item.Bio}&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </Link>
        ));

    return (

        <div className='carosale-super scroll-scale'>
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <Carousel
                responsive={responsive}
                infinite={true}
                itemClass='carousel-item-padding-40-px'
                autoPlay
                autoPlaySpeed={3000}
                >
                {offerItems}
            </Carousel>
        )}
    </div>
    );
}
CarouselOffers.propTypes = {
    category: PropTypes.string.isRequired,
};


