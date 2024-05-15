import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './estilos.css'; // Importar estilos CSS

const BarraLateral = () => {

  //estado para check venta
  const [ checkedVenta, setCheckedVenta ] = useState(false);
  //estado para check alq
  const [ checkedAlquiler, setCheckedAlquiler ] = useState(false);
  const dispatch = useDispatch();

  const handleClickVenta = (e) => {};
  const handleClickAlq = (e) => {};
  return (
    <div className='cont-barra' >
      <div className='cont-titulo-filtro'>
        <p>Filtros</p>
      </div>

      <div className='opc-venta-alq'>
        <label>VENTA</label>
        <input type='checkbox' id='venta' value={checkedVenta} onClick={(e) => handleClickVenta(e)} className='input-check-venta'/>
        <label> - ALQUILER</label>
        <input type='checkbox' id='venta' value={checkedAlquiler} onClick={(e) => handleClickAlq(e)} className='input-check-alq'/>
      </div>

      <div className='cont-btn-filtros'>
        <button>Deptos</button>
        <button>Casas</button>
        <button>PH</button>
        <button>Locales</button>
        <button>Terrenos</button>
        <button>Oficinas</button>
        <button>Cocheras</button>
        <button>Desarrollos</button>
        <button>Todas</button>
      </div>
    </div>
  );
};

export default BarraLateral;
