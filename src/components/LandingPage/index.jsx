import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './styles.css';

import iconoProps from '../../Imagenes/logoCasaDepto.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {



    return (
        <div className='contGralLanding'>   
            {/* cont superior */}
            <div className='cont-sup'>
                <div className="sub-cont-sup">
                    <p className="text">
                        <b>
                            Somos una empresa con presencia en el Mercado Inmobiliario de Mar del Plata desde 1972.
                            En estos años hemos asesorado a empresas de primer nivel Nacional e Internacional,
                            así como a pymes y particulares
                        </b>
                    </p>
                </div>
            </div>            

            {/* cont inf */}
            <div className='cont-inf'>
                <div className="sub-cont-inf">
                <p className="text-inf">
                        <b>
                            Navegá por nuestras propiedades.
                            Encontrá tu proximo hogar, local para tu negocio,
                            o si estás buscando invertir.                            
                        </b>
                    </p>
                    <button className="btn-land-inf">
                        <b>
                            Conocé nuestras Propiedades
                        </b>
                    </button>
                </div>
            </div>            
        </div>
    )
}

export default LandingPage;

