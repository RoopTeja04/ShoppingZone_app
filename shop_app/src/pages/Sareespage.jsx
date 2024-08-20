import React from "react";
import SareesData from "../data/sarees";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SareesPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                SareesData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view">
                                <Link to={`/sarees/${item.id}`}>
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

export default SareesPage;