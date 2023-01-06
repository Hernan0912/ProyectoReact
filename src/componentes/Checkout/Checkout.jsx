import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/firebase';
import { useCarritoContext } from '../../Context/CarritoContext';
//El elemento para crear una notificación se llama "toast"
import { toast } from 'react-toastify';

const Checkout = () => {

    //consulto los datos de totalPrice, totalPrice está en el carrito
    const {totalPrice, carrito, emptyCart} = useCarritoContext()

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) =>{
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]
        aux.forEach(prodCarrito=>{
            getProducto(prodCarrito.id).then(prodBDD=>{
                if(prodBDD.stock >= prodCarrito.cant){
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                }else{
                    console.log("Stock insuficiente")
                    //CASO USO PRODUCTO NO COMPRADO, LO VEMOS EL MARTES
                }
            })
        })

        //Formato de fecha occidental
        createOrdenCompra(cliente, totalPrice(), new Date().toISOString()).then(ordenCompra => {

        getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`Su pedido fue procesado. Su orden de compra es: ${item.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        })


    }
    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repita Email</label>
                    <input type="email" className="form-control" name="email2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
    );
}

export default Checkout;
