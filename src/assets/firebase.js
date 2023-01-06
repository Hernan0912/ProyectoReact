// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDocs, getDoc, collection, doc, updateDoc, deleteDoc} from 'firebase/firestore'


//getFirestore: consulto a mi base de datos
//addDoc: sirve para agregar un nuevo documento
//getDocs: sirve para obtener todos los elementos
//getDoc: sirve para obtener un elemento
//colection: sirve para consultar la base de datos cuando se trabaja con solecciones
//Doc: sirve para consultar un elemento de la base de datos cuando se trabaja con documentos


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APY_KEY,
  authDomain: "react-primer-proyecto-dic-2022.firebaseapp.com",
  projectId: "react-primer-proyecto-dic-2022",
  storageBucket: "react-primer-proyecto-dic-2022.appspot.com",
  messagingSenderId: "451759234379",
  appId: "1:451759234379:web:0b406a38cd4cf6ab109cce"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore()

/*
Metodo CRUD:
Create
Read
Update
Delete
*/

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { 
        //collection si existe consulta si no existe crea
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            img: prod.imagen,
            precio: prod.valor,
            stock: prod.stock
        })
    })
}

//consulto la base de datos

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos")) //De mi base de datos, trae todos los elementos de la colección "productos"
    const items = productos.docs.map(prod => {
        //data me devuelve cada uno de los atributos.
        //le pido que me copie los atributos y me los devuelva en un objeto junto con el id, ya que estan en partes distintas.
        return {...prod.data(), id: prod.id}
    })
    return items
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db,"productos",id))
    const item = {...producto.data(), id: producto.id}
    return item
}

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db,"productos",id),info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db,"productos",id))
    return estado
}

//Las ordenes de compra, no pueden eliminar ni editar, por cuestiones legales
//Por lo que solo vamos a generar un create y un read

const createOrdenCompra = async (cliente, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db,"ordenCompra"),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        precioTotal: precioTotal
    })
    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db,"ordenCompra",id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}