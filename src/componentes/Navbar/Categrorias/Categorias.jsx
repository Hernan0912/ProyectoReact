import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link">
                <button className="btn btn-primary nav-link"><Link to={"/"} className='nav-link'>Todos los productos</Link></button>
            </li>
            <li className="nav-link">
                <button className="btn btn-primary nav-link"><Link to={"/category/1"} className='nav-link'>Notebooks</Link></button>
            </li>
            <li className="nav-link">
                <button className="btn btn-primary nav-link"><Link to={"/category/2"} className='nav-link'>Celulares</Link></button>
            </li>
            <li className="nav-link">
                <button className="btn btn-primary nav-link"><Link to={"/category/3"} className='nav-link'>Smart TV</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
