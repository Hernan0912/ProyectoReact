import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const onAdd = (contador) => {

    }

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
                <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                <button className='btn btn-primary agregarCarrito'> <Link to={'/Cart'} className='letraBlanca'>Finalizar compra</Link></button>

            </div>
            
        </div>
    );
}

export default ItemDetail;
