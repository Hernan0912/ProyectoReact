import Categorias from "./Categrorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
import BotonDarkMode from "./BotonDarkMode/BotonDarkMode";
//context
import { useDarkModeContext } from '../../Context/DarkModeContext';
const Navbar = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-primary' : 'bg-primary'}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias/>
                    <CartWidget/>
                    <BotonDarkMode/>
                    </div>
            </div>
        </nav>
    
    );
}

export default Navbar;
