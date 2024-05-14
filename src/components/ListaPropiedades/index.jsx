import React from 'react';
import Card from '../Card';
import './styles.css';

function ListaPropiedades({allProps}) {

    return (
        <div className='contGralListaP'>
            <div className='contListaP'>
                {
                    allProps[0] ?
                    allProps.map(p => {
                        return (
                            <div className='cont-card' key={p.id}>
                                <Card
                                    key={p.id}
                                    id={p.id}
                                    operacion={p.operacion}
                                    tipo={p.tipo}
                                    ambientes={p.ambientes}
                                    dormitorios={p.dormitorios}
                                    baños={p.baños}
                                    sup={p.sup}
                                    direccion={p.direccion}
                                    barrio={p.barrio}
                                    imagenes={p.imagenes}
                                    descripcion_Breve={p.descripcion_Breve}
                                    precio={p.precio}
                                    className='card'
                                />
                            </div>
                        )
                    }) : (
                        <div className='no-props'>
                            <h1>No hay props para dicha busqueda...</h1>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ListaPropiedades