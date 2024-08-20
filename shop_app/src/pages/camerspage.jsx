import React from "react";
import CameraData from "../data/Watches";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const CameraPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                CameraData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view-cam">
                                <Link to={`/cameras/${item.id}`}>
                                    <div className="page-Img-cam">
                                        <img className="item-image-cam" src={item.image} alt=""/>
                                    </div>
                                </Link>
                                <div className="pageNames">
                                    <h1 className="shirts-item-name-cam">{item.name}</h1>
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

export default CameraPage;