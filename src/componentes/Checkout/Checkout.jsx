import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/firebase';
import { useCarritoContext } from '../../Context/CarritoContext';
//El elemento para crear una notificación se llama "toast"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Checkout = () => {

    //consulto los datos de totalPrice, totalPrice está en el carrito
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    
    const valorInicial = {nombre:" ", email:" ", email2: " ",dni:" ",celular:" ",direccion:" "}
    const [valorFormulario, setValorFormulario] = useState(valorInicial)
    const [erroresFormulario, setErroresFormulario] = useState({})
    const [validar, setValidar] = useState(false)
    const [contador, setContador] = useState(0)

    const handleChange = (e)=>{
        const {name,value}=e.target
        setValorFormulario({...valorFormulario, [name]:value})
    }
    const consultarFormulario = (e) =>{
        e.preventDefault()

        setErroresFormulario(validarErroresFormulario(valorFormulario)); 

        const aux = [...carrito]
        aux.forEach(prodCarrito=>{
            getProducto(prodCarrito.id).then(prodBDD=>{
                if(prodBDD.stock >= prodCarrito.cant){
                    //prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                }else{
                    toast.error(`El producto ${prodBDD.nombre} mo tiene stock disponible`)
                    emptyCart()
                }
            })
        })
    }

    useEffect(()=>{
        const arrayErrors = Object.values(erroresFormulario)
        console.log("arrayErrors: ",arrayErrors)
        console.log("arrayErrors.length: ",arrayErrors.length)
        console.log("contador: ",contador)
        if(arrayErrors.length === 0 && contador === 1){
            setValidar(true);

            const datForm = new FormData(datosFormulario.current);
            const cliente = Object.fromEntries(datForm);
            
            createOrdenCompra(cliente, totalPrice(), new Date().toISOString()).then(ordenCompra => {

                getOrdenCompra(ordenCompra.id).then(item => {
                        toast.success(`Su pedido fue procesado. Su orden de compra es: ${item.id}`)
                        emptyCart()
                        navigate("/")
                    })
                })
        }
        setContador(1)
    },[erroresFormulario])

    //VALIDACION DEL FORMULARIO
    const validarErroresFormulario = (values)=>{
        const numeros=["1","2","3","4","5","6","7","8","9","0"]
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const regexNombre = /[A-Za-z]$/;
        
        if(regexNombre.test(values.nombre)){
        }else{
            errors.nombre="*Formato de nombre incorrecto"
        }

        if(values.email === " " ){
            errors.email = "*El email es obligatorio"
        }else if(!regex.test(values.email)){
            errors.email = "*Formato de email no valido"
        }else if(!values.email){
            errors.email = "*El email es obligatorio"
        }
        if(values.email2 === " "){
            errors.email2 = "*Repita su email"
        }else if(values.email2 != values.email){
            errors.email2 = "*Los emails no coinciden"
        }else if(!values.email2){
            errors.email2 = "*Repita su email"
        }
        if(values.dni === " "){
            errors.dni = "*El dni es obligatorio"
        }else if(!values.dni){
            errors.dni = "*El dni es obligatorio"
        }
        if(values.celular === " "){
            errors.celular = "*El celular es obligatorio"
        }else if(!values.celular){
            errors.celular = "*El celular es obligatorio"
        }
        if(values.direccion === " "){
            errors.direccion = "*La direccion es obligatoria"
        }else if(!values.direccion){
            errors.direccion = "*La direccion es obligatoria"
        }

        return errors;
    }
    
    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" value={valorFormulario.nombre} onChange={handleChange}/>
                    <p className='red'>{erroresFormulario.nombre}</p>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={valorFormulario.email} onChange={handleChange}/>
                    <p className='red'>{erroresFormulario.email}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repita su email</label>
                    <input type="email" className="form-control" name="email2" value={valorFormulario.email2} onChange={handleChange}/>
                    <p className='red'>{erroresFormulario.email2}</p>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" value={valorFormulario.dni} onChange={handleChange}/>
                    <p className='red'>{erroresFormulario.dni}</p>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" value={valorFormulario.celular} onChange={handleChange}/>
                    <p className='red'>{erroresFormulario.celular}</p>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" value={valorFormulario.direccion} onChange={handleChange}/>
                    <p className='red'>{erroresFormulario.direccion}</p>
                </div>
                <div className='botonFormulario'>        
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    <button className="nav-link btn btn-primary"><Link className="botonFinalizaCompra" to={'/cart'}>Volver al carrito</Link></button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;
