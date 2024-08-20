import React from "react";
import "./App.css"
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import MobilePage from "./pages/Mobilepage";
import LaptopPage from "./pages/laptoppage";
import CameraPage from "./pages/camerspage";
import MobileSingle from "./singlePage/mobileSIngle";
import LaptopSingle from "./singlePage/laptopSingle";
import CameraSingle from "./singlePage/cameraSingle";
import UserCart from "./Context/userCart";
import ShirtsPage from "./pages/Shirtspage";
import ShirtSingle from "./singlePage/shirtsSingle";
import SareesPage from "./pages/Sareespage";
import HeadphonesPage from "./pages/HeadPhones";
import BooksPage from "./pages/Books";
import TvsPage from "./pages/TVsPage";
import WatchesPage from "./pages/Watchespage";
import WatchSingle from "./singlePage/watchesSingle";
import SareeSingle from "./singlePage/sareesSingle";
import HeadphoneSingle from "./singlePage/headphoneSingle";
import BookSingle from "./singlePage/booksSingle";
import TvSingle from "./singlePage/tvSingle";


const App = () => {
    return(
        <>
        <div>
            <Routes>
                <Route path="/" element = { <Landing /> } />
                <Route path="/mobiles" element = { <MobilePage /> } />
                <Route path="/laptops" element = { <LaptopPage /> } /> 
                <Route path="/cameras" element = { <CameraPage />} />
                <Route path="/shirts" element = { <ShirtsPage />} />
                <Route path="/sarees" element = { <SareesPage /> } />
                <Route path="/headphones" element = { <HeadphonesPage />} />
                <Route path="/books" element = { <BooksPage />} />
                <Route path="/Tv" element = { <TvsPage />} />
                <Route path="/watches" element = { <WatchesPage />} />
                    <Route path="/mobiles/:id" element = { <MobileSingle />} />
                    <Route path="/laptops/:id" element = { <LaptopSingle /> } />
                    <Route path="/cameras/:id" element = { <CameraSingle />} />
                    <Route path="/shirts/:id" element ={ <ShirtSingle />} />
                    <Route path="/sarees/:id" element = {<SareeSingle />} /> 
                    <Route path="/headphones/:id" element = {<HeadphoneSingle />} />
                    <Route path="/books/:id" element = { <BookSingle />} />
                    <Route path="/tv/:id" element = { <TvSingle />} />
                    <Route path="/watches/:id" element = { <WatchSingle />} />
                <Route path="/cart" element= {<UserCart/>} />
            </Routes>
        </div>
        </>
    )
}

export default App;