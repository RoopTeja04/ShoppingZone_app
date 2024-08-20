import React from "react";
import HeadPhonesData from "../data/headphones";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const HeadphonesPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                HeadPhonesData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view">
                                <Link to={`/headphones/${item.id}`}>
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

export default HeadphonesPage;