import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiKey from "../config";
import axios from "axios";

const SearchResults = (props) => {
    const query = props.match.params.query;
    const [pics, setPics] = useState([]);

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