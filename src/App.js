import React from "react";
import Modal from "./components/Modal";
import PopUp from "./components/PopUp";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


function App() {
  return (
    
    <div style={styles}>
    <h2>Your Example here {"\u2728"}</h2>
    <Modal/>
    <h2>Your Example here {"\u2728"}</h2>
   <PopUp/>
    </div>
  );
}
export default App;
