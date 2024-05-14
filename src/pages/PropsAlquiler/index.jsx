import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import BarraLateral from '../../components/Barra-Lateral';


function PropsAlquiler() {

    const props = useSelector(state => state.propiedades);
    const soloEnAlq = props.filter(p => p.operacion === 'alquiler');
    

    return (
        <div className='cont-prop-Venta'>
            <div className='cont-filtros-venta'>
                <BarraLateral/>
            </div>

            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades en Alquiler</h1>
                <ListaPropiedades allProps={soloEnAlq} />
            </div>            
        </div>
    )
}

export default PropsAlquiler