import React, { useEffect } from 'react';
import './estilos.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detalleProp, resetDetalle } from '../../Redux/Actions';
import Carrusel from '../../components/Carrusel';
import MapProp from '../../components/MapaProp';
import FormularioContacto from '../../components/FormularioContacto';

function DetalleProp(){

    const detalle_prop = useSelector(state => state.detalleProp);//propiedades[0];
    const dispatch = useDispatch();
    const { id } = useParams();  //let id = props.match.params.id 


    useEffect(() => {
        dispatch(detalleProp(id));

        return () => { dispatch(resetDetalle()); }
    }, [dispatch, id]);
    
    
    return(
        <div className='contGralDetalle'>
            <div className='cont-detail'>
                {/* datos principales */}
                <div className='info-1'>
                    <p>{detalle_prop.operacion}</p>
                    <p>{detalle_prop.tipo}</p>
                    <p>USD {detalle_prop.precio}</p>
                </div>

                {/* carrusel y datos */}
                <div className='cont-imgs-info'>
                    <div className='info-imagenes'>
                        {
                            detalle_prop?.imagenes
                                ?
                                <Carrusel imagenes={detalle_prop.imagenes} />
                                :
                                <p>No img</p>
                        }
                    </div>

                    <div className='info-textos'>
                        <span>DETALLES DE LA PROPIEDAD</span>

                        <div className='cont-datos'>
                            <p>Ambientes: </p>
                            <p className='dato'>{detalle_prop.ambientes}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Dormitorios: </p>
                            <p className='dato'>{detalle_prop.dormitorios}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Baños: </p>
                            <p className='dato'>{detalle_prop.baños}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup Cubierta: </p>
                            <p className='dato'>{detalle_prop.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup Semicubierta: </p>
                            <p className='dato'>{detalle_prop.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup tot: </p>
                            <p className='dato'>{detalle_prop.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Dirección: </p>
                            <p className='dato'>{detalle_prop.direccion}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Barrio: </p>
                            <p className='dato'>{detalle_prop.barrio}</p>
                        </div>
                    </div>
                </div>

                {/* descrip prop y form contacto*/}
                <div className='cont-titulo-descripcion-form'>
                    <div className='cont-descrip'>
                        <p className='titulo-descrip-prop'>Descripción Propiedad</p>
                        <p className='p-descrip'>{detalle_prop.descripcion_Detalle}</p>
                    </div>
                    {/* formulario contacto */}
                    <div className='cont-formulario-detalle'>
                        <FormularioContacto />
                    </div>
                </div>
                
                {/* google map */}
                <div className='cont-map'>
                    <p>Ubicacion Propiedad</p>
                    <MapProp direccionProp={detalle_prop.direccion}/>
                </div>
            </div>
        </div>
    )
}

export default DetalleProp;