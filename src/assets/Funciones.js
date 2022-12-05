const consultarBDD = async (ruta) => {
// Cuando hago una consulta en fetch si pongo ./ siempre arranco desde la carpeta public.
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}

export default consultarBDD;