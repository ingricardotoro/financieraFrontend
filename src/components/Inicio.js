import React from 'react'
import logocredisa from '../logocredisa.png'

function Inicio() {
    return (
        
        <div className="pcoded-content">
        <div className="pcoded-inner-content">

            <div className="main-body">
                <div className="page-wrapper">
                    <div className="page-header mt-5">
                        <div className="page-header-title">
                            <h4>SISTEMA FINANCIERO CREDISAS</h4>
                            <span>Sistema para la gestión de prestamos financieros</span>
                        </div>
                        <div className="page-header-breadcrumb">
                            <ul className="breadcrumb-title">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <i className="icofont icofont-home"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Inicio</a>
                                </li>
                                <li className="breadcrumb-item"><a href="#!">Bienvendo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header ">
                                        <h5>Bienvenidos al Sistema Credisas</h5>
                                        <span>Pagina Inicial del Sistema</span>
                                        
                                    </div>
                                    <div className="card-block">
                                        <p>
                                            Sistema Actualmente en Desarrollo por: Ing. Marvin Ricardo Toro
                                        </p>
                                        <img src={logocredisa} alt="logo de credisas"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="styleSelector">

            </div>
        </div>
    </div>
    )
}

export default Inicio
