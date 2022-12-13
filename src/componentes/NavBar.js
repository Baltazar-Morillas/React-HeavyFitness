import React from 'react';
import {Link} from "react-router-dom";
// import Paginas from './Paginas.js';
// import Cart from './CartWidget.js'
// import style from "../style.css"
// import url from 'https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>HeavyFitness</h1>
      <ul className='botones'>
      <Link to={`/category/${1}`}
        title="Accesorios">
          Accesorios
      </Link>
      <Link to={`/category/${2}`}
        title="Ropa">
          Ropa
      </Link>
      <Link to={`/category/${3}`}
        title="Suplementos">
          Suplementos
      </Link>
      </ul>
    </div>
  );
}