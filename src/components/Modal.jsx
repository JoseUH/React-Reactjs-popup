import React from 'react'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const modal = () => {
  return (
    <div>
    <Popup trigger={<button>Abrir</button>}>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur itaque aliquid perspiciatis! Maxime aliquid laborum alias, voluptas fuga dolores eveniet repellat quis laboriosam aperiam sapiente in modi debitis natus! </div>
  </Popup>
   </div>
  )
}

export default modal