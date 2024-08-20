import React from "react";
import   ShirtsData   from "../data/shirts";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../Context/CartContext";

const ShirtSingle = () => {

    const {id} = useParams();
    const { addToCart } = useCart()
    const  Items = ShirtsData.find((item) => item.id === id);

    return(
        <>
        <Navbar/>
            <div className="ind-page">
                <div className="ind-image">
                    <img className="ind-item-image" src={Items.image} alt="" />
                </div>
                <div className="ind-content">
                    <div>
                        <p className="ind-content-name">{Items.name}</p>
                        <p className="ind-content-price">Price: ₹ {Items.price} /-</p>
                        <p className="ind-content-size">size: {Items.size} </p>
                        <p className="ind-content-mat">Material Type: {Items.material}</p>
                    </div>
                    <button className="ind-content-button" onClick={() => addToCart()}>Add to cart</button>
                </div>
            </div>
        </>
    );
}

export default ShirtSingle;