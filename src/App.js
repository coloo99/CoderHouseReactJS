import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Mi tienda 3D'/>
      <Counter stock={15} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
