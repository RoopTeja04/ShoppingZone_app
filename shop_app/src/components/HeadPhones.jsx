import React from "react";
import HeadPhonesData from "../data/headphones";

const HeadPhones = () => {
    const first_view_images = HeadPhonesData.slice(0, 6);
    return(
        <>
        <h2 className="products-title">Headphones</h2>
        <div className="products">
            {
                first_view_images.map((item) => {
                    return(
                        <>
                            <div className="products-box">
                                <img className="products-items" src={item.image} alt=""/>
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

export default HeadPhones;