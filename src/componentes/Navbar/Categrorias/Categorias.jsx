import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link Active" aria-current="page" href="#">Página principal</a>
            </li>
            <li className="nav-item">
                <a className="nav-link Active" href="#">Notebook</a>
            </li>
            <li className="nav-item">
                <a className="nav-link Active" href="#">Smart TV</a>
            </li>
            <li className="nav-item">
                <a className="nav-link Active" href="#">Celular</a>
            </li>
        </ul>
    );
}

export default Categorias;
