import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../Context/CarritoContext';

const ItemDetail = ({item}) => {

    const {addItem} = useCarritoContext()
    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={item.img} alt="" className='img-fluid rounded-start'/>
            </div>
            <div className='col-md-8 letraNegra'>
                <div className="card-body">
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Modelo: {item.modelo}</p>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/>
                    <div className='agregarCarrito'>
                        <button className='btn btn-primary'> <Link to={'/Cart'} className='letraBlanca'>Ir al carrito</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
