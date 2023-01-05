import React from "react";

// Import components
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import Photos from "./Photos";

// Dog component that displays a search form, nav bar, and photos with a search term of "dog"
const Dog = () => {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Photos searchTerm="dog" />
    </div>
  )
}

// Export the Dog component
export default Dog;
