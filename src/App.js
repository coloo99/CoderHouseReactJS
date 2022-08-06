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
          <Route path='/' element={<ItemListContainer greeting='Mi tienda 3D'/>} />
          <Route path='/detail/:itemId' element={<ItemDetailContainter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
