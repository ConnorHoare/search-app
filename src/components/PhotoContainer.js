import React from "react";

const PhotoContainer = (props) => {
  const { data } = props;

  // Renders a list of photos in an unordered list
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {data ? (
          // If there is data, render the list of photos
          data.length > 0 ? (
            data.map((photo) => (
              <li key={photo.id}>
                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
              </li>
            ))
          ) : null // If there is no data, do not render anything
        ) : (
          // If data is still being fetched, show a loading message
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default PhotoContainer;