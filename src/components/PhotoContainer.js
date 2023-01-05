import React from "react";

const PhotoContainer = (props) => {
  const { data } = props;

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {data.length > 0 ? (
          data.map((photo) => (
            <li key={photo.id}>
              <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
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

export default PhotoContainer;
