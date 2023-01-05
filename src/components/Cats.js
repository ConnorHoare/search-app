import React from "react";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Photos from "./Photos";

const Cat = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="cat" />
    </div>
  )
}

export default Cat;
