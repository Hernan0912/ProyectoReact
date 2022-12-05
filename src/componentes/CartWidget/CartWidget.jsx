import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
            <ul className="navbar-nav me-auto">
                <li className="nav-link">
                    <button className="btn btn-primary"><Link to={"/cart"}><ion-icon name="cart-outline" /></Link><span>0</span></button>
                </li>  
            </ul>
    );
}

export default CartWidget;
