import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import axios from 'axios';
import './css/index.css'

import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computer from './components/Computer';

import apiKey from './config';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    axios.get()
  }

  render() {
    return (
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="cats" element={<Cats />} />
          <Route path='dogs' element={<Dogs />}/>
          <Route path='computer' element={<Computer />}/>
        </Routes>
      </div>
    )
  }
}

