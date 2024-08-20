import React from "react";
import LaptopsData from "../data/laptops";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const LaptopPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                LaptopsData.map((item) => {
                    return(
                        <>
                        <div className="shirt-item-view">
                            <Link to={`/laptops/${item.id}`}>
                                <div className="page-Img-lap">
                                    <img className="item-image" src={item.image} alt=""/>
                                </div>
                            </Link>
                            <div className="pageNames">
                                <h1 className="shirts-item-name-lap">{item.name}</h1>
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

export default LaptopPage;