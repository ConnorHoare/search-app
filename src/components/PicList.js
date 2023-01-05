import React from "react";
import Pic from "./Pic";

const PicList = (props) => {
  const results = props.data;
  // maps through the data array passed in as a prop, and returns a Pic component for each element
  let pics = results.map((pic) => <Pic pic={pic} />);

  return (
    <div>
      {/* renders the list of Pic components */}
      {pics}
    </div>
  );
};

export default PicList;