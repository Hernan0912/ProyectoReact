import './App.css';
import Formulario from './Formulario/Formulario';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"PRIMERA PRE-ENTREGA"}/>
    </>
   
  );
}

export default App;

