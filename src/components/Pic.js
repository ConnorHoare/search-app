import React from "react";

const Pic = (props) => {
  return (
    // Render a single image element with the src pulled from the pic prop object
    <li>
      <img
        src={`https://farm${props.pic.farm}.staticflickr.com/${props.pic.server}/${props.pic.id}_${props.pic.secret}.jpg`}
        alt=""
      />
    </li>
  );
};

export default Pic;