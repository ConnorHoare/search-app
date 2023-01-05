import React from "react";
import Pic from "./Pic";

const PicList = (props) => {
  const results = props.data;
  let pics = results.map((pic) => <Pic pic={pic} />);

  return (
    <div>
      {pics}
    </div>
  );
};

export default PicList;
