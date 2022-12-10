import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
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
          <Route path='/checkout' element={<Checkout/>}/> 
        </Routes>
    </BrowserRouter>
     

    </>
   
  );
}

export default App;

