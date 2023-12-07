
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import CustomerReviews from "../../component/CustomerReviews/CustomerReviews";
import Gallary from "../../component/Gallary/Gallary";
import ListFood from "../../component/ListFood/ListFood";
import Offers from "../../component/Offers/Offers";
import WellcomeBanner from "../../component/WellcomeBanner/WellcomeBanner";
import './HomePage.css'


export default function HomePage() {

    const [showScrollButton, setShowScrollButton] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Function to handle scrolling and show/hide the scroll-to-top button
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <WellcomeBanner />
            <Offers />
            <ListFood />
            <Gallary />
            <CustomerReviews />
            {/* Render the scroll-to-top button when showScrollButton is true */}
            {showScrollButton && (
                <button
                    className=" scroll-to-top-button"
                    onClick={scrollToTop}
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </>
    )
}
