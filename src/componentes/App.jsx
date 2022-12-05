import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import Cart from './Cart/Cart';
const App = () => {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/> 
        </Routes>
    </BrowserRouter>
     

    </>
   
  );
}

export default App;

