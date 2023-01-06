import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { cargarBDD, getProductos, getProducto, updateProducto, deleteProducto } from "../../assets/firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()


  useEffect(() => {
        if(category){
           //como ya funciona bien, reemplazo el consultaBDD por el getProductos, ya que devuelven lo mismo
                            
                getProductos().then(products => {
                const productsList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList ({productsList})
                setProductos(cardProductos) //seteo los productos que me vienen de la base de datos
                
            })
        }else{            
            getProductos().then(products => {
                const productsList = products.filter(prod=>prod.stock > 0)
                const cardProductos = ItemList ({productsList})
                setProductos(cardProductos) //seteo los productos que me vienen de la base de datos
            })

            //"1M1n2U7JPN7hTA9fDpoa"
            //cargarBDD().then(productos => console.log(productos))
            //getProductos().then(productos => console.log("getProductos:",productos))
            //getProducto("1M1n2U7JPN7hTA9fDpoa").then(prod => console.log("getProducto: ",prod))

        }
        //"5OR2OsBL2723fnd0a2Y8"
        /*getProducto("5OR2OsBL2723fnd0a2Y8").then(prod=>{
            prod.stock += 15
            updateProducto("5OR2OsBL2723fnd0a2Y8", prod).then(estado => console.log(estado))

            //deleteProducto("OR2OsBL2723fnd0a2Y8").then(estado => console.log(estado))
        })*/

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
