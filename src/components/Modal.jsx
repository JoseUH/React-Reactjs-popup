import React from 'react'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const modal = () => {
  return (
    <div>
    <Popup trigger={<button>Trigger</button>}>
    <div> Your Popup content here </div>
  </Popup>
   </div>
  )
}

export default modal