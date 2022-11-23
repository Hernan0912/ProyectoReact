import Formulario from "../Formulario/Formulario";
import Categorias from "./Categrorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <Categorias/>
                        <Formulario busqueda={"Buscar categorias"}/>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
    );
}

export default Navbar;
