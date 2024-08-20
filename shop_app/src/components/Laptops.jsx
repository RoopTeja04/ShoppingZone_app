import React from "react";
import LaptopsData from "../data/laptops";

const Laptops = () => {
    const first_view_images = LaptopsData.slice(0, 5);
    return(
        <>
        <h2 className="products-title">Laptops</h2>
        <div className="products">
            {
                first_view_images.map((item) => {
                    return(
                        <>
                            <div className="products-box">
                                <img className="products-items" src= {item.image} alt=""/>
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

export default Laptops