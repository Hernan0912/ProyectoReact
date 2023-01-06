import './BotonDarkMode.css'
import { useDarkModeContext } from '../../../Context/DarkModeContext.js';

const BotonDarkMode = () => {

    const {toggleDarkMode} = useDarkModeContext()
    const {darkMode} = useDarkModeContext()

    return (
           
            <div className="theme-switch-wrapper">
                <p className={`${darkMode ? 'style: white' : 'style: black'} modoOscuro`}>Modo oscuro</p>
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" onInput={() => toggleDarkMode()} id="checkbox" />
                    <div className="slider round"/>
                </label>
            </div>

    );
}

export default BotonDarkMode;