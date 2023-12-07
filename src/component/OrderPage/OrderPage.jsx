import { useLocation, Link } from 'react-router-dom';

const OrderPage = () => {
    const location = useLocation();
    const selectedProducts = location.state?.selectedProducts || [];

    // Function to generate WhatsApp message
    const generateWhatsAppMessage = () => {
        // Customize the message format as needed
        const message = `طلب جديد:\n${selectedProducts.map(product => `${product.name} - ${product.price} ريال`).join('\n')}`;
        // Encode the message for the WhatsApp link
        const encodedMessage = encodeURIComponent(message);
        // Generate the WhatsApp link
        const whatsappLink = `https://wa.me/123456789?text=${encodedMessage}`;
        
        // Open the WhatsApp link
        window.open(whatsappLink, '_blank');
    };

    return (
        <div>
        <h2>تأكيد الطلب</h2>
        <ul>
            {selectedProducts.map(product => (
            <li key={product.id}>{product.name} - {product.price} ريال</li>
            ))}
        </ul>
        <button onClick={generateWhatsAppMessage}>أكد الطلب عبر WhatsApp</button>
        <Link to="/shopping-cart">رجوع إلى سلة التسوق</Link>
        </div>
    );
};

export default OrderPage;