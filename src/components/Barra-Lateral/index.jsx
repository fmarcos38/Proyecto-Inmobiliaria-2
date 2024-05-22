import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filtraOperacionTipo, getProps, muestraDestacadas } from '../../Redux/Actions';
import './estilos.css'; 



const BarraLateral = () => {

    //estado para check venta
    const [tipo, setTipo] = useState('all'); console.log("tipo: ", tipo)
    const dispatch = useDispatch();
    
    const handleFilterChange = (event) => {
        const { value } = event.target;
        setTipo(value === tipo ? 'all' : value);
    };

    const handleClick = (e) => {
        switch (e.target.id) {
            case 'depto':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'depto' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'depto' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'depto' }));
                }
                break;
            case 'casa':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'casa' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'casa' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'casa' }));
                }
                break;
            case 'ph':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'ph' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'ph' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'ph' }));
                }
                break;
            case 'local':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'local' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'local' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'local' }));
                }
                break;
            case 'terreno':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'terreno' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'terreno' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'terreno' }));
                }
                break;
            case 'oficina':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'oficina' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'oficina' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'oficina' }));
                }
                break;
            case 'cochera':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'cochera' }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'cochera' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'cochera' }));
                }
                break;
            case 'destacada':
                if (tipo === 'venta') {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'venta', destacada: true }));
                } else if (tipo === 'alquiler') {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'alquiler', destacada: true }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'destacada' }));
                }
                break;
            case 'todas':
                dispatch(getProps());
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        
            if(tipo === 'all'){ dispatch(getProps()); }
            if(tipo === 'venta'){ 
                dispatch(getProps());
                dispatch(filtraOperacionTipo({ operacion: 'venta' })); 
            }
            if(tipo === 'alquiler'){ 
                dispatch(getProps());
                dispatch(filtraOperacionTipo({ operacion: 'alquiler' })); 
            }
        
        //dispatchAction();
    }, [dispatch, tipo]);

    return (
        <div className='cont-barra' >
            <div className='cont-titulo-filtro'>
                <p>Filtros</p>
            </div>

            <div className='opc-venta-alq'>
                <label>VENTA</label>
                <input 
                    id='venta'
                        type="checkbox" 
                        value="venta" 
                        checked={tipo === 'venta'} 
                        onChange={handleFilterChange}
                        className='input-check-venta'
                    />
                <label> - ALQUILER</label>
                <input 
                    id='alquiler'
                        type="checkbox" 
                        value="alquiler" 
                        checked={tipo === 'alquiler'} 
                        onChange={handleFilterChange}
                        className='input-check-alq' 
                    />
            </div>

            <div className='cont-btn-filtros'>
                <button className='btn-filtros' id='depto' onClick={(e) => handleClick(e)}>Deptos</button>
                <button className='btn-filtros' id='casa' onClick={(e) => handleClick(e)}>Casas</button>
                <button className='btn-filtros' id='ph' onClick={(e) => handleClick(e)}>PH</button>
                <button className='btn-filtros' id='local' onClick={(e) => handleClick(e)}>Locales</button>
                <button className='btn-filtros' id='terreno' onClick={(e) => handleClick(e)}>Terrenos</button>
                <button className='btn-filtros' id='oficina' onClick={(e) => handleClick(e)}>Oficinas</button>
                <button className='btn-filtros' id='cochera' onClick={(e) => handleClick(e)}>Cocheras</button>
                <button className='btn-filtros'  id='destacada' onClick={(e) => handleClick(e)}>Destacadas</button>
                <button className='btn-filtros' id='todas'  onClick={(e) => handleClick(e)}>Todas</button>
            </div>
        </div>
    );
};

export default BarraLateral;
