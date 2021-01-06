import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL_API } from '../../config/config'
import fondoImg from '../../config/slider8.jpg'
import userImg from '../../user.png'
import toastr from 'toastr'
import TablaAmortizacionNC from '../TablaAmortizacionNC'
import TablaAmortizacionVC from '../TablaAmortizacionVC'

export const ViewRequestPage = (props) => {

    const [Request, setRequest] = useState([])
    const idRequest = props.match.params.id
    const [cuotas, setCuotas] = useState([])
    const obtenerSolicitud = async() => {
        
        const resp_request = await Axios.get(URL_API + '/requests/'+idRequest)    
        //arreglo principal de solicitudes
        setRequest(resp_request.data.request)
    }
    
    const aproveRequest = async() =>{
        
        const resp_aproveRequest = await Axios.put(URL_API + '/requests/aprove/'+idRequest)
        
        if (resp_aproveRequest.data.ok===true) {

            const resp_MaxCode = await Axios.get(URL_API+'/loans/lastCode')

            const DataNewLoan ={
                codeLoan:resp_MaxCode.data.LastCode[0].codeLoan+1,
                requestId:Request._id,
                amountInitial:Request.amount,
                totalToPay:Request.totalAmount,
                dateaproved:Date.now(),
            }

            /*cuotas[0]= {
                loanId,
                dateToPay,
                amountToPayed,
                amountToCapital,
                amountToInteres,
            }*/

            cuotas.map(cuota => (
                 Axios.post(URL_API+'/payments', cuota)
            ))

            try {
                const resp_newLoan =await Axios.post(URL_API+'/loans', DataNewLoan)
                if(resp_newLoan.data.ok===true){
                    toastr.info('La Solicitud ha sido Aprobada')
                    props.history.push('/solicitudes')
                }
            } catch (error) {
                console.log(error)
            }
  
        }else{
            alert("Error Aprobando la Solicitud")
        }
    }
    const declineRequest = async() =>{
      
        const resp_declineRequest = await Axios.put(URL_API + '/requests/decline/'+idRequest)
        if (resp_declineRequest.data.ok===true) {
            toastr.info('La Solicitud ha sido Denegada')
            props.history.push('/solicitudes')
        }else{
            alert("Error Denegando la Solicitud")
        }
    }

    const FormatDate=(fecha) =>{
        
        let fechaI =new Date(fecha);
        let day = fechaI.getDate();
        let month = fechaI.getMonth()+1;
        let year = fechaI.getFullYear();
        if(day < 10 ){ day= '0'+day}
        if(month < 10){ month = '0'+month}
        let dateF = ''
        return dateF  = year + '-' + month + '-' + day;    
    }
    useEffect(() => {
       
        obtenerSolicitud()

    }, [])

    return (
        <div className="pcoded-content">
        <div className="pcoded-inner-content">
            <div className="main-body">
                <div className="page-wrapper">
                    <div className="page-header mt-5">
                        <div className="page-header-title">
                            <h4>Revisión de Solicitudes</h4>
                        </div>
                        <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <Link to='/solicitudes'>
                            <i className="icofont icofont-user" />
                        </Link>
                        </li>
                        <Link to='/solicitudes'>
                        <li className="breadcrumb-item">Volver a Solicitudes
                        </li>
                        </Link>
                        
                    </ul>
                    </div>
                           
                    </div>
                        <div className="page-body">
                            {/* Basic table card start */}
                            <div className="card">
                            <div className="card-header vertical">

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                        <div className="widget-profile-card-1">
                                        <div className="bg-layer" />
                                        <img className="img-fluid" src={fondoImg} alt="card-style-1" />
                                        <button className="btn btn-default btn-outline-default btn-icon b-lft"><i className="icofont icofont-ui-user" /></button>
                                        <button className="btn btn-default btn-outline-default btn-icon b-rgt"><i className="icofont icofont-ui-message" /></button>
                                        <div className="middle-user">
                                            <img className="img-fluid" src={userImg} alt="Profile-user" />
                                        </div>
                                        </div>
                                        <div className="card-block text-center">  
                                         <h5>{Request?.customerId?.personId?.name} {Request?.customerId?.personId?.lastname} </h5>
                                        <p className="text-muted">{Request?.customerId?.personId?.city}</p>
                                        <p className="text-muted">{Request?.customerId?.personId?.identidad}</p>
                                        <p className="text-muted">{Request?.customerId?.personId?.phone1} - {Request?.customerId?.personId?.phone2}</p>
                                        <p className="text-muted">{Request?.customerId?.personId?.email1}</p>

                                        {/* <button className="btn btn-primary btn-round m-t-10 m-b-20">Contact</button> */}
                                        </div>
                                        <div className="card-footer">
                                        <div className="row text-center">
                                            <div className="col-6 b-r-default">
                                            <h4 className="text-primary">{Request?.customerId?.codeCustomer}</h4>
                                            <span className="text-muted text-uppercase">Código</span>
                                           
                                            </div>
                                            <div className="col-6">
                                            <h4 className="text-primary">AA</h4>
                                            <span className="text-muted text-uppercase">Categoría</span>
                                            
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                    <div className="card-block table-border-style">
                                        <div className="table-responsive">
                                        <table className="table table-hover">
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Préstamo</th>
                                                    <td>{Request?.typeLoan}</td>
                                                </tr>
                                                <tr>
                                                    <th>Capital</th>
                                                    <td>LPS. {(Request?.amount)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Tasa Mensual</th>
                                                    <td>{Request?.rate}%</td>
                                                </tr>
                                                <tr>
                                                    <th>Frecuencia de pago</th>
                                                    <td>{Request?.frequency}</td>
                                                </tr>
                                                <tr>
                                                    <th>Númeor de Coutas</th>
                                                    <td>{Request?.quota} cuotas</td>
                                                </tr>
                                                <tr>
                                                    <th>Valor de Cuota</th>
                                                    <td>LPS {Request?.quotaValue}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total de Interes</th>
                                                    <td>LPS {Request?.totalInterest}</td>
                                                </tr>
                                                <tr>
                                                    <th>Costo de Cierre</th>
                                                    <td>LPS {Request?.closingCostVar}</td>
                                                </tr>
                                                <tr>
                                                    <th>Monto Total</th>
                                                    <td>LPS {Request?.totalAmount}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                    <div className="card-block table-border-style">
                                                                           
                                        <div className="table-responsive">
                                        <table className="table table-hover">
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Referencia Familiar</th>
                                                    <td><p>{Request?.refName1}</p></td>
                                                </tr>
                                                <tr>
                                                    <th>Parentesco</th>
                                                    <td>{Request?.refRelation1}</td>
                                                </tr>
                                                <tr>
                                                    <th>Teléfono</th>
                                                    <td>{Request?.refPhone1}</td>
                                                </tr>
                                                <tr>
                                                    <th>Referencia Personal</th>
                                                    <td><p>{Request?.refName2}</p></td>
                                                </tr>
                                                <tr>
                                                    <th>Parentesco</th>
                                                    <td>{Request?.refRelation2}</td>
                                                </tr>
                                                <tr>
                                                    <th>Teléfono</th>
                                                    <td>{Request?.refPhone2}</td>
                                                </tr>
                                                <tr>
                                                    <th>Aval 1</th>
                                                    <td>{Request?.aval1Id}</td>
                                                </tr>
                                                <tr>
                                                    <th>Aval 2</th>
                                                    <td>{Request?.aval2Id}</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>


                                        </div>
  
                                    </div>
                                       
                                    </div>
                                    <div className="col-sm-12 col-md-12">

                                    {Request?.stateRequest==='Pendiente' 
                                       ?<Fragment>
                                        <button onClick={()=>declineRequest()} className="btn btn-danger width-50 mr-1">Denegar Solicitud</button> 
                                        <button onClick={()=>aproveRequest()} className="btn btn-success width-50 ">Aprobar Solicitud</button>
                                        </Fragment>
                                        :null
                                    }

                                    {Request?.stateRequest==='Aprobada' 
                                        ? <div class="alert alert-success" style={{textAlign:"center"}} role="alert">
                                            <strong>{Request?.stateRequest}</strong>
                                          </div>
                                        :null
                                    }

                                    {Request?.stateRequest==='Denegada' 
                                       ? 
                                        <div class="alert alert-danger" style={{textAlign:"center"}} role="alert">
                                            <strong>{Request?.stateRequest}</strong>
                                          </div>
                                       :null
                                    }
                                   
                                        </div>
                                </div>
                                
                            </div>

                            {/* Tabla de Amortizacion */}
                            <div className="table-responsive p-l-15 p-r-15">
                                                       
                                {
                                    (Request?.tipoCalculo === 'NumeroDeCuotas' ) && 
                                    <TablaAmortizacionNC 
                                        CapitalInicial={Request?.amount}
                                        Tasa={Request?.rate}
                                        TipoTasa={Request?.tipotasa}
                                        Quotas={Request?.quota}
                                        TipoInteres={Request?.tipoInteres}
                                        Frequency={Request?.frequency}
                                        DateStart={FormatDate(Request?.datestart)}
                                    />
                                }
                                { 
                                    (Request?.tipoCalculo === 'ValorDeCuotas') && 
                                    <TablaAmortizacionVC 
                                    CapitalInicial={Request?.amount}
                                    Tasa={Request?.rate}
                                    TipoTasa={Request?.tipotasa}
                                    QuotasValue={Request?.quotaValue}
                                    TipoInteres={Request?.tipoInteres}
                                    Frequency={Request?.frequency}
                                    DateStart={FormatDate(Request?.datestart)}
                                    />  
                                }   
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default ViewRequestPage