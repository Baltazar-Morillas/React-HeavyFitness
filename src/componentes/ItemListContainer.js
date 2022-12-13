import React from 'react';
import { arrayData } from './arrays/arrayData';
// import {useParams} from "react-router-dom";


export default function ItemListContainer() {
  // const [array, setArray]=useState({});
  // const idCategory = useParams();
  // console.log(idCategory);
  return (
  <div>
    {arrayData.map((producto)=>(
    <div>
  <img src={producto.img} alt={producto.nombre} />
  <div>
      <h5>{producto.nombre}</h5>
      <p>{producto.descripcion}</p>
  </div>
  <p><b>${(producto.precio).toFixed(2)}</b></p>
  <button>Comprar</button>
  </div>))  
  }
  </div>
  );
}