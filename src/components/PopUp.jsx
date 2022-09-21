import React from 'react'
import Popup from "reactjs-popup";


const contentStyle = {
    height: "50vh",
    width: "50vw"
  };
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const popUp = () => {
  return (

    <div style={styles}>
    <Popup modal contentStyle={contentStyle} trigger={<button>Trigger</button>}>
    <div> Your Popup content here </div>
  </Popup>
   </div>
  )
}

export default popUp