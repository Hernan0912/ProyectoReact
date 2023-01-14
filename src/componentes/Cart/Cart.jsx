import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";
import { useDarkModeContext } from '../../Context/DarkModeContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
        const eliminarProducto = () =>{
            toast.error('Producto Eliminado con éxito!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                });
        }
    return (   
        <>
            {carrito.length === 0 ?
                <>
                    <h1>Tu carrito está vacío</h1>
                    <button className="nav-link btn btn-primary"><Link className="botonFinalizaCompra" to={'/'}>Seguir comprando</Link></button>
                </>
                :
                <div className="container">
                        {
                            carrito.map(prod => 
                                <div className="card mb-3 cartContainer" key={prod.id} style={{maxWidth:'540px'}}>
                                    <div className="row g-o imgCarrito">
                                        <div className="col-md-4">
                                            <img src={prod.img} alt="Producto" className="img-fluid rounded-start"/>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="cardBody">
                                            <h5 className="card-tittle">{`${prod.marca} ${prod.modelo}`}</h5>
                                            <p className="card-text">Cantidad: {prod.cant} </p>
                                            <p className="card-text">Precio: ${new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                            <p className="card-text negrita">Total: ${new Intl.NumberFormat('de-De').format(prod.cant*prod.precio)}</p>
                                        </div>
                                        <button className="btn btn-danger" onClick={() =>{ removeItem(prod.id); eliminarProducto()}}>Eliminar producto</button>
                                    </div>
                                </div>
                            )
                        }


                    <div>
                        <p className={`${darkMode ? 'blanco' : 'negrita'}`}>Compra total: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                        <div className="botoneraCarrito">
                            <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                            <button className="nav-link btn btn-primary"><Link className="botonFinalizaCompra" to={'/'}>Seguir comprando</Link></button>
                            <button className="nav-link btn btn-primary"><Link className="botonFinalizaCompra" to={'/checkout'}>Finalizar compra</Link></button>
                        </div>      
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
