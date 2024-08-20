import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

const Navbar = () => {

    const {cartItems,} = useCart()

    return(
        <>
            <div className="nav">
                <div className="title">
                    <h1 className="title-name">ShopZone</h1>
                </div>
                <div className="search">
                    <input className="search-text" type="text" placeholder="Search"/> 
                </div>
                <div className="user">
                    <Link className="home-link" to="/">
                        <h3 className="user-title">Home</h3>
                    </Link>
                </div>
                <div className="user">
                    <h3 className="user-title">Account</h3>
                </div>
                <div className="cart">
                    <Link className="cart-link" to="/cart">
                        <p className="user-title">Cart - </p>
                        <span className="cart-items">{cartItems.length}</span>
                    </Link>
                </div>
            </div>
            <div className="submenu">
                <ul>
                    <Link className="tabs" to="/mobiles">
                        <li className="tabs-options">Mobiles</li>
                    </Link>
                    <Link className="tabs" to="/laptops">
                        <li className="tabs-options">Laptops</li>
                    </Link>
                    <Link className="tabs" to="/cameras">
                        <li className="tabs-options">Cameras</li>
                    </Link>
                    <Link className="tabs" to="/shirts">
                        <li className="tabs-options">Shirts</li>
                    </Link>
                    <Link className="tabs" to="/sarees">
                        <li className="tabs-options">Sarees</li>
                    </Link>
                    <Link className="tabs" to="/headphones">
                        <li className="tabs-options">HeadPhones</li>
                    </Link>
                    <Link className="tabs" to="/books">
                        <li className="tabs-options">Books</li>
                    </Link>
                    <Link className="tabs" to="/Tv">
                        <li className="tabs-options">TV</li>
                    </Link>
                    <Link className="tabs" to="/watches">
                        <li className="tabs-options">Watches</li>
                    </Link>
                    <Link className="tabs">
                        <li className="tabs-options">Today Deals</li>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;