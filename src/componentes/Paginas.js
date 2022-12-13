import React from 'react';
import {Link} from "react-router-dom";

export default function Paginas() {
  return (
      <ul>
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
  );
}
