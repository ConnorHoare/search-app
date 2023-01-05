import React, { useState } from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import PicList from "./PicList";
import Photos from "./Photos";

const Home = () => {
  const [pics, setPics] = useState([]);
  const [defaultPics, setDefaultPics] = useState([]);

  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="default" />
    </div>
  )
}


export default Home;
