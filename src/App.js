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
  const [pics, setPics] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

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
      <SearchForm onSearch={handleSearch} inputRef={inputRef} />
    </div>
  );
}

export default App;
