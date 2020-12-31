import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stepper from 'bs-stepper'
import FormCustomerNewRequest from '../../components/requests/FormCustomerNewRequest';

export default function NewRequestPage() {

    let stepper =null
    useEffect(() => {
        stepper = new Stepper(document.querySelector('.bs-stepper'), {
            linear: false,
            animation: true
          })
    }, [])
    
    const next=()=>{stepper.next()}
    const previous = () =>{stepper.previous()}
  
  return (
    
    <div className="pcoded-content">
        <div className="pcoded-inner-content">
        <div className="main-body">
            <div className="page-wrapper">
            {/* Page-header start */}
            <div className="page-header mt-5">
                <div className="page-header-title">
                    <h4>Creación de Nuevas Solicitudes</h4>
                    <span>*Es necesario llenar todos los datos que sean obligarorios.</span>
                </div>
                <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <Link to="/solicitudes">
                            <i className="icofont icofont-edit" />
                        </Link>
                        </li>
                        <li className="breadcrumb-item">
                        <Link to="/solicitudes">
                                Ver Solicitudes
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
    
        <div className="page-body">
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-block">
                    <div className="bs-stepper">
                        
                        <div className="bs-stepper-header" role="tablist">
                            {/* your steps here */}
                            <div className="step" data-target="#logins-part">
                            <button type="button" className="step-trigger" role="tab" aria-controls="logins-part" id="logins-part-trigger">
                                <span className="bs-stepper-circle">1</span>
                                <span className="bs-stepper-label">Datos Personales</span>
                            </button>
                            </div>
                            <div className="line" />
                            <div className="step" data-target="#segunda">
                            <button type="button" className="step-trigger" role="tab" aria-controls="segunda" id="segunda-trigger">
                                <span className="bs-stepper-circle">2</span>
                                <span className="bs-stepper-label">Préstamo</span>
                            </button>
                            </div>
                            <div className="line" />
                            <div className="step" data-target="#tercera">
                            <button type="button" className="step-trigger" role="tab" aria-controls="tercera" id="tercera-trigger">
                                <span className="bs-stepper-circle">3</span>
                                <span className="bs-stepper-label">Referencias</span>
                            </button>
                            </div>
                            <div className="line" />
                            <div className="step" data-target="#cuarta">
                            <button type="button" className="step-trigger" role="tab" aria-controls="cuarta" id="cuarta-trigger">
                                <span className="bs-stepper-circle">4</span>
                                <span className="bs-stepper-label">Garantia</span>
                            </button>
                            </div>
                        </div>
                        <div className="bs-stepper-content">
                            {/* your steps content here */}
                            <div id="logins-part" className="content fade" role="tabpanel" aria-labelledby="logins-part-trigger">
                               <FormCustomerNewRequest />
                               <div style={{width:"90%", textAlign: "right"}}>
                                    <button className="btn btn-primary" onClick={()=>{next()}}>Siguiente</button>
                               </div>
                            </div>
                            <div id="segunda" className="content fade" role="tabpanel" aria-labelledby="segunda-trigger" > 
                                <h1>Segunda Etapa</h1>
                                <button className="btn btn-primary btn-sm" onClick={()=>{previous()}}>Anterior</button>
                                <button className="btn btn-primary btn-sm" onClick={()=>{next()}}>Siguiente</button>
                            </div>
                            <div id="tercera" className="content fade" role="tabpanel" aria-labelledby="tercera-trigger" > 
                                <h1>Tercera Etapa</h1>
                                <button className="btn btn-primary btn-sm" onClick={()=>{previous()}}>Anterior</button>
                                <button className="btn btn-primary btn-sm" onClick={()=>{next()}}>Siguiente</button>
                            </div>
                            <div id="cuarta" className="content fade" role="tabpanel" aria-labelledby="cuarta-trigger" > 
                                <h1>Cuarta Etapa</h1>
                                <button className="btn btn-primary btn-sm" onClick={()=>{previous()}}>Anterior</button>
                                <button className="btn btn-primary btn-sm" onClick={()=>{next()}}>Finalizar</button>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>

  );
}

