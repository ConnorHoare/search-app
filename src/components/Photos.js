import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "../config";

/* This component is responsible for fetching and displaying photos from the Flickr API,
based on the search term passed to it as a prop */
const Photos = ({ searchTerm }) => {
  const [pics, setPics] = useState([]);
  console.log(searchTerm)

  // Fetch photos from Flickr API on mount and whenever the search term changes
  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(function (response) {
        console.log(response.data)
        console.log(response.data.photos.photo);
        // Check if the API returned photos and set the state with the photos if so
        if (response.data.photos && response.data.photos.photo) {
          setPics(response.data.photos.photo);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [searchTerm]);

  return (
    <div className="photo-container">
      <ul>
        {/* Render the photos if there are any, otherwise render the "No Results Found" message */}
        {pics && pics.length > 0 ? (
          pics.map(photo => (
            <li key={photo.id}>
              <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
            </li>
          ))
        ) : (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Photos;
