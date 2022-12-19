import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <h1>HeavyFitness</h1>
      <ul className='botones'>
      <Link to={`/category`}
        title="Accesorios">
          Accesorios
      </Link>
      <Link to={`/category/`}
        title="Ropa">
          Ropa
      </Link>
      <Link to={`/category/`}
        title="Suplementos">
          Suplementos
      </Link>
      </ul>
    </div>
  );
}