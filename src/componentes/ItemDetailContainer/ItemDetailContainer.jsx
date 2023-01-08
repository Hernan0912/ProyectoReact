import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../assets/firebase";
import consultarBDD from "../../assets/Funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams() //consulta el parametro id de app.jsx   

    useEffect(() => {
        
            getProducto(id).then(prod => setProducto(prod))
    }, []);

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={producto}/>
        </div>
    );
}
export default ItemDetailContainer;
