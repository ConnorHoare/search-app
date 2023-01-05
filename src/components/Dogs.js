import React from "react";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Photos from "./Photos";

const Dog = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="dog" />
    </div>
  )
}

export default Dog;
