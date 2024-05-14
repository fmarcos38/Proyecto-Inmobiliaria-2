import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import Filtros from '../../components/Filtros/FiltrosTipoProp';
import ListaPropiedades from '../../components/ListaPropiedades';


function PropsAlquiler() {

    const props = useSelector(state => state.propiedades);
    const soloEnAlq = props.filter(p => p.operacion === 'alquiler');
    

    return (
        <div className='cont-propsVenta'>
            <Filtros check={true}/>
            <ListaPropiedades props={soloEnAlq} />
        </div>
    )
}

export default PropsAlquiler