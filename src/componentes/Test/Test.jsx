import React from 'react';

const Test = (condicion) => {
    return (
        <>
            {condicion ? <h1>Hola</h1> : <h1>Adios</h1>}
        </>
    );
}

export default Test;
