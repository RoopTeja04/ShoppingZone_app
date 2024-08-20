import React from "react";
import TVsData from "../data/tvs";

const TV = () => {
    const first_view_images = TVsData.slice(0, 5);
    return(
        <>
        <h2 className="products-title">TV's</h2>
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

export default TV;