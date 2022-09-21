import React from 'react'
import Popup from "reactjs-popup";

//Aqui le vamos a dar un estilo a la ventana emergentesi no queremos importar una hoja de estilo

const contentStyle = {
    height: "50vh",
    width: "50vw"
  };

  //Aqui le damos el estilo al div general

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const popUp = () => {
  return (
    //le mandamos el estilo que hemos declarado antes y dentro del pop up vamos a definir el boton y el div que va a abrir
    <div style={styles}>
    <Popup modal contentStyle={contentStyle} trigger={<button>Abrir</button>}>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum libero excepturi obcaecati ratione. Suscipit dolor necessitatibus commodi impedit? Maiores magni quia obcaecati perferendis assumenda. Reprehenderit et nihil quasi optio. </div>
  </Popup>
   </div>
  )
}

export default popUp