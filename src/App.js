import React, { Component, useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import axios from 'axios';
import './css/index.css'

import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computer from './components/Computer';
import SearchForm from './components/SearchForm';

import apiKey from './config';

// get the query of the flickr api - this is the end point
// get the value of the search form
// append the query on the flickr api to be set to the the value of the search form
// use interpolation to set the query.

function App() {
  const [pics, setPics] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${inputRef}&per_page=24&format=json&nojsoncallback=1`)
    .then(function (response) {
      console.log(response.data.photos.photo);
      setPics(response.data.photos.photo);
    })
    .catch(function (error) {
      console.log(error)
    })
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path='dogs' element={<Dogs />} />
        <Route path='computer' element={<Computer />} />
        <Route path="/search/:query" component={SearchForm} />
      </Routes>
    </div>
  )
}

export default App