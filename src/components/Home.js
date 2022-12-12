import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";

const Home = () => {
    return (
        <div className="container">
            <SearchForm />
            <Nav />
            <PhotoContainer />
        </div>
    )
}

export default Home;