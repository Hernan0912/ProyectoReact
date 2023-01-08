import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";
//Creamos la CARD
const Item = ({ producto }) => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
            <div className={`card mb-3 ${darkMode ? 'cardBodyDark' : 'card-body'}`} style={{ width: '18rem' }} >
                <div className='card-body'>
                    <img src={producto.img} className="card-img-top" alt="..." />
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.marca}</p>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className='btn btn-primary' ><Link className="letraBlanca" to={`/product/${producto.id}`}>Ver producto</Link></button>
                </div>
            </div>
        </>
    );
}

export default Item;
