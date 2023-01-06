import { useContext, useState, createContext } from "react";

const carritoContext = createContext()
export const useCarritoContext = () => useContext(carritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
        //retorna el producto (V) o undefinded (F)
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)){
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cantidad = cantidad
            setCarrito(aux)
        }else{
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito,nuevoProducto]) 
        }
    }

    const emptyCart = () =>{
        setCarrito([])
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () =>{
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    const totalPrice = () =>{
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio),0)
    }

    return(
        <carritoContext.Provider value={{carrito, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </carritoContext.Provider>
    )
} 