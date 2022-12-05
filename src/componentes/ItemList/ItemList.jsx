import Item from "../Item/Item";
//Modifica mi array de objetos
const ItemList = ({productsList}) => {
    return (
        <>
            {productsList.map(product => <Item key={product.id} producto={product}/>)}
        </>
    );
}

export default ItemList;
