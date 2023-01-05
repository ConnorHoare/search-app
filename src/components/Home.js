import React, { useState } from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import PicList from "./PicList";
import Search from "./Search";

const Home = () => {
  const [pics, setPics] = useState([]);

  return (
    <div className="container">
      <Search pics={pics} setPics={setPics} />
      <Nav />
      <PhotoContainer />
      <div className="container">
        <PicList data={pics} />
      </div>
    </div>
  );
};

export default Home;
