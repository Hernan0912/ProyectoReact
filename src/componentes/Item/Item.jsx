import { Link } from "react-router-dom";
//Creamos la CARD
const Item = ({ producto }) => {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={`../img/${producto.imagen}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.marca}</p>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(producto.valor)}</p>
                    <button className='btn btn-primary' ><Link className="letraBlanca" to={`/product/${producto.id}`}>Ver producto</Link></button>
                </div>
            </div>
        </>
    );
}

export default Item;
