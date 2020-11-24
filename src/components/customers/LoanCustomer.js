import React from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';

function LoanCustomer() {
    return (
        <div>    
            <div className="card-block table-border-style">
                <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Codigo</th>
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
    )
}

export default LoanCustomer
