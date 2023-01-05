import React from "react";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Photos from "./Photos";

const Computer = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="computer" />
    </div>
  )
}

export default Computer;
