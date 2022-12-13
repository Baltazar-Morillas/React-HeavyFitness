import './App.css';
import React from "react";
import "./style.css";
import NavBar from "./componentes/NavBar.js"
import ItemListContainer from "./componentes/ItemListContainer.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./componentes/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
      <NavBar />
      <h1>Bienvenidos a HeavyFitness</h1>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
/* <Route exact path="/people/:id" element={<PeopleId />} /> */