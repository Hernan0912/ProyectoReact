import {useState} from 'react';

const ItemCount = () => {
    const [numero, setnumero] = useState(1);
    const sumar = () => {
                if(numero < 10){
                    setnumero(numero+1)
                }
            }

    const restar = () => {
        
        if(numero > 1){
            setnumero(numero-1)}
        }

    return (
        <div>
            <button className='btn btn-dark' onClick={()=>sumar()}>+</button>
            {numero}
            <button className='btn btn-danger' onClick={()=>restar()}>-</button>
            <button className='btn btn-success'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
