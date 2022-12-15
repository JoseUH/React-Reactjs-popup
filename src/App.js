import React from "react";
import Modal from "./components/Modal";
import PopUp from "./components/PopUp";
import './App.css';
import BoxDrag from "./components/BoxDrag";
import ListDrag from "./components/ListDrag";



function App() {
  return (
    
    <div >
    <h2>Abrir pestaña</h2>
    <Modal/>
    <h2>Abrir ventana superior</h2>
   <PopUp/>
   <h2>Abrir modal dinamico</h2>
   <ListDrag/>
    <BoxDrag/>
    </div>
  );
}
export default App;
