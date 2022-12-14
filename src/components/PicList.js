import React from "react";
import Pic from "./Pics";

const PicList = props => {
    const results = props.data;
    let pics = results.map(pic => <Pic/>)
}

export default PicList