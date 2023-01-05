import React from "react";

// Import components
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Photos from "./Photos";

// Cat component that displays a search form, nav bar, and photos with a search term of "cat"
const Cat = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="cat" />
    </div>
  )
}

// Export the Cat component
export default Cat;