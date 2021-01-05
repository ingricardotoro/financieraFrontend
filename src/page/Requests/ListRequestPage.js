import React, { useState } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'

//import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BlockIcon from '@material-ui/icons/Block';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { useForm } from '../../hooks/useForm';
import { URL_API } from '../../config/config';
import { useEffect } from 'react';

function ListRequestPage() {

    const [requests, setRequests] = useState([])
    const [requestsFilters, setRequestsFilters] = useState([])
    const [finding, setFinding] = useState(false)

    const [totalRequestsRegistradas, setToTalRequestsRegistradas] = useState(0)
    const [totalRequestsPendientes, setTotalRequestsPendientes] = useState(0)
    const [totalRequestsAprobadas, setTotalRequestsAprobadas] = useState(0)
    const [totalRequestsDenegadas, setTotalRequestsDenegadas] = useState(0)

    const obtenerSolicitudes = async() => {

        const resp_requests = await axios.get(URL_API + '/requests')

        //arreglo principal de solicitudes
        setRequests(resp_requests.data.requests)
            //Arreglo para realizar las busquedas
        setRequestsFilters(resp_requests.data.requests)

        setToTalRequestsRegistradas(resp_requests.data.requests.length)

        //Obtenemos la cantidad total de solicitudes con estado pendiente
        requests.map(request => (
            request.stateRequest === 'Pendiente' ?
            setTotalRequestsPendientes(totalRequestsPendientes + 1) :
            null
        ))

        //no es una busqueda por filtro de busqueda
        setFinding(false)

        //Obtenemos la cantidad total de solicitdes aprobadas
        requests.map(request => (
            request.stateRequest === 'Aprobada' ?
            setTotalRequestsAprobadas(totalRequestsAprobadas + 1) :
            null
        ))

        //Obtenemos la cantidad total de solicitudes Denegadas
        requests.map(request => (
            request.stateRequest === 'Denegada' ?
            setTotalRequestsDenegadas(totalRequestsDenegadas + 1) :
            null
        ))

    }

    useEffect(() => {
       
        obtenerSolicitudes()

    }, [])

    return (
        <div className="pcoded-content">

        <div className="pcoded-inner-content">

            {/* Main-body start */}
            <div className="main-body">
                <div className="page-wrapper">
                {/* Page-header start */}
                <div className="page-header mt-5">
                    <div className="page-header-title">
                    <h4>Gestión de Solicitudes del Sistema</h4>
                    <span>Módulo para gestionar las Solicitudes registrados</span>
                    </div>
                    <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <a href="index.html">
                            <i className="icofont icofont-user" />
                        </a>
                        </li>
                        <li className="breadcrumb-item">Módulo de Solicitudes
                        </li>
                        
                    </ul>
                    </div>
                </div>
                {/* Page-header end */}

                {/* Page-body start */}
                <div className="page-body">
                    {/* Basic table card start */}
                    <div className="card">
                    <div className="card-header">

                    <div className="row">
                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-facebook">
                                <h3>{totalRequestsRegistradas} </h3>
                                <span className="m-t-10" style={{color:"white", fontSize:16}}>Solicitudes Registradas</span>
                                <i className="icofont icofont-edit" style={{opacity:1}}  />
                            </div>
                            </div>
                        </div>
                        {/* Facebook card end */}
                        {/* Twitter card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#f1c40f"}}>
                                <h3>{totalRequestsPendientes}</h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Solicitudes Pendientes</span>
                                <i className="icofont icofont-hour-glass" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Twitter card end */}
                        {/* Linked in card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#40b572"}}>
                                <h3>{totalRequestsAprobadas}</h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Solicitudes Aprobadas</span>
                                <i className="icofont icofont-check-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-google-plus">
                                <h3>{totalRequestsDenegadas}</h3>
                                <span className="m-t-10 size-16"style={{color:"white", fontSize:16}}>Solicitudes Denegadas</span>
                                <i className="icofont icofont-close-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-8">
                            <input type="text" className="mt-3 form-control form-control-round" style={{borderRadius: "50px"}} placeholder="Buscar Solicitud ..."  />
                        </div>
                        {/* Facebook card end */}
                       
                       
                        {/* Linked in card start */}
                        <div className="col-sm-12 col-md-2 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-primary  btn-round f-right d-inline-flex">
                                {<SearchIcon />} 
                                Buscar Solicitud  
                            </button>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                         <div className=" col-sm-12 col-md-2 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-success btn-round f-right d-inline-flex" >
                                 
                                <Link style={{color:"white"}} to="/solicitudes/crear">
                                    {<AddCircleIcon />}     
                                    Crear Solicitud
                                </Link> 
                                
                            </button>
                        </div> 


                    </div>
                           
                    </div>

                    <div className="card-block table-border-style">
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Código</th>
                                <th>Foto</th>
                                <th>Cliente</th>
                                <th>Préstamo</th>
                                <th>Monto</th>
                                <th>Cuotas</th>
                                <th>Sucursal</th>
                                <th>Ver</th>
                                <th>Estado</th>
                                
                            </tr>
                            </thead>
                            <tbody>

                            {
                                requests.map(request => (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{request.codeRequest}</td>
                                        <td><Avatar alt="Travis Howard" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" /></td>
                                        <td>{request.customerId.personId.name}</td>
                                        <td>{request.typeLoan}</td>
                                        <td>{request.amount}</td>
                                        <td>{request.quota} Cuotas {request.frequency}</td>
                                        <td>{request.sucursal}</td>
                                        <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                        {
                                            request.stateRequest==='Pendiente' && <td><button className="btn btn-sm btn-warning d-inline-flex"> {<HourglassEmptyIcon />} {request.stateRequest}</button> </td>
                                        }
                                        {
                                            request.stateRequest==='Aprobada' &&  <td><button className="btn btn-sm btn-success d-inline-flex"> {<CheckBoxIcon />}{request.stateRequest}</button> </td>
                                        }
                                        {
                                            request.stateRequest==='Denegada' &&  <td><button className="btn btn-sm btn-danger d-inline-flex"> {<BlockIcon />} {request.stateRequest}</button> </td>
                                        }
                                    </tr>
                                ))
                            }
                                                 
                           
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    {/* Basic table card end */}
                   
                </div>
                {/* Page-body end */}
                </div>
            </div>
            {/* Main-body end */}
            
            <div id="styleSelector">
            </div>
        
        </div> 
           
    </div>

    )
}

export default ListRequestPage
