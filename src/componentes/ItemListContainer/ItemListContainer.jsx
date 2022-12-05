import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import consultarBDD from '../../assets/Funciones.js'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()


  useEffect(() => {
        if(category){
            consultarBDD('../json/productos.json').then(products => {
            const productsList = products.filter(prod=>prod.stock>0).filter(prod=>prod.idCategoria === parseInt(category))
            const cardProductos = ItemList ({productsList})
            setProductos(cardProductos) //seteo los productos que me vienen de la base de datos
            })
        }else{
            consultarBDD('./json/productos.json').then(products => {
            const productsList = products.filter(prod=>prod.stock>0)
            const cardProductos = ItemList ({productsList})
            setProductos(cardProductos) //seteo los productos que me vienen de la base de datos
            })
        }

    }, [category]);
//si pongo [] se va a ejecutar cuando sucedan cambios en todo el array
//cuando sucede algun cambio interno en el array, pongo [propiedad]
//[category]cuando haya un cambio en la propiedad category, va a filtrar el componente


    return (
        <>
           <div className="row cardProducto">
            {productos}
           </div>
        </>
    );
}

export default ItemListContainer;
