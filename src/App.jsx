import './App.css';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Remeras from './components/Remeras'; 
import Pantalones from './components/Pantalones.jsx'; 
import Shorts from './components/Shorts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Remeras" element={<Remeras />} />
          <Route path="/Pantalones" element={<Pantalones />} />
          <Route path="/Shorts" element={<Shorts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
