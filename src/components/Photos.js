import React from "react";

const Photos = ({ pics }) => {
  return (
    <div className="photo-container">
      <ul>
        {pics.map(photo => (
          <li key={photo.id}>
            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;
