import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainter';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {CartContextProvider} from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/' element={<ItemListContainer greeting='Productos de Todo3D'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
            <Route path='/detail/:itemId' element={<ItemDetailContainter />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
