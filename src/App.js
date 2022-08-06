import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainter from './components/ItemDetailContainer/ItemDetailContainter';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Todos los productos de Mi tienda 3D'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
          <Route path='/detail/:itemId' element={<ItemDetailContainter />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
