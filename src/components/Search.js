import React, { useState } from "react";
import apiKey from "../config";
import axios from "axios";
import Photos from "./Photos";

const Search = ({ pics, setPics }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Photos pics={pics} />
    </div>
  );
};

export default Search;
