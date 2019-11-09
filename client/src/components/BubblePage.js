import React, { useState, useEffect } from "react";
import api from '../utils/api';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{
  	api().get('/colors')
  		.then((resp) => {setColorList(resp.data)})
  		.catch((err)=> console.log(err))
  },[])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
