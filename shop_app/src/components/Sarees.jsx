import React from "react";
import SareesData from "../data/sarees";

const Sarees = () => {
    const first_view_images = SareesData.slice(0, 6);
    return(
        <>
        <h2 className="products-title">Sarees</h2>
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

export default Sarees;