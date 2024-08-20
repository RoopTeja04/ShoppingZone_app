import React from "react";
import   BooksData   from "../data/books";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../Context/CartContext";

const BookSingle = () => {

    const {id} = useParams();
    const { addToCart } = useCart()
    const  Items = BooksData.find((item) => item.id === id);

    return(
        <>
        <Navbar></Navbar>
            <div className="ind-page">
                <div className="ind-image">
                    <img className="ind-item-image" src={Items.image} alt="" />
                </div>
                <div className="ind-content">
                    <div>
                        <p className="ind-content-name">{Items.name}</p>
                        <p className="ind-content-price">price: ₹ {Items.price} /-</p>
                    </div>
                    <button className="ind-content-button" onClick={() => addToCart(Items)}>Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default BookSingle;