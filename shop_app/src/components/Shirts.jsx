import React from "react";
import ShirtsData from "../data/shirts";

const Shirts = () => {
    const first_view_images = ShirtsData.slice(0, 6);
    return(
        <>
        <h2 className="products-title">shirts</h2>
        <div className="products">
            {
                first_view_images.map((item) => {
                    return(
                        <>
                            <div className="products-box">
                                <img className="products-items-saree" src={item.image} alt=""/>
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

export default Shirts;