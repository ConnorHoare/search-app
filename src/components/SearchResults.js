import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiKey from "../config";
import axios from "axios";

// SearchResults component displays search results for a given query
const SearchResults = (props) => {
  // retrieve search query from route params
  const query = props.match.params.query;
  // state to store search results
  const [pics, setPics] = useState([]);
  // fetch search results from Flickr API when search query changes
  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(function (response) {
        console.log(response.data.photos.photo);
        setPics(response.data.photos.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query]);
  // if search results are available, render them in a list
  if (pics) {
    return (
      <div className="photo-container">
        <ul>
          {pics.map(photo => (
            <li key={photo.id}>
              <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="cat" />
            </li>
          ))}
        </ul>
      </div>
    )
  }

};

export default SearchResults;