import React from "react";
import  MobilesData   from "../data/mobiles";

const Mobiles = () => {
    const first_view_images = MobilesData.slice(0,7)
    return(
        <>
            <h2 className="products-title">Mobiles</h2>
            <div className="products">
                {
                    first_view_images.map((item) => {
                        return( 
                            <>
                            <div className="products-box">
                                <img className="products-items" src={item.image} alt="" />
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

export default Mobiles;