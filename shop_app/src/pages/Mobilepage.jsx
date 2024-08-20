import React from "react";
import  MobilesData  from "../data/mobiles";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MobilePage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                MobilesData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view">
                                <Link to={`/mobiles/${item.id}`}>
                                    <div className="page-Img-mob">
                                        <img className="item-image" src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className="pageNames">
                                    <h1 className="shirts-item-name-mob">{item.name}</h1>
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

export default MobilePage;