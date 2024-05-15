import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footbar from './components/Footbar';
import Card from './components/Card';
import DetalleProp from './pages/DetallePropiedad';
import PropsVenta from './pages/PropsVenta';
import PropsAlquiler from './pages/PropsAlquiler';
import Contactanos from './pages/Contactanos';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div className="App">      
    {/*--------- navbar------ */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detalle/:id' element={<DetalleProp/>}/>
        <Route path='/venta' element={<PropsVenta/>} />
        <Route path='/alquiler' element={<PropsAlquiler/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contactanos/>} />

        {/* rutas para el desarrollador */}
        <Route path='/card' element={<Card/>}/>
      </Routes>

      <Footbar/>
    </div>
  );
}

export default App;
