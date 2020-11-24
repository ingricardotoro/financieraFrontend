import React from 'react'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

function ListLoans() {
    return (

    <div class="pcoded-content">

        <div class="pcoded-inner-content">

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

                <div className="card">
                    <div className="card-header">

                        <div className="card-block table-border-style">
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Cliente</th>
                                <th>Finalización</th>
                                <th>Tipo Préstamos</th>
                                <th>Capital</th>
                                <th>Interes</th>
                                <th>Frecuencia</th>
                                <th>Cuota</th>
                                <th>Otros Gastos</th>
                                <th>Pagos</th>
                                
                            </tr>
                            </thead>
                            <tbody>

                            <tr style={{backgroundColor:"lightgreen"}}>
                                <td>#</td>
                                <td>112</td>
                                <td>10/02/2021</td>
                                <td>Fiduciario</td>
                                <td>8000.00</td>
                                <td>920.00</td>
                                <td>Mensual</td>
                                <td>770.00</td>
                                <td>320.00</td>
                                <td><button className="btn btn-sm btn-success"> {<RemoveRedEyeIcon />}</button></td>
                                
                            </tr>

                            <tr style={{backgroundColor:"lightcoral"}}>
                                <td>#</td>
                                <td>110</td>
                                <td>30/06/2020</td>
                                <td>Fiduciario</td>
                                <td>6000.00</td>
                                <td>720.00</td>
                                <td>Mensual</td>
                                <td>580.00</td>
                                <td>240.00</td>
                                <td><button className="btn btn-sm btn-success"> {<RemoveRedEyeIcon />}</button></td>
                                
                            </tr>
                            
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
