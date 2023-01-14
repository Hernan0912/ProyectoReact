import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()

    return (
            <ul className="navbar-nav me-auto">
                <li className="nav-link">
                    <button className="btn btn-primary"><Link to={"/cart"}><ion-icon name="cart-outline" />{getItemQuantity() > 0 && <span className="letraBlanca">{getItemQuantity()}</span>}</Link></button>
                </li>  
            </ul>
    );
}

export default CartWidget;
