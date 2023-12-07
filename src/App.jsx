import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from './component/NavBar/MyNav'
import HeaderTop from './component/HeaderTop/HeaderTop';
import HomePage from './pages/HomePage/HomePage';
import WeAre from './pages/WeArePage/WeAre';
import Footer from './component/Footer/Footer';
import ProductDetail from './component/ProductDetail/ProductDetail';
import ListFoodPage from './pages/ListFoodPage/ListFoodPage';
import BranchesPage from './pages/branchesPage/BranchesPage';
import Login from './component/Login/Login';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './component/NotFound/NotFound';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import OrderPage from './component/OrderPage/OrderPage';



  function App() {

  // State to track the Shoping open/close status
  const [isShopingOpen, setisShopingOpen] = useState(false);

  // const [cartItemsCount, setCartItemsCount] = useState(0);

  //// Function to open the sidebar
  const openShobing = () => {
    setisShopingOpen(true);
  };
  // Function to close the sidebar
  const closeShobing = () => {
    setisShopingOpen(false);
  };
  
  // const updateCartItemsCount = (count) => {
  //   setCartItemsCount(count);
  // };

  return (
    <>

        {/* <div className="items-number">{cartItemsCount}</div> */}
        <button className="card-btn-page" onClick={isShopingOpen ? closeShobing : openShobing} ><FaShoppingCart /></button>
      {/* Render the ShoppingCart component */}
      {/* <ShoppingCart isOpen={isShopingOpen} closeShoping={closeShobing} updateCartItemsCount={updateCartItemsCount}/> */}
      <ShoppingCart isOpen={isShopingOpen} closeShoping={closeShobing} />
      <Router>
        <HeaderTop />
        <MyNav />
        {/* <ListFood addToCart={addToCart} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Login />} />
          <Route path="/we-are" element={<WeAre />} />
          <Route path="/list-food" element={<ListFoodPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/view/:productId" element={<ProductDetail />} />
          <Route path="/order" element={<OrderPage />} />
          {/* <Route path="/cart" element={<ShoppingCart isOpen={isShopingOpen} closeShoping={closeShobing} updateCartItemsCount={updateCartItemsCount} />} /> */}
          <Route path="/cart" element={<ShoppingCart isOpen={isShopingOpen} closeShoping={closeShobing} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

      </>  

  )
}

export default App
