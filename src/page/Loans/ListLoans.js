import React from 'react'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { Link } from 'react-router-dom';
import { URL_API } from '../../config/config';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function ListLoans() {

    const [loans, setLoans] = useState([])

    const [totalLoansRegister, setTotalLoansRegister] = useState(0)
    const [totalLoansActive, setTotalLoansActive] = useState(0)
    const [totalLoansSolved, setTotalLoansSolved] = useState(0)
    const [totalLoansDefaulter, setTotalLoansDefaulter] = useState(0)

    const obtenerLoans = async()=>{

        const resp_loans = await Axios.get(URL_API+'/loans')
        setLoans(resp_loans.data.loans)
        
        setTotalLoansRegister(resp_loans.data.loans.length)

        //Obtenemos la cantidad total de prestamos activo
        loans.map(loan =>(
            loan.LoanActive ===  true 
            ? setTotalLoansRegister(totalLoansRegister+1)
            : null
        )) 

        //Obtenemos la cantidad total de prestamos En Mora
        loans.map(loan =>(
            loan.Enmora ===  true 
            ? setTotalLoansDefaulter(totalLoansDefaulter+1)
            : null
        )) 

        //Obtenemos la cantidad total de prestamos Al Dia
        loans.map(loan =>(
            loan.Enmora ===  false 
            ? setTotalLoansSolved(totalLoansSolved+1)
            : null
        )) 

    }

    useEffect(() => {
        obtenerLoans()
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
                    <h4>Gestion de Préstamos</h4>
                    <span>Módulo para gestionar los Préstamos</span>
                </div>
                <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <a href="index.html">
                            <i className="icofont icofont-user" />
                        </a>
                        </li>
                        <li className="breadcrumb-item"> Prestamos
                        </li>
                        
                    </ul>
                </div>
            </div>
            {/* Page-header end */}

            {/* Page-body start */}
            <div className="page-body">

                
            <div className="row">
                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-facebook">
                                <h3>{totalLoansRegister}</h3>
                                <span className="m-t-10" style={{color:"white", fontSize:16}}>Préstamos Registrados</span>
                                <i className="icofont icofont-edit" style={{opacity:1}}  />
                            </div>
                            </div>
                        </div>
                        {/* Facebook card end */}
                        {/* Twitter card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-twitter">
                                <h3>{totalLoansActive}</h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Préstamos Activos</span>
                                <i className="icofont icofont-money" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Twitter card end */}
                        {/* Linked in card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#40b572"}}>
                                <h3>{totalLoansSolved}</h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Prestamos Al Dia</span>
                                <i className="icofont icofont-check-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-google-plus">
                                <h3>{totalLoansDefaulter}</h3>
                                <span className="m-t-10 size-16"style={{color:"white", fontSize:16}}>Préstamos en Mora</span>
                                <i className="icofont icofont-close-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                    </div>


                <div className="card">
                    <div className="card-header">

                        <div className="card-block table-border-style">
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Código</th>
                                <th>Cliente</th>
                                <th>Tipo Préstamos</th>
                                <th>Capital</th>
                                <th>Tasa</th>
                                <th>Interes</th>
                                <th>Frecuencia</th>
                                <th>Cuota</th>
                                <th>Pagos</th>
                            </tr>
                            </thead>
                            <tbody>
                               
                                {
                                    loans?.map((loan)=> ( 
                                        
                                        <tr>
                                            <td></td>
                                            <td>{loan.codeLoan} </td>
                                            <td>{loan.requestId?.customerId?.personId?.name} {loan.requestId?.customerId?.personId?.lastname}</td>
                                            <td>{loan.requestId?.typeLoan}</td>
                                            <td>LPS. {parseFloat(loan.amountInitial).toFixed(2)}</td>
                                            <td>{loan.requestId.rate}%</td>
                                            <td>LPS. {parseFloat(loan.requestId.totalInterest).toFixed(2)}</td>
                                            <td>{loan.requestId.frequency}</td>
                                            <td>LPS. {parseFloat(loan.requestId.quotaValue).toFixed(2)}</td>
                                            <td><Link to={"/prestamos/ver/"+loan._id+"/"+loan.requestId._id} className="btn btn-sm btn-success"> {<RemoveRedEyeIcon />}</Link></td>   
                                        </tr>
                                       
                                    ))
                                }
                            
                            </tbody>
                        </table>
                        

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

export default ListLoans
