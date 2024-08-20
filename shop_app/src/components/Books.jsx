import React from "react";
import BooksData from "../data/books";

const Books = () => {
    const first_view_images = BooksData.slice(0,6);
    return(
        <>
        <h2 className="products-title">Books</h2>
        <div className="products">
            {
                first_view_images.map((item) => {
                    return(
                        <>
                            <div className="products-box">
                                <img className="products-items-book" src={item.image} alt=""/>
                                <p className="products-names">{item.name}</p>
                            </div>
                        </>
                    )
                })
            }
            
        </div>
        </>
    );
}

export default Books;