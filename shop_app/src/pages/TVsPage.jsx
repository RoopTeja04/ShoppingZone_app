import React from "react";
import TvsData from "../data/tvs";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const TvsPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                TvsData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view">
                                <Link to={`/tv/${item.id}`}>
                                    <div className="page-Img-tv">
                                        <img className="item-image-tv" src={item.image} alt=""/>
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

export default TvsPage;