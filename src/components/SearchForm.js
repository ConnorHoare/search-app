import React from "react";
import { useState, useRef } from "react"; // useRef and useState hooks imported from React
import axios from "axios"; // axios library for making HTTP requests
import apiKey from "../config"; // file with API key
import Photos from "./Photos"; // Photos component for displaying search results

const SearchForm = (props) => {
  const inputRef = useRef(); // useRef hook to create a reference to the input element
  const [formValue, setFormValue] = useState(''); // useState hook to create a state variable and its setter function

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    console.log(inputRef.current.value); // log the value of the input element to the console
    setFormValue(inputRef.current.value); // set the formValue state variable to the value of the input element
    props.fetchPics(inputRef.current.value)
  }

  return (
    <div>
      {/* form with a text input and submit button for the user to enter a search term */}
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="search" name="search" placeholder="Search" ref={inputRef} required />
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default SearchForm

