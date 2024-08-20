import React from "react";
import Mobiles from "./Mobiles";
import Laptops from "./Laptops";
import Camera from "./Camera";
import Shirts from "./Shirts";
import Sarees from "./Sarees";
import Watches from "./Watches";
import HeadPhones from "./HeadPhones";
import TV from "./TV";
import Books from "./Books";

const Products = () => {
    return(
        <>
        <div>
            <Mobiles/>
            <Laptops/>
            <Camera/>
            <Shirts/>
            <Sarees/>
            <HeadPhones/>
            <Books/>
            <Watches/>
            <TV/>
        </div>
        </>
    );
}

export default Products;