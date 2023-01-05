import React from "react";

const PhotoContainer = (props) => {
  const { data } = props;

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {data ? (
          data.length > 0 ? (
            data.map((photo) => (
              <li key={photo.id}>
                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
              </li>
            ))
          ) : null
        ) : (
          <div>Loading...</div>
        )}

      </ul>
    </div>
  );
};

export default PhotoContainer;
