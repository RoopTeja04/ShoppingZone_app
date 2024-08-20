import React from "react";
import BooksData from "../data/books";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const BooksPage = () => {
    return(
        <>
        <Navbar />
        <div className="mobilepage-section">
            {
                BooksData.map((item) => {
                    return(
                        <>
                            <div className="shirt-item-view">
                                <Link to={`/books/${item.id}`}>
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

export default BooksPage;