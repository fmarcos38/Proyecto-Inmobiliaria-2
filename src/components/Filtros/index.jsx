import React, { useState } from 'react'
import './estilos.css';
import { filtraOperacionTipo, getProps, muestraDestacadas} from '../../../Redux/Actions';
import { useDispatch } from 'react-redux';


function Filtros({check}) {

    //estado para check venta
    const [ checkedVenta, setCheckedVenta ] = useState(false);
    //estado para check alq
    const [ checkedAlquiler, setCheckedAlquiler ] = useState(false);
    const dispatch = useDispatch();

    //funcion actualiza check venta
    const actualizaCheckVenta = (e) => {
        if(e.target.id === 'check-venta' && e.target.checked === true) {
            setCheckedVenta(!checkedAlquiler);
            setCheckedAlquiler(false);
            dispatch(getProps());
            dispatch(filtraOperacionTipo({ operacion: 'venta' }));
        }
        if(e.target.id === 'check-venta' && e.target.checked === false) {
            dispatch(getProps());
        }
    };
    //funcion actualiza check alq
    const actualizaCheckAlq = (e) => {
        if(e.target.id === 'check-alquiler' && e.target.checked === true){
            setCheckedAlquiler(!checkedAlquiler);
            setCheckedVenta(false);
            dispatch(getProps());
            dispatch(filtraOperacionTipo({operacion: 'alquiler'}));
        }
        if(e.target.id === 'check-alquiler' && e.target.checked === false){
            dispatch(getProps());
        }
    };

    const handleClick = (e) => {
        switch(e.target.id){
            case 'depto':
                if(checkedVenta){;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'depto'}));
                }else if(checkedAlquiler){
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'depto'}));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'depto'}));
                }                
                break;
            case 'casa':
                if(checkedVenta){;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'casa'}));
                }else if(checkedAlquiler){
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'casa'}));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'casa'}));
                } 
                break;
            case 'ph':
                if(checkedVenta){;
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'venta', tipo: 'ph'}));
                }else if(checkedAlquiler){
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({operacion: 'alquiler', tipo: 'ph'}));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'ph'}));
                } 
                break;
            case 'local':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'local' }));
                }else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'local' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'local'}));
                } 
                break;
            case 'terreno':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'terreno' }));
                }else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'terreno' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'terreno'}));
                } 
                break;
            case 'oficina':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'oficina' }));
                }else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'oficina' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'oficina'}));
                } 
                break;
            case 'cochera':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'venta', tipo: 'cochera' }));
                }else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({ operacion: 'alquiler', tipo: 'cochera' }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'cochera'}));
                } 
                break;
            case 'destacada':
                if (checkedVenta) {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'venta', destacada: true }));
                }else if (checkedAlquiler) {
                    dispatch(getProps());
                    dispatch(muestraDestacadas({ operacion: 'alquiler', destacada: true }));
                }else{
                    dispatch(getProps());
                    dispatch(filtraOperacionTipo({tipo: 'destacada'}));
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
        <div className='cont-principal-filtros'>
            <div className='cont-filtros'>
                {
                    check ? (
                        <div style={{'marginTop': '20px'}}></div>
                    ) : (
                        <div className='check-venta-alq'>
                            <label className='label-venta'>Venta</label>
                            <input
                                id='check-venta'
                                type='checkbox' className='input-venta'
                                value={checkedVenta}
                                onChange={(e) => actualizaCheckVenta(e)}
                            />
                            <label className='label-alq'>Alquiler</label>
                            <input
                            id='check-alquiler'
                                type='checkbox' className='input-alq'
                                value={checkedAlquiler}
                                onChange={(e) => actualizaCheckAlq(e)}
                            />
                        </div>
                    )
                }               

                <div className='cont-tipo-propiedad'>
                    <div className='tipo-propiedad'>
                        <button id='depto' onClick={(e) => handleClick(e)}>
                            Deptos
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='casa' onClick={(e) => handleClick(e)}>
                            Casas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='ph' onClick={(e) => handleClick(e)}>
                            PH
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button id='local' onClick={(e) => handleClick(e)}>
                            Locales
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='terreno' onClick={(e) => handleClick(e)}>
                            Terreno
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='oficina' onClick={(e) => handleClick(e)}>
                            Oficinas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <button id='cochera' onClick={(e) => handleClick(e)}>
                            Cocheras
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button className='btn-props-dest' id='destacada' onClick={(e) => handleClick(e)}>
                            Propiedades destacadas
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div>
                        <button id='todas' className='btn-props-dest' onClick={(e) => handleClick(e)}>
                            Todas las Propiedades
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtros;


/*
<div className='check-venta-alq'>
                                <button id='venta' onClick={(e) => handleClick(e)}>
                                    Venta
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <button id='alquiler' onClick={(e) => handleClick(e)}>
                                    Alquiler
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
*/