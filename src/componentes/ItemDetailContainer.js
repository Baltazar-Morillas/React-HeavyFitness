import React from 'react';
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({suplementos}) =>{
    return(
        <div>
            {suplementos.map((suplementos) => (
                <ItemDetail suplementos ={suplementos} key={suplementos.id} />
            ))}
        </div>
    );
}

export default ItemDetailContainer;