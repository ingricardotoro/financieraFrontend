import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListCustomers from '../components/customers/ListCustomers'
//import ListLoans from '../components/loans/ListLoans'

import ListRequestPage from '../page/Requests/ListRequestPage'
import RecordsPage from '../page/Customers/Records'
import AvalRecordsPage from '../page/Avals/Records'
//import Inicio from "../components/Inicio";
import NewRequestPage from "../page/Requests/NewRequestPage";
import ViewRequestPage from "../page/Requests/ViewRequestPage";
import ListLoansPage from "../page/Loans/ListLoans";
import ViewLoanPage from "../page/Loans/ViewLoan";
import CalculatorPage from "../page/Calculator"
import ListAvals from "../page/Avals/ListAvals"
import PaysPage from "../page/PaysPage"
import ReportsPage from "../page/Reports"
import TestPage from "../page/Test"

const StackRoutes = () => {
   
    return (
        <>
           
         <Switch>
            
            <Route exact path="/clientes/expediente/:idcustomer" component={RecordsPage} />
            <Route exact path="/clientes" component={ListCustomers} />
            <Route exact path="/avales" component={ListAvals} />
            <Route exact path="/avales/expediente/:idaval" component={AvalRecordsPage} />


            <Route exact path="/solicitudes/crear" component={NewRequestPage} />
            <Route exact path="/solicitudes/ver/:id" component={ViewRequestPage} />
            <Route exact path="/solicitudes" component={ListRequestPage} />

            <Route exact path="/prestamos/ver/:idloan/:idrequest" component={ViewLoanPage} />
            <Route exact path="/prestamos" component={ListLoansPage} />

            <Route exact path="/calculadora" component={CalculatorPage} />
            <Route exact path="/pagos" component={PaysPage} />

             <Route exact path="/reportes" component={ReportsPage} /> 

            <Route exact path="/test" component={TestPage} />

         
         </Switch>
            
        </>
    )
}

export default StackRoutes



