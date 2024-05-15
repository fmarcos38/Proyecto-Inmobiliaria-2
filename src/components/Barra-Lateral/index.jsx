import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filtraOperacionTipo, getProps, muestraDestacadas } from '../../Redux/Actions';
import './estilos.css'; // Importar estilos CSS

const BarraLateral = () => {

    //estado para check venta
    const [checkedVenta, setCheckedVenta] = useState(false);
    //estado para check alq
    const [checkedAlquiler, setCheckedAlquiler] = useState(false);
    const dispatch = useDispatch();

    const handleClickVenta = (e) => {
        if (e.target.id === 'venta' && e.target.checked === true) {
            setCheckedAlquiler(false);
            setCheckedVenta(!checkedAlquiler);
            dispatch(getProps());
            dispatch(filtraOperacionTipo({ operacion: 'venta' }));
        }
        /* esta opc es para cuando quito el tilde me vuelvan a aparecer todas las props */
        if (e.target.id === 'venta' && e.target.checked === false) {
            dispatch(getProps());
        }
    };
    const handleClickAlq = (e) => {
        if (e.target.id === 'alquila' && e.target.checked === true) {
            setCheckedVenta(false);
            setCheckedAlquiler(!checkedAlquiler);
            dispatch(getProps());
            dispatch(filtraOperacionTipo({ operacion: 'alquiler' }));
        }
        /* esta opc es para cuando quito el tilde me vuelvan a aparecer todas las props */
        if (e.target.id === 'alquila' && e.target.checked === false) {
            dispatch(getProps());
        }
    };
    /* click btns filtros */
    const handleClick = (e) => {
        switch (e.target.id) {
            case 'depto':
                if (checkedVenta) {
                    ;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'depto' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'depto' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'depto' }));
                }
                break;
            case 'casa':
                if (checkedVenta) {
                    ;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'casa' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'casa' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'casa' }));
                }
                break;
            case 'ph':
                if (checkedVenta) {
                    ;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'ph' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'ph' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'ph' }));
                }
                break;
            case 'local':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'local' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'local' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'local' }));
                }
                break;
            case 'terreno':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'terreno' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'terreno' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'terreno' }));
                }
                break;
            case 'oficina':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'oficina' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'oficina' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'oficina' }));
                }
                break;
            case 'cochera':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'cochera' }));
                } else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'cochera' }));
                } else {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ tipo: 'cochera' }));
                }
                break;
            case 'destacada':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'venta', destacada: true }));
                } else if (checkedAlquiler) {
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
    }

    return (
        <div className='cont-barra' >
            <div className='cont-titulo-filtro'>
                <p>Filtros</p>
            </div>

            <div className='opc-venta-alq'>
                <label>VENTA</label>
                <input type='checkbox' id='venta' value={checkedVenta} checked={checkedVenta} onClick={(e) => handleClickVenta(e)} className='input-check-venta' />
                <label> - ALQUILER</label>
                <input type='checkbox' id='alquila' value={checkedAlquiler} checked={checkedAlquiler} onClick={(e) => handleClickAlq(e)} className='input-check-alq' />
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
