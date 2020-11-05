import React from 'react'
import logocredisa from '../logocredisa.png'

function Inicio() {
    return (
        
        <div class="pcoded-content">
        <div class="pcoded-inner-content">

            <div class="main-body">
                <div class="page-wrapper">
                    <div class="page-header mt-5">
                        <div class="page-header-title">
                            <h4>SISTEMA FINANCIERO CREDISAS</h4>
                            <span>Sistema para la gestión de prestamos financieros</span>
                        </div>
                        <div class="page-header-breadcrumb">
                            <ul class="breadcrumb-title">
                                <li class="breadcrumb-item">
                                    <a href="index.html">
                                        <i class="icofont icofont-home"></i>
                                    </a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Inicio</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Bienvendo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="page-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header ">
                                        <h5>Bienvenidos al Sistema Credisas</h5>
                                        <span>Pagina Inicial del Sistema</span>
                                        
                                    </div>
                                    <div class="card-block">
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
