

const Formulario = ({busqueda}) => {
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder={busqueda} aria-label="Search" />
            <button className="btn btn-outline-info" type="submit">Buscar</button>
        </form>
    );
}

export default Formulario;
