import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footbar from './components/Footbar';
import Card from './components/Card';
import DetalleProp from './pages/DetallePropiedad';
import ComponenteDivs from './components/Prueba-Components/index.jsx';


function App() {
  return (
    <div className="App">      
    {/*--------- navbar------ */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detalle/:id' element={<DetalleProp/>}/>
        {/* <Route path='/venta' element={<PropsVenta/>} />
        <Route path='/alquiler' element={<PropsAlquiler/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<ContactForm/>} /> */}

        {/* rutas para el desarrollador */}
        <Route path='/card' element={<Card/>}/>
        <Route path='/prueba' element={<ComponenteDivs/>} />
      </Routes>

      <Footbar/>
    </div>
  );
}

export default App;
