// src/ViewProduct.jsx
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const ProductDetail = () => {
    const { productId } = useParams(); // Get the productId from the URL params
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const [addedToCartItems, setAddedToCartItems] = useState([]);

    // Simulate cart state
    // const [cartItems, setCartItems] = useState([]);

    // Scroll to the top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        // Fetch the product details using productId
        // You can use the same API or any other data source
        fetch(`https://babgy.otrans.co/api/auth/FetchproductId/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data.items)); // Update here to access the "items" property
    }, [productId]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

        // setIsAddedToCart(true);

        // Add the item id to the addedToCartItems array
        setAddedToCartItems((prevItems) => [...prevItems, item.id]);

        // Reset the added-to-cart state after a short delay
        setTimeout(() => {
            // setIsAddedToCart(false);
            setAddedToCartItems((prevItems) => prevItems.filter((id) => id !== item.id));
        }, 1000); // Adjust the delay as needed
    };
    
    
    if (!product) {
        return <div>Loading...</div>;
    }

    

    return (
        <>
        <section className="title-page">
            <div className="container">
                <h3>{product.name}</h3>
                <ul>
					<li>
						<Link to="/list-food">قائمه الطعام</Link>
					</li>
					<li>
                        <span>{product.name}</span>
					</li>
				</ul>
            </div>
        </section>
        
        <section className="about-inner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div className="text-about">
                            <h3>{product.name}</h3>
                            <span className='price'> السعر : {product.price} جنية</span>
                            <p className='info'>جميع الأسعار شاملة ضريبة القيمة المضافة 15%</p>
                            <p className='bio'>{product.Bio}</p>
                            <div className="cart-content cus-cart-content">
                                <button
                                        // className={`add-cart-btn ${isAddedToCart ? 'added-to-cart' : ''}`}
                                        className={` cus-btn  add-cart-btn ${addedToCartItems.includes(product.id) ? 'added-to-cart' : ''}`}
                                        onClick={() => handleAddToCart(product)}
                                    >
                                    <FaCartPlus />
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="img-about">
                            <img src={`https://babgy.otrans.co/product/${product.image}`} alt="img-product" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProductDetail;