import React, { useState } from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import PicList from "./PicList";

const Home = () => {
    const [pics, setPics] = useState([])
    return (
        <div className="container">
            <SearchForm />
            <Nav />
            <PhotoContainer />
            <div className="container">
                <PicList data={pics} />
            </div>
        </div>
    )
}

export default Home;