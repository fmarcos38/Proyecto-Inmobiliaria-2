import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import BarraLateral from '../../components/Barra-Lateral';


function PropsDestacadas() {

    const props = useSelector(state => state.propiedades);
    const destacadas = props.filter(p => p.destacada === true);
    

    return (
        <div className='cont-prop-Venta'>
            <div className='cont-filtros-venta'>
                <BarraLateral/>
            </div>

            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades Destacadas</h1>
                <ListaPropiedades allProps={destacadas} />
            </div>            
        </div>
    )
}

export default PropsDestacadas