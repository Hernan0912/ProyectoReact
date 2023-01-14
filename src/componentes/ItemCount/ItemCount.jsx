import {useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({inicial, stock, onAdd}) => {
const [contador, setContador] = useState(inicial);

    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > 1 && setContador(contador - 1)                   
    const agregarAlCarrito = () => onAdd(contador)
    const productoAgregado = ()=>{
        toast.success('Producto agregado con éxito!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
                        
    return (
        <div>
            <button onClick={restar} className='btn btn-light botonCount'><i className="fas fa-minus"></i></button>
                {contador}
            <button onClick={sumar} className='btn btn-light botonCount'><i className="fas fa-plus"></i></button>
            <button className="btn btn-dark agregarCarritoImagen" onClick={()=>{agregarAlCarrito(); productoAgregado()}}> <Link to={'/Cart'} className='letraBlanca' ><i className="fas fa-cart-plus"></i></Link></button>
        </div>
    );
}
                        
export default ItemCount;
