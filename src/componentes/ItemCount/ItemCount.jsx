import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({inicial, stock, onAdd}) => {
const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > 1 && setContador(contador - 1)                   
    const agregarAlCarrito = () => onAdd(contador)
                        
    return (
        <div>
            <button onClick={restar} className='btn btn-light botonCount'><i className="fas fa-minus"></i></button>
                {contador}
            <button onClick={sumar} className='btn btn-light botonCount'><i className="fas fa-plus"></i></button>
            <button className="btn btn-dark agregarCarritoImagen" onClick={agregarAlCarrito}> <Link className='letraBlanca' to={'/Cart'}><i className="fas fa-cart-plus"></i></Link></button>
        </div>
    );
}
                        
export default ItemCount;
