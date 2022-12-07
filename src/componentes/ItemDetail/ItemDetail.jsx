import React from 'react';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={`../img/${item.imagen}`} alt="" className='img-fluid rounded-start'/>
            </div>
            <div className='col-md-8'>
                <h5 className='card-title'>{item.nombre}</h5>
                <p className='card-text'>Modelo: {item.modelo}</p>
                <p className='card-text'>Marca: {item.marca}</p>
                <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.valor)}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <ItemCount stock={item.stock}/>
                <button className='btn btn-primary agregarCarrito'>Finalizar compra</button>

            </div>
            
        </div>
    );
}

export default ItemDetail;
