import React, { useState } from "react";
import apiKey from "../config";
import axios from "axios";
import Photos from "./Photos";

const Search = ({ pics, setPics }) => {
  // state to hold the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  // state to hold the search term to be displayed on the page
  const [displayTerm, setDisplayTerm] = useState("");

  // function to update the searchTerm state as the user types
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // function to handle the form submission event
  // makes a request to the Flickr API using the search term and sets the pics state to the results of the search
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(function (response) {
        console.log(response.data.photos.photo);
        setPics(response.data.photos.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
    setDisplayTerm(searchTerm);
  };

  return (
    <div>
      {/* form with a text input and submit button for the user to enter a search term */}
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          {/* text input for the user to enter a search term */}
          <input type="text" value={searchTerm} onChange={handleChange} />
        </label>
        {/* submit button to trigger the search */}
        <input type="submit" value="Submit" />

      </form>
      {/* component to display search results */}
      <Photos searchTerm={searchTerm} />
    </div>
  );
}
  export default Search;

