import React from "react";
import ShirtsData from "../data/shirts";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ShirtsPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                ShirtsData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view">
                                <Link to={`/shirts/${item.id}`}>
                                    <div className="page-Img">
                                        <img className="item-image" src={item.image} alt=""/>
                                    </div>
                                </Link>
                                <div className="pageNames">
                                   <h1 className="shirts-item-name">{item.name}</h1> 
                                </div>
                            </div>
                        </>
                    );
                })
            }
        </div>
        </>
    );
}

export default ShirtsPage;