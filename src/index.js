import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Bienvenida() {
  const name = "rodri";
  return (
    <div>
      <h1>Hola {name} soy un componente</h1>
    </div>
  );
}

function Pregunta() {
  const pregunta = false;
  /*
  if (pregunta) {
    return <h1>Hay pregunta</h1>;
  } else {
    return <h1>No hay pregunta</h1>;
  }*/

  return <h1>{pregunta ? "Hay pregunta 😀" : "No hay pregunta🤣"}</h1>;
}

function Objeto() {
  const user = {
    nombre: "Rodrigo Diaz",
    edad: 30,
  };

  return (
    <h1>
      {" "}
      Nombre: {user.nombre} Edad:{user.edad}
    </h1>
  );
  /*return <h1>{JSON.stringify(user)}</h1>;*/
}

root.render(
  <>
    <Header titulo="Header" />
    <Main titulo="Main" />
    <Footer titulo="Footer" />
  </>
);
