import React from 'react'
import {Link} from 'react-router-dom'
function Sidebar() {
    return (
        
        // <div className="pcoded-main-container">
        <div className="pcoded-wrapper">

        <nav className="pcoded-navbar" >
                    <div className="sidebar_toggle"><a  href="index.js"><i className="icon-close icons"></i></a></div>
                    <div className="pcoded-inner-navbar main-menu" >

                        <div className="pcoded-navigatio-lavel" data-i18n="nav.category.navigation" >Menu</div>

                        <ul className="pcoded-item pcoded-left-item">

                            <li className="">
                                <a href="index.html">
                                    
                                    <span className="pcoded-mtext" data-i18n="nav.dash.default"></span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                            <li className="">
                                <a href="index.html">
                                    <span className="pcoded-micon"><i className="ti-panel"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.default">Dashboard</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>

                            <li className="">
                                <a href="index.html">
                                    <span className="pcoded-micon"><i className="ti-mobile"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.default">Calculadora</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>

                            <li className="pcoded-hasmenu">
                                <Link  to="clientes">
                                    <span className="pcoded-micon"><i className="ti-user"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Clientes</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>

                               {/*  <ul className="pcoded-submenu">
                                    <li className="">
                                        <Link  to="clientes">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.default">Ver Clientes</span>
                                            <span className="pcoded-mcaret"></span>
                                        </Link>
                                    </li>
                                </ul> */}

                            </li>


                            <li className="pcoded-hasmenu">
                                <Link to="/solicitudes" >
                                    <span className="pcoded-micon"><i className="ti-pencil-alt"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Solicitudes</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>

                                {/* <ul className="pcoded-submenu">
                                    <li className="">
                                        <Link to="/solicitudes" >
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.default">Ver Solicitudes</span>
                                            <span className="pcoded-mcaret"></span>
                                        </Link>
                                    </li>
                                </ul> */}

                            </li>

                            <li className="pcoded-hasmenu">
                                <Link to="/prestamos" >
                                    <span className="pcoded-micon"><i className="ti-money"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Prestamos</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>

                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="index.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.default">Ver Prestamos</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="dashboard-ecommerce.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.ecommerce">Nuevo Prestamos</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                </ul>

                            </li>

                            
                            <li className="pcoded-hasmenu">
                                <a  href="/clientes">
                                    <span className="pcoded-micon"><i className="ti-exchange-vertical"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Movimientos</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>

                                
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="index.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.default">Registar Ingreso</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="dashboard-ecommerce.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.ecommerce">Registrar Egreso</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                </ul>

                            </li> 

                            <li className="pcoded-hasmenu">
                                <a  href="/users">
                                    <span className="pcoded-micon"><i className="ti-panel"></i></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Usuarios</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>

                                
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="index.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.default">Ver usuario</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="dashboard-ecommerce.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext" data-i18n="nav.dash.ecommerce">Nuevo usuario</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                </ul>

                            </li>      


                          </ul>

                      </div>
        
        </nav>

        </div>
        // </div>
    )
}

export default Sidebar
