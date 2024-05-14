import React from 'react';
import './estilos.css';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import BarraLateral from '../../components/Barra-Lateral';


function PropsVenta() {

    const props = useSelector(state => state.propiedades);
    const soloEnVenta = props.filter(p => p.operacion === 'venta');
    console.log("propsV:", soloEnVenta)

    return (
        <div className='cont-prop-Venta'>
            <div className='cont-filtros-venta'>
                <BarraLateral/>
            </div>

            <div className='cont-titulo-props-venta'> 
                <h1>Propiedades en Venta</h1>
                <ListaPropiedades allProps={soloEnVenta} />
            </div>            
        </div>
    )
}

export default PropsVenta