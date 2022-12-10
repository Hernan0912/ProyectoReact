import { Link } from "react-router-dom";

const Cart = () => {
    return (   
        <div className="carrito">
            <h1>No hay productos seleccionados</h1>
            <button className="nav-link btn btn-primary"><Link className="botonFinalizaCompra" to={'/checkout'}>Finalizar compra</Link></button>
        </div>
    );
}

export default Cart;
