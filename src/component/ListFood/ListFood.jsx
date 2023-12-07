
// import "./ListFood.css"
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaCartPlus } from 'react-icons/fa';
// import { Link } from "react-router-dom";
// import AnimationObserver from '../AnimationObserver/AnimationObserver';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions/cartActions';

// export default function ListFood() {
//     const [categories, setCategories] = useState([]);
//     const [category, setCategory] = useState('وجبات بابجي');
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const dispatch = useDispatch();
//     const [addedToCartItems, setAddedToCartItems] = useState([]);
    
//     axios.get('https://babgy.otrans.co/api/auth/fetchallproduct')
//     .then(response => {
//         console.log('API response:', response.data);
//         setItems(response.data || []);
//         setLoading(false);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         setError('حدث خطا اثناء التحميل برجاء اعاده تحميل الصفحه ...');
//         setLoading(false);
//     });

//     useEffect(() => {
//         axios.get('https://babgy.otrans.co/api/auth/FetchCategory')
//             .then(response => {
//                 // Assuming the categories are in response.data
//                 setCategories(response.data);
//                 setCategory(response.data[0]?.name || ''); // Set default category
//             })
//             .catch(error => {
//                 console.error('Error fetching categories:', error);
//                 // Handle error as needed
//             });
//     }, []);

//         const handleAddToCart = (item) => {
//             dispatch(addToCart(item));


//             // Add the item id to the addedToCartItems array
//             setAddedToCartItems((prevItems) => [...prevItems, item.id]);

//             // Reset the added-to-cart state after a short delay <An>
//             setTimeout(() => {
//                 setAddedToCartItems((prevItems) => prevItems.filter((id) => id !== item.id));
//             }, 1000); // Adjust the delay as needed
//         };

//         const filteredItems = items.filter(item => item.category === category);

//     return (

//         <section className="list-food">
//             <AnimationObserver />
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xs-12">
//                         <div className="main-header scroll-scale">
//                             <h3>
//                                 قائمة الطعام
//                             </h3>
//                         </div>
//                     </div>
//                     {loading && <p className="loading-list">جاري تحميل قائمه الطعام ...</p>}
//                     {error && <p className="loading-list">{error}</p>}
//                     <div className="col-xs-12">
//                         <div className="col-xs-12">
//                             <ul className="nav-tabs scroll-scale">
//                             {categories.map((cat) => (
//                                 <li key={cat.id} className={category === cat.name ? 'active' : ''}>
//                                     <button onClick={() => setCategory(cat.name)}>{cat.name}</button>
//                                 </li>
//                             ))}
//                             </ul>
//                         </div>
//                         <div className="col-xs-12">
//                                 <div className="row">
//                                     {filteredItems.map(item => (                         
//                                         <div key={item.id} className = "super-box-pro col-xs-12 col-md-6 col-lg-4 ">
//                                             <div className="cart-content">
//                                                 <button
//                                                     className={`add-cart-btn ${addedToCartItems.includes(item.id) ? 'added-to-cart' : ''}`}
//                                                     onClick={() => handleAddToCart(item)}
//                                                 >
//                                                     <FaCartPlus />
//                                                 </button>
//                                             </div>
//                                             <Link to={`/view/${item.id}`}>
//                                                 {console.log(item.id)}
//                                                     <div className={`box scroll-scale`} >
//                                                         <div className="img-cont">
//                                                             {console.log('Image URL:', item.image)}
//                                                             <img src={`https://babgy.otrans.co/api/auth/fetchallproduct/${item.image}`} alt="img-food" />
//                                                         </div>
//                                                         <div className="details">
//                                                             <div className="row">
//                                                                 <div className="col-md-7 col-xs-12">
//                                                                     <div className="name-product">
//                                                                         <h4>{item.name}</h4>
//                                                                         <p>{item.Bio}</p>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="col-md-5 col-xs-12 text-center">
//                                                                     <div className="price">
//                                                                         <span>{item.price} ريال</span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                             </Link>
//                                         </div>
//                                     ))}
//                                 </div>
//                         </div>
//                         <div className="col-xs-12">
//                             <div className="super text-center scroll-right">
//                                 <Link to="/list-food" className="btn-more ">
//                                     <span>المزيد</span>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// code ok --------------------------------------------------------------------------------------------------
// code ok --------------------------------------------------------------------------------------------------
// code ok --------------------------------------------------------------------------------------------------
// code ok --------------------------------------------------------------------------------------------------

// import "./ListFood.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AnimationObserver from "../AnimationObserver/AnimationObserver";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/actions/cartActions";

// export default function ListFood() {
//     const [categories, setCategories] = useState([]);
//     const [category, setCategory] = useState("وجبات بابجي");
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const dispatch = useDispatch();
//     const [addedToCartItems, setAddedToCartItems] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 const responseItems = await axios.get(
//                 "https://babgy.otrans.co/api/auth/fetchallproduct"
//                 );

//                 console.log("API response:", responseItems.data);

//                 setItems(responseItems.data.items || []);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setError(
//                 "حدث خطا اثناء التحميل برجاء اعاده تحميل الصفحه ..."
//                 );
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     useEffect(() => {
//         axios
//         .get("https://babgy.otrans.co/api/auth/FetchCategory")
//         .then((response) => {
//             setCategories(response.data);
//             setCategory(response.data[0]?.name || ""); // Set default category
//         })
//         .catch((error) => {
//             console.error("Error fetching categories:", error);
//             // Handle error as needed
//         });
//     }, []);

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));

//         setAddedToCartItems((prevItems) => [...prevItems, item.id]);

//         setTimeout(() => {
//         setAddedToCartItems((prevItems) =>
//             prevItems.filter((id) => id !== item.id)
//         );
//         }, 1000); // Adjust the delay as needed
//     };

//     useEffect(() => {
        
//     },[])

//     const filteredItems = items.filter((item) => item.category === category);

//     return (
//         <section className="list-food">
//         <AnimationObserver />
//         <div className="container">
//             <div className="row">
//             <div className="col-xs-12">
//                 <div className="main-header scroll-scale">
//                 <h3>قائمة الطعام</h3>
//                 </div>
//             </div>
//             {loading && (
//                 <p className="loading-list">جاري تحميل قائمه الطعام ...</p>
//             )}
//             {error && <p className="loading-list">{error}</p>}
//             <div className="col-xs-12">
//                 <div className="col-xs-12">
//                 <ul className="nav-tabs scroll-scale">
//                     {categories.map((cat) => (
//                     <li
//                         key={cat.id}
//                         className={category === cat.name ? "active" : ""}
//                     >
//                         <button onClick={() => setCategory(cat.name)}>
//                         {cat.name}
//                         </button>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>
//                 <div className="col-xs-12">
//                 <div className="row">
//                     {filteredItems.map((item) => (
//                     <div
//                         key={item.id}
//                         className="super-box-pro col-xs-12 col-md-6 col-lg-4"
//                     >
//                         <div className="cart-content">
//                         <button
//                             className={`add-cart-btn ${
//                             addedToCartItems.includes(item.id)
//                                 ? "added-to-cart"
//                                 : ""
//                             }`}
//                             onClick={() => handleAddToCart(item)}
//                         >
//                             <FaCartPlus />
//                         </button>
//                         </div>
//                         <Link to={`/view/${item.id}`}>
//                         <div className={`box scroll-scale`}>
//                             <div className="img-cont">
//                             <img
//                                 // src={`https://babgy.otrans.co/api/auth/fetchallproduct/${item.image}`}
//                                 src={`https://babgy.otrans.co/product/${item.image}`}
//                                 alt="img-food"
//                             />
//                             </div>
//                             <div className="details">
//                                 <div className="row">
//                                     <div className="col-md-7 col-xs-12">
//                                     <div className="name-product">
//                                         <h4>{item.name}</h4>
//                                         <p>{item.Bio}</p>
//                                     </div>
//                                     </div>
//                                     <div className="col-md-5 col-xs-12 text-center">
//                                     <div className="price">
//                                         <span>{item.price} ريال</span>
//                                     </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </Link>
//                     </div>
//                     ))}
//                 </div>
//                 </div>
//                 <div className="col-xs-12">
//                 <div className="super text-center scroll-right">
//                     <Link to="/list-food" className="btn-more">
//                     <span>المزيد</span>
//                     </Link>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     );
// }


// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// import "./ListFood.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AnimationObserver from "../AnimationObserver/AnimationObserver";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/actions/cartActions";

// export default function ListFood() {
//     const [categories, setCategories] = useState([]);
//     const [category, setCategory] = useState();
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const dispatch = useDispatch();
//     const [addedToCartItems, setAddedToCartItems] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 const responseItems = await axios.get(
//                     `https://babgy.otrans.co/api/auth/fetchallproduct`
//                 );

//                 console.log("API response:", responseItems.data);

//                 setItems(responseItems.data.items || []);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setError(
//                 "حدث خطا اثناء التحميل برجاء اعاده تحميل الصفحه ..."
//                 );
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [category]);

//     useEffect(() => {
//         axios
//         .get("https://babgy.otrans.co/api/auth/FetchCategory")
//         .then((response) => {
//             setCategories(response.data);
//             setCategory(response.data[0]?.id_cat || ""); // Set default category
//         })
//         .catch((error) => {
//             console.error("Error fetching categories:", error);
//             // Handle error as needed
//         });
//     }, []);

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));

//         setAddedToCartItems((prevItems) => [...prevItems, item.id]);

//         setTimeout(() => {
//         setAddedToCartItems((prevItems) =>
//             prevItems.filter((id) => id !== item.id)
//         );
//         }, 1000); // Adjust the delay as needed
//     };

//     useEffect(() => {
        
//     },[])

//     // const filteredItems = items.filter((item) => item.id_cat === category.id_cat);
//     const filteredItems = items.filter((item) => item.id === item.id);

//     return (
//         <section className="list-food">
//         <AnimationObserver />
//         <div className="container">
//             <div className="row">
//             <div className="col-xs-12">
//                 <div className="main-header scroll-scale">
//                 <h3>قائمة الطعام</h3>
//                 </div>
//             </div>
//             {loading && (
//                 <p className="loading-list">جاري تحميل قائمه الطعام ...</p>
//             )}
//             {error && <p className="loading-list">{error}</p>}
//             <div className="col-xs-12">
//                 <div className="col-xs-12">
//                 <ul className="nav-tabs scroll-scale">
//                     {categories.map((cat) => (
//                     <li
//                         key={cat.id}
//                         className={category === cat.id ? "active" : ""}
//                     >
//                         <button onClick={() => setCategory(cat.id)}>
//                             {cat.id}
//                         </button>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>
//                 <div className="col-xs-12">
//                 <div className="row">
//                     {filteredItems.map((item) => (
//                     <div
//                         key={item.id}
//                         className="super-box-pro col-xs-12 col-md-6 col-lg-4"
//                     >
//                         <div className="cart-content">
//                         <button
//                             className={`add-cart-btn ${
//                             addedToCartItems.includes(item.id)
//                                 ? "added-to-cart"
//                                 : ""
//                             }`}
//                             onClick={() => handleAddToCart(item)}
//                         >
//                             <FaCartPlus />
//                         </button>
//                         </div>
//                         <Link to={`/view/${item.id}`}>
//                         <div className={`box scroll-scale`}>
//                             <div className="img-cont">
//                                 <img
//                                     src={`https://babgy.otrans.co/product/${item.image}`}
//                                     alt="img-food"
//                                 />
//                             </div>
//                             <div className="details">
//                                 <div className="row">
//                                     <div className="col-md-7 col-xs-12">
//                                     <div className="name-product">
//                                         <h4>{item.name}</h4>
//                                         <p>{item.Bio}</p>
//                                     </div>
//                                     </div>
//                                     <div className="col-md-5 col-xs-12 text-center">
//                                     <div className="price">
//                                         <span>{item.price} ريال</span>
//                                     </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </Link>
//                     </div>
//                     ))}
//                 </div>
//                 </div>
//                 <div className="col-xs-12">
//                 <div className="super text-center scroll-right">
//                     <Link to="/list-food" className="btn-more">
//                     <span>المزيد</span>
//                     </Link>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     );
// }
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

// import "./ListFood.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AnimationObserver from "../AnimationObserver/AnimationObserver";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/actions/cartActions";

// export default function ListFood() {
//     const [categories, setCategories] = useState([]);
//     const [category, setCategory] = useState("وجبات بابجي");
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const dispatch = useDispatch();
//     const [addedToCartItems, setAddedToCartItems] = useState([]);

//     useEffect(() => {
//         axios
//         .get("https://babgy.otrans.co/api/auth/FetchCategory")
//         .then((response) => {
//             setCategories(response.data);
//             setCategory(response.data[0]?.name || ""); // Set default category
//         })
//         .catch((error) => {
//             console.error("Error fetching categories:", error);
//             // Handle error as needed
//         });
//     }, []);

//     const handleAddToCart = (item) => {
//         dispatch(addToCart(item));

//         setAddedToCartItems((prevItems) => [...prevItems, item.id]);

//         setTimeout(() => {
//         setAddedToCartItems((prevItems) =>
//             prevItems.filter((id) => id !== item.id)
//         );
//         }, 1000); // Adjust the delay as needed
//     };

//     const setCategoryAndFetchProducts = async (selectedCategory) => {
//         setCategory(selectedCategory.name); // Set the category to the name of the selected category
//         try {
//         const response = await axios.get(
//             `https://babgy.otrans.co/api/auth/FetchproductbelongToCate/${selectedCategory.id}`
//         );
//         setItems(response.data.items || []);
//         setLoading(false);
//         } catch (error) {
//         console.error("Error fetching products:", error);
//         setError(
//             "حدث خطأ أثناء تحميل المنتجات برجاء إعادة تحميل الصفحة ..."
//         );
//         setLoading(false);
//         }
//     };

//     const filteredItems = items.filter((item) => item.category === category);

//     return (
//         <section className="list-food">
//         <AnimationObserver />
//         <div className="container">
//             <div className="row">
//             <div className="col-xs-12">
//                 <div className="main-header scroll-scale">
//                 <h3>قائمة الطعام</h3>
//                 </div>
//             </div>
//             {loading && (
//                 <p className="loading-list">جاري تحميل قائمه الطعام ...</p>
//             )}
//             {error && <p className="loading-list">{error}</p>}
//             <div className="col-xs-12">
//                 <div className="col-xs-12">
//                 <ul className="nav-tabs scroll-scale">
//                     {categories.map((cat) => (
//                     <li
//                         key={cat.id}
//                         className={category === cat.name ? "active" : ""}
//                     >
//                         <button onClick={() => setCategoryAndFetchProducts(cat)}>
//                         {cat.name}
//                         </button>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>
//                 <div className="col-xs-12">
//                 <div className="row">
//                     {filteredItems.map((item) => (
//                     <div
//                         key={item.id}
//                         className="super-box-pro col-xs-12 col-md-6 col-lg-4"
//                     >
//                         <div className="cart-content">
//                         <button
//                             className={`add-cart-btn ${
//                             addedToCartItems.includes(item.id)
//                                 ? "added-to-cart"
//                                 : ""
//                             }`}
//                             onClick={() => handleAddToCart(item)}
//                         >
//                             <FaCartPlus />
//                         </button>
//                         </div>
//                         <Link to={`/view/${item.id}`}>
//                         <div className={`box scroll-scale`}>
//                             <div className="img-cont">
//                             <img
//                                 src={`https://babgy.otrans.co/product/${item.image}`}
//                                 alt="img-food"
//                             />
//                             </div>
//                             <div className="details">
//                             <div className="row">
//                                 <div className="col-md-7 col-xs-12">
//                                 <div className="name-product">
//                                     <h4>{item.name}</h4>
//                                     <p>{item.Bio}</p>
//                                 </div>
//                                 </div>
//                                 <div className="col-md-5 col-xs-12 text-center">
//                                 <div className="price">
//                                     <span>{item.price} ريال</span>
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         </Link>
//                     </div>
//                     ))}
//                 </div>
//                 </div>
//                 <div className="col-xs-12">
//                 <div className="super text-center scroll-right">
//                     <Link to="/list-food" className="btn-more">
//                     <span>المزيد</span>
//                     </Link>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     );
// }



/*----------------------------*/
/*----------------------------*/
/*-----------nice-----------------*/
/*----------------------------*/

// Importing necessary dependencies and styles
import "./ListFood.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimationObserver from "../AnimationObserver/AnimationObserver";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";


export default function ListFood() {
    // State hooks to manage component state
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [productsToShow, setProductsToShow] = useState(9);
    const dispatch = useDispatch();
    const [addedToCartItems, setAddedToCartItems] = useState([]);

    // useEffect to fetch categories when the component mounts
    useEffect(() => {
        axios
        .get("https://babgy.otrans.co/api/auth/FetchCategory")
        .then((response) => {
            setCategories(response.data);
            // Call handleCategoryClick with the ID of the first category
            if (response.data.length > 0) {
                handleCategoryClick(response.data[3].id);
            }
        })
        .catch((error) => {
            console.error("Error fetching categories:", error);
            // Handle error as needed
        });
    }, [ ]);

    // Function to fetch products based on category ID
    const fetchProductsByCategory = (categoryId) => {
        axios
            .get(`https://babgy.otrans.co/api/auth/FetchproductbelongToCate/${categoryId}`)
            .then((response) => {
                setProducts(response.data.items);
                setActiveCategoryId(categoryId);
            })
            .catch((error) => {
                console.error(`Error fetching products for category ${categoryId}:`, error);
                // Handle error as needed
            });
    };

    // Function to handle category click events
    const handleCategoryClick = (categoryId) => {
        fetchProductsByCategory(categoryId);
        console.log(categoryId)
    };

    // Function to handle adding items to the cart
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

        setAddedToCartItems((prevItems) => [...prevItems, item.id]);

        setTimeout(() => {
        setAddedToCartItems((prevItems) =>
            prevItems.filter((id) => id !== item.id)
        );
        }, 1000); // Adjust the delay as needed
    };

    // JSX structure for the ListFood component
    return (
        <section className="list-food">
        <AnimationObserver />
        <div className="container">
            <div className="row">
            <div className="col-xs-12">
                <div className="main-header scroll-scale">
                <h3>قائمة الطعام</h3>
                </div>
            </div>
            <div className="col-xs-12">
                <div className="col-xs-12">
                <ul className="nav-tabs scroll-scale">
                    {/* Mapping through categories and rendering buttons */}
                    {categories.map((cat) => (
                        <li key={cat.id} className={activeCategoryId === cat.id ? 'active' : ''}>
                            <button onClick={() => handleCategoryClick(cat.id)}>
                                {cat.name}
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
                <div className="col-xs-12">
                <div className="row">
                    {/* Mapping through products and rendering product boxes */}
                    {Array.isArray(products) && products.slice(0, productsToShow).map((item) => (
                    <div
                        key={item.id}
                        className="super-box-pro col-xs-12 col-md-6 col-lg-4"
                    >
                        <div className="cart-content">
                        <button
                            className={`add-cart-btn ${
                            addedToCartItems.includes(item.id)
                                ? "added-to-cart"
                                : ""
                            }`}
                            onClick={() => handleAddToCart(item)}
                        >
                            <FaCartPlus />
                        </button>
                        </div>
                        <Link to={`/view/${item.id}`}>
                        <div className={`box scroll-scale`}>
                            <div className="img-cont">
                            <img
                                src={`https://babgy.otrans.co/product/${item.image}`}
                                alt="img-food"
                            />
                            </div>
                            <div className="details">
                                <div className="row">
                                    <div className="col-md-7 col-xs-12">
                                    <div className="name-product">
                                        <h4>{item.name}</h4>
                                        <p>{item.Bio}</p>
                                    </div>
                                    </div>
                                    <div className="col-md-5 col-xs-12 text-center">
                                    <div className="price">
                                        <span>{item.price} جنية</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    ))}
                </div>
                {products.length > productsToShow && (
                <div className="text-center ">
                    <button className="btn-more" onClick={() => setProductsToShow((prev) => prev + 3)}>
                        عرض المزيد
                    </button>
                </div>
            )}
                </div>

            </div>
            </div>
        </div>
        </section>
    );
}