import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ListCustomers from '../components/customers/ListCustomers'
//import ListLoans from '../components/loans/ListLoans'

import ListRequestPage from '../page/Requests/ListRequestPage'
import RecordsPage from '../page/Customers/Records'
//import Inicio from "../components/Inicio";
import NewRequestPage from "../page/Requests/NewRequestPage";
import ListLoansPage from "../page/Loans/ListLoans";
import CalculatorPage from "../page/Calculator"
import PaysPage from "../page/PaysPage"

const StackRoutes = () => {
   
    return (
        <>
      
         <Switch>
            
            <Route exact path="/clientes/expediente/:idcustomer" component={RecordsPage} />
            <Route exact path="/clientes" component={ListCustomers} />

            <Route exact path="/solicitudes/crear" component={NewRequestPage} />
            <Route exact path="/solicitudes" component={ListRequestPage} />

            <Route exact path="/prestamos" component={ListLoansPage} />

            <Route exact path="/calculadora" component={CalculatorPage} />
            <Route exact path="/pagos" component={PaysPage} />
         
         </Switch>
            
        </>
    )
}

export default StackRoutes



