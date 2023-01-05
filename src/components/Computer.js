import React from "react";

// Import components
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Photos from "./Photos";

// Computer component that displays a search form, nav bar, and photos with a search term of "computer"
const Computer = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="computer" />
    </div>
  )
}

// Export the Computer component
export default Computer;