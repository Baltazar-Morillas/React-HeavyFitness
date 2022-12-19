import React from "react"

const ItemDetail = ({suplementos}) =>{
    return(
        <div>
        {suplementos.map((producto)=>(
            <div>
            <img src={producto.img} alt={producto.nombre} />
            <div>
                <h5>{producto.nombre}</h5>
                <p>{producto.descripcion}</p>
            </div>
            <p><b>${(producto.precio)}</b></p>
            <button>Comprar</button>
            </div>))  
        }
        </div>
    )
}

export default ItemDetail