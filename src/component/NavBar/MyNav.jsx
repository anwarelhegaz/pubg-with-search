import './MyNav.css'
import { FaTh } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import  logo  from "../../assets/images/logo.png"
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SearchPage from '../SearchPage/SearchPage';


export default function MyNav() {
    
    // State to track the active link
    const [activeLink, setActiveLink] = useState(null);
    // Get the current location
    const location = useLocation();
    // State to track the sidebar's open/close status
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // State to track the search component's open/close status
    const [isSearchOpen, setIsSearchOpen] = useState(false);  

    //// Function to open the sidebar
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    // Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Function to open the search component
    const openSearch = () => {
        setIsSearchOpen(true);
    };

    // Function to close the search component
    const closeSearch = () => {
        setIsSearchOpen(false);
    };

    // Function to update the active link
    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };
    
    // Effect to update the active link based on the current route
    useEffect(() => {
        // Extract the route from the current location and set it as the active link
        const currentRoute = location.pathname.substring(1); // Remove the leading slash
        setActiveLink(currentRoute);
    }, [location]);



    return (
        <>
            {/* Render the Sidebar component */}
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

            {/* Render the SearchPage component */}
            <SearchPage isOpen={isSearchOpen} closeSearch={closeSearch} items={[]} />

            {/* Start Logo Responsive */}
            <div className="logo-respnsive">
                <Link to="home" className='logo-top-img'>
                    <img src={logo} alt='logo-img'/>
                </Link>
            </div>
            {/* End Logo Responsive */}

            {/* Start Mobile nav */}
            <div className="nav-mobile">
                <div className="container">
                    <div className="nav-mob-content">
                        <div className="book-btn">
                            <Link to={"/home"} className="cus-btn">
                                أحجز طلبك
                            </Link>
                        </div>
                        <div className="search-menu-btns">
                            <button className='search-icon ' onClick={isSearchOpen ? closeSearch : openSearch}><span><FaSearch /></span></button>
                            <button className='btn-menu' onClick={isSidebarOpen ? closeSidebar : openSidebar}><FaTh /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Mobile nav */}

            {/* Start Main Nav */}
            <div className="navbar">
                <div className="container">
                    <div className="nav-content">
                        <div className="nav-logo">
                            <Link to="home" >
                                <img className='main-logo' src={logo} alt="logo-img" />
                            </Link>
                        </div>
                        <div className="navbar-collapsee">
                            <ul>
                                <li>
                                    <Link to="/home" 
                                    // onClick={() => setActiveLink('home')} => Test local
                                    onClick={() => handleSetActiveLink('home')} 
                                    className={activeLink === 'home' ? 'active-link' : ''}
                                    >الرئيسية
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/we-are" 
                                    onClick={() => handleSetActiveLink('we-are')} 
                                    className={activeLink === 'we-are' ? 'active-link' : ''}
                                    >من نحن
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/list-food" 
                                    onClick={() => handleSetActiveLink('list-food')} 
                                    className={activeLink === 'list-food' ? 'active-link' : ''}
                                    >قائمة الطعام
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/branches" 
                                    onClick={() => handleSetActiveLink('branches')} 
                                    className={activeLink === 'branches' ? 'active-link' : ''}
                                    >فروعنا
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery" 
                                    onClick={() => handleSetActiveLink('gallery')} 
                                    className={activeLink === 'gallery' ? 'active-link' : ''}
                                    >معرض الصور
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" 
                                    onClick={() => handleSetActiveLink('contact')} 
                                    className={activeLink === 'contact' ? 'active-link' : ''}
                                    >اتصل بنا
                                    </Link>
                                </li>
                                <button className='btn-menu' onClick={isSidebarOpen ? closeSidebar : openSidebar}><FaTh /></button>
                            </ul>
                        </div>
                        <div className="book-search">
                            {/* Search button */}
                            <button className='search-icon ' onClick={isSearchOpen ? closeSearch : openSearch}>
                                <span><FaSearch /></span>
                            </button>
                            <div className="book">
                                <Link to={"/home"} className="cus-btn">
                                    أحجز طلبك
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Main Nav */}
        </>
        
    )
}
