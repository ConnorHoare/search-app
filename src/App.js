import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/index.css";

import Home from "./components/Home";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Computer from "./components/Computer";
import SearchForm from "./components/SearchForm";
import Search from "./components/Search";

import apiKey from "./config";

function App() {
  // Initialize the state for the search results
  const [pics, setPics] = useState([]);
  // Initialize the reference for the search form input
  const inputRef = useRef('');
  // Use the useNavigate hook from react-router-dom to navigate to different routes
  const navigate = useNavigate();

  // Use the useEffect hook to fetch the search results from the Flickr API when the component mounts
  const fetchPics = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputRef.current.value}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(function (response) {
        console.log(response.data.photos.photo);
        setPics(response.data.photos.photo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  useEffect(() => {
    fetchPics();
  }, [inputRef.current.value]);
  
  


  const handleSearch = (event) => {
    event.preventDefault();

    // Navigate to the search route
    navigate(`/search/${inputRef.current.value}`);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="computer" element={<Computer />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
