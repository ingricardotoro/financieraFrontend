import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL_API } from '../../config/config'
import fondoImg from '../../config/slider8.jpg'
import userImg from '../../user.png'

export const ViewRequestPage = (props) => {

    const [Request, setRequest] = useState([])

    const obtenerSolicitud = async() => {

        const idRequest = props.match.params.id

        const resp_request = await Axios.get(URL_API + '/requests/'+idRequest)
        const Solicitud = resp_request.data.request 

        //arreglo principal de solicitudes
        setRequest(resp_request.data.request)

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
                                            <button className="btn btn-success width-50 mr-1">Aprobar Solicitud</button>
                                            <button className="btn btn-danger width-50">Denegar Solicitud</button>
                                        </div>
                                </div>
                                
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