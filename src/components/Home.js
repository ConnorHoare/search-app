// This component is responsible for rendering the main layout of the app, including the search form, nav, and photo grid.
// It also contains the logic for displaying default photos when no search term is entered or when a search returns no results.

import React, { useState } from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import PicList from "./PicList";
import Photos from "./Photos";

const Home = (props) => {
  // state to hold photos returned from search
  const [pics, setPics] = useState([]);
  // state to hold default photos to display on home page
  const [defaultPics, setDefaultPics] = useState([]);

  return (
    <div className="container">
    {/* search form component with props to update pics state and trigger search */}
      <SearchForm fetchPics={props.fetchPics} />
    {/* nav component */}
      <Nav />
    {/* photos component with prop for default search term to display default photos */}
      <Photos searchTerm="default" />
    </div>
  )
}

export default Home;