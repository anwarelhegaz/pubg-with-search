import './ShoppingCart.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';


const ShoppingCart = ({ isOpen, closeShoping }) => {

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems);

    // Initialize itemQuantities with a default value of 1 for each item
    const [itemQuantities, setItemQuantities] = useState(
        Object.fromEntries(cartItems.map((item) => [item.id, 1]))
    );

    const sidebarStyle = {
        transform: isOpen ? 'translateX(0%)' : 'translateX(150%)',
    };

    const handleIncrease = (itemId) => {
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = {
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 1) + 1,
            };
            console.log('After Increase', updatedQuantities);
            return updatedQuantities;
            });
        };
        
    const handleDecrease = (itemId) => {
        setItemQuantities((prevQuantities) => {
        const updatedQuantities = {
            ...prevQuantities,
            [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1),
        };
        console.log('After Decrease', updatedQuantities);
        return updatedQuantities;
        });
    };

    const handleRemove = (itemId) => {
        // Dispatch the removeFromCart action
        dispatch(removeFromCart(itemId));
    };

    useEffect(() => {
        // Update itemQuantities when cartItems change
        setItemQuantities(Object.fromEntries(cartItems.map((item) => [item.id, 1])));
    }, [cartItems]);
    
    // Calculate the total number of items and the total price
    const totalItems = cartItems.reduce((total, item) => total + (itemQuantities[item.id] || 1), 0);
    const totalPrice = cartItems.reduce((total, item) => total + ((itemQuantities[item.id] || 1) * item.price), 0);

    

    const handleOrder = () => {
        // Prepare the message with the selected products
        const message = 
        `طلب جديد:
        
        ${cartItems.map((item) => `${item.name} - ${itemQuantities[item.id] || 1} قطع`).join('\n')}

        العدد الكلي: ${totalItems}
        السعر الكلي: ${totalPrice}  ريال
        
        برجاء ارسال العنوان`;
        // Open WhatsApp with the prepared message
        window.open(`https://wa.me/+201122372060/?text=${encodeURIComponent(message)}`, '_blank');

    };

    return (
        <div className="shoping-product" style={sidebarStyle}>
            <h2 className='title'>الوجبات المطلوبة </h2>
            {/* Start btn Close ****************************** */}
            <div className="close-sidbar" onClick={closeShoping}>
                <span className="circel-h"></span>
                <span className="close-sidebar"></span>
                <span>إغلاق</span>
            </div>
            {/* End btn Close ****************************** */}

            {cartItems.map(cartItem => (
                <div key={cartItem.id} className='box-product'>
                    <div className="pro-details">
                        <h4 className='pro-name'>{cartItem.name}</h4>
                        <span className="price">
                            {(itemQuantities[cartItem.id] || 1) * cartItem.price} جنية
                        </span>
                        {/* <div className="pro-size">
                            <button>ص {cartItem.small}</button>
                            <button>و {cartItem.medium}</button>
                            <button>ك {cartItem.large}</button>
                        </div> */}
                        <div className="quantity-pro">
                            <button
                                className="increase"
                                onClick={() => handleIncrease(cartItem.id)}
                                >
                                    <span>
                                    <FaPlus />
                                    </span>
                            </button>
                            <h5 className="count">{itemQuantities[cartItem.id] || 1} </h5>
                            <button
                                className="decrease"
                                onClick={() => handleDecrease(cartItem.id)}
                            >
                                <span>
                                <FaMinus />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="img-pro">
                        <img src={`https://babgy.otrans.co/product/${cartItem.image}`} alt="img-food" />
                    </div>

                    <div className="btn-remove-pro">
                        <button className="btn-remove" onClick={() => handleRemove(cartItem.id)}><FaRegTrashAlt /></button>
                    </div>
                </div>
            ))}
            <div className="order-data">
                <div className="items-number-pro">
                    <span>عدد الوجبات </span>
                    <span className="number-items">{totalItems}</span>
                </div>
                <div className="items-price-pro">
                    <span>السعر</span>
                    <span className='price-items'>{totalPrice}</span>
                    <span>ريال</span>
                </div>
                <div className="order-request-pro">
                    <button className="request cus-btn" onClick={handleOrder}>
                        <span>اطلب الان</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

ShoppingCart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeShoping: PropTypes.func.isRequired,
};
export default ShoppingCart;
