import React  from 'react'
import './styles.css';


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
                            o si estás buscando invertir, tenemos desarrollos propios.                            
                        </b>
                    </p>
                    {/* <Link to='#listaProps'>
                    <button className="btn-land-inf">
                        <b>
                            Conocé nuestras Propiedades
                        </b>
                        </button>
                    </Link> */}
                                        
                </div>
            </div>

            {/* texto inferior */}    
            <div className='cont-texto-socalo'>
                <p>Conocé nuestras Ptopiedades</p>
            </div>        
        </div>
    )
}

export default LandingPage;

