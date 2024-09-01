import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar/>
      <ItemListContainer bienvenida="Bienvenido a mi pagina"/>    
    </div>

)}

export default App
