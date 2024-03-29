import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Stepper from 'bs-stepper'
import FormCustomerNewRequest from '../../components/requests/FormCustomerNewRequest';
import FormLoanNewRequest from '../../components/requests/FormLoanNewRequest';
import TablaAmortizacionNC from '../TablaAmortizacionNC';
import TablaAmortizacionVC from '../TablaAmortizacionVC';
import FormReferencesNewRequest from '../../components/requests/FormReferencesNewRequest';
import FormWarrantyNewRequest from '../../components/requests/FormWarrantyNewRequest';
import Axios from 'axios';
import { URL_API } from '../../config/config';

export default function NewRequestPage({history}) {

    let today =new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    if(day < 10 ){ day= '0'+day} 
    if(month < 10){ month = '0'+month}
    today  = year + '-' + month + '-' + day;

    const initialForm = {
        customerId:'',
        codeRequest:0,
        typeLoan:'Solidario',
        tipoCalculo:'NumeroDeCuotas',
        amount:0,
        rate:10,
        frequency:'Semanal',
        tipotasa:'Mensual',
        tipoInteres:'Compuesto',
        quota:0,
        quotaValue:0,
        totalInterest:0,
        closingCostVar:0,
        totalAmount:0,
        datestart:today,
        sucursal:'Central',
        details:'',
        stateRequest:'Pendiente',
        refName1:'',
        refPhone1:'',
        refRelation1:'',
        refName2:'',
        refPhone2:'',
        refRelation2:'',
        aval1Id:'',
        aval2Id:'',
        typeWarranty:'',
        modelo:'',
        marca:'',
        serie:'',
        color:'',
        anioDeGarantia:'',
        precioCompra:0,
        precioMercado:0,
        obsDeGarantia:'',
        createdBy:'',
        approvedBy:'',
        declinedBy:'',
    }

    const [DataRequest, setDataRequest] = useState(initialForm)
    const [ErrorCustomer, setErrorCustomer] = useState(false)

    const [tablaAmortizacionNC, setTablaAmortizacionNC] = useState(false)
    const [tablaAmortizacionVC, setTablaAmortizacionVC] = useState(false)
    const [Error, setError] = useState(false)

    let stepper =null
   
    const next=(step)=>{
        
        if(DataRequest.customerId==="" || DataRequest.customerId===undefined ){ 
            setErrorCustomer(true)
            
        }else{
            stepper = new Stepper(document.querySelector('.bs-stepper'), {
                linear: false,
                animation: true
              })
            stepper.to(step)
        }

    }

    const previous =(step) =>{
        stepper = new Stepper(document.querySelector('.bs-stepper'), {
            linear: false,
            animation: true
          })
        stepper.to(step)
    }

     //funcion para crear nuevas solicitudes
     const end = async(e)=>{
        
        try {
            await Axios.post(URL_API+'/requests', DataRequest)
            history.push('/solicitudes')
        } catch (error) {
            console.log(error)
        }
    
    } 
  
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
                        <div className="bs-stepper" >
                            
                            <div className="bs-stepper-header" role="tablist">
                                {/* your steps here */}
                                <div className="step" data-target="#first-part">
                                    <button type="button" className="step-trigger" role="tab" aria-controls="first-part" id="first-part-trigger">
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

                            <div className="bs-stepper-content" >
                                {/* your steps content here */}
                                <div id="first-part" className="content fade" role="tabpanel" aria-labelledby="first-part-trigger">
                                    <FormCustomerNewRequest setDataRequest={setDataRequest} DataRequest={DataRequest} ErrorCustomer={ErrorCustomer} setErrorCustomer={setErrorCustomer}  />
                                    <div style={{textAlign: "right"}}>
                                        <button className="btn btn-primary" onClick={()=>{next(2)}}>Siguiente</button>
                                    </div>
                                </div>
                                <div id="segunda" className="content fade" role="tabpanel" aria-labelledby="segunda-trigger" > 
                                    <FormLoanNewRequest DataRequest={DataRequest} setDataRequest={setDataRequest} setTablaAmortizacionNC={setTablaAmortizacionNC} setTablaAmortizacionVC={setTablaAmortizacionVC} setError={setError} Error={Error} />
                                    <div style={{textAlign: "right", paddingBottom:"15px" }}>
                                        <button className="btn btn-primary mr-1" onClick={()=>{previous(1)}}>Anterior</button>
                                        <button className="btn btn-primary" onClick={()=>{next(3)}}>Siguiente</button>
                                    </div>

                                    <div className="table-responsive">
                                                       
                                        {
                                            (tablaAmortizacionNC === true && Error===false && parseInt(DataRequest.quota)>0) && 
                                            <TablaAmortizacionNC 
                                                CapitalInicial={DataRequest.amount}
                                                Tasa={DataRequest.rate}
                                                TipoTasa={DataRequest.tipotasa}
                                                Quotas={DataRequest.quota}
                                                TipoInteres={DataRequest.tipoInteres}
                                                Frequency={DataRequest.frequency}
                                                DateStart={DataRequest.datestart}
                                            />
                                        }
                                        { 
                                            (tablaAmortizacionVC === true && Error===false && parseFloat(DataRequest.quotaValue)>100) && 
                                            <TablaAmortizacionVC 
                                            CapitalInicial={DataRequest.amount}
                                            Tasa={DataRequest.rate}
                                            TipoTasa={DataRequest.tipotasa}
                                            QuotasValue={DataRequest.quotaValue}
                                            TipoInteres={DataRequest.tipoInteres}
                                            Frequency={DataRequest.frequency}
                                            DateStart={DataRequest.datestart}
                                            />  
                                        }
                                    </div> 

                                </div>

                                <div id="tercera" className="content fade" role="tabpanel" aria-labelledby="tercera-trigger" > 
                                   <FormReferencesNewRequest DataRequest={DataRequest} setDataRequest={setDataRequest} />
                                    <div style={{textAlign: "right" }}>
                                        <button className="btn btn-primary mr-1" onClick={()=>{previous(2)}}>Anterior</button>
                                        <button className="btn btn-primary" onClick={()=>{next(4)}}>Siguiente</button>
                                    </div>
                                </div>

                                <div id="cuarta" className="content fade" role="tabpanel" aria-labelledby="cuarta-trigger" > 
                                   <FormWarrantyNewRequest DataRequest={DataRequest} setDataRequest={setDataRequest} />
                                    <div style={{textAlign: "right" }}>
                                        <button className="btn btn-primary mr-1" onClick={()=>{previous(3)}}>Anterior</button>
                                        <button className="btn btn-primary" onClick={()=>{end()}}>Finalizar</button>
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
    </div>

  );
}

