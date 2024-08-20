import React from "react";
import LaptopsData from "../data/laptops";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import Navbar from "../components/Navbar";

const LaptopSingle = () => {

    const {id} = useParams();
    const { addToCart } = useCart()
    const Items = LaptopsData.find((item) => item.id === id);

    return(
        <>
        <Navbar/>
        <div>
            <div className="ind-page">
                <div className="ind-image">
                    <img className="ind-item-image" src={Items.image} alt="" />
                </div>
                <div className="ind-content">
                    <div>
                        <p className="ind-content-name">{Items.name}</p>
                        <p className="ind-content-price">price: ₹ {Items.price} /-</p>
                        <p className="ind-content-price">stoarge: {Items.storage}</p>
                    </div>
                    <div>
                        <button className="ind-content-button" onClick={() => addToCart(Items)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default LaptopSingle;