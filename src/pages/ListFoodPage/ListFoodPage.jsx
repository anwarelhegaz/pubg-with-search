
import { useEffect } from "react";
import ListFood from "../../component/ListFood/ListFood";
import { Link } from "react-router-dom";


export default function ListFoodPage() {

    // start Animation *******************************************************************
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

      // End Animation *******************************************************************

        // Scroll to the top when the component mounts
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    return (
        <>
            <section className="title-page scroll-scale">
                <div className="container">
                    <h3>قائمة الطعام</h3>
                    <ul>
                        <li>
                            <Link to="/home">الرئيسية</Link>
                        </li>
                        <li>
                            <span>قائمة الطعام</span>
                        </li>
                    </ul>
                </div>
            </section>
            < ListFood />

        </>
    )
}

