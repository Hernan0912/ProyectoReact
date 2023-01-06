
import {useState, createContext, useContext} from 'react'

//Creo mi contexto
const DarkModeContext = createContext()

//Para no utilizar el useContext todo el tiempo dentro de los componentes, cree una variable que sea igual a useContext y consultarla, consulta al contexto, nada mas (darkmode y toggleDarkMode).
export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
        if(!darkMode)
        document.body.firstElementChild.classList.add('darkMode')
        else 
        document.body.firstElementChild.classList.remove('darkMode')
        }
        
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}