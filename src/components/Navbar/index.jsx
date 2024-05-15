import React, { useState } from 'react';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


function NavbarConRedes() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            {/* nav superiro */}
            <div className='navSup'>
                <div className='redes'>
                    <div className='col1'>
                        <LocationOnIcon className='iconoContact'/>
                        <p>Sarmiento 2323</p>
                        <LocalPhoneIcon className='iconoContact'/>
                        <p>2234422665</p>
                        <AlternateEmailIcon className='iconoContact'/>
                        <p>florm@gmail.com</p>
                    </div>

                    <div className='col2'>
                        <a href='https://www.instagram.com/florm.bienesraices/'>
                            <InstagramIcon className='iconosRedes' />
                        </a>
                        <a href='http://api.whatsapp.com/send?phone=2234422665'>
                            <WhatsAppIcon className='iconosRedes' />
                        </a>
                    </div>
                </div>
            </div>
            {/* nav inf */}
            <div className='navInf'>
                <div className='cont-nav-inf'>
                    <div className='colInf-1'>
                        {/* logo */}                        
                        <NavLink to='/' >
                            {/* <img src={logo} alt='img not found' className='logo' /> */}
                            <p className='logo'>Inmobiliaria <b>Mendive</b></p>
                        </NavLink>
                    </div>

                    <div className='colInf-2'>
                        {/* menu SOLO Pantalla Grande*/}
                        <ul className='ul-menu-izq'>
                            <li>
                                <NavLink to='/venta' >
                                    Venta
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/alquiler' >
                                    Alquileres
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/destacadas'>
                                    Oportunidades
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacto' >
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='colInf-3'>                        
                        {/* menu hambur P.Chica */}
                        <div
                            className={`menu-icon ${isOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* menu desplegable */}
                        <div className="menu">
                            {
                                isOpen && (
                                    <ul>
                                        <li>
                                            <Link to='/contacto'>
                                                Contacto
                                            </Link>
                                        </li>
                                        <li>Pepe</li>
                                        <li>Salis?</li>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarConRedes;


