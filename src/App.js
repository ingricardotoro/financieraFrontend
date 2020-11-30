import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

import ListCustomers from './components/customers/ListCustomers'
import ListLoans from './components/loans/ListLoans'


import ListRequestPage from './page/Requests/ListRequestPage'
import RecordsPage from './page/Customers/Records'
import Inicio from "./components/Inicio";
import NewRequestPage from "./page/Requests/NewRequestPage";
import ListLoansPage from "./page/Loans/ListLoans";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">

      <Router>
      <Route exact path="/login" component={Login} />

              {/**************MODULO NAVBAR */}
              <Navbar />
              {/**********FIN MODULO NAVBAR */}

          
              {/**************MODULO SIDEBAR */}
              <Sidebar />
              {/**********FIN MODULO SIDEBAR */}

        <Route exact path="/clientes/expediente/:idcustomer" component={RecordsPage} />
        <Route exact path="/clientes" component={ListCustomers} />

        <Route exact path="/solicitudes/crear" component={NewRequestPage} />
        <Route exact path="/solicitudes" component={ListRequestPage} />

        <Route exact path="/prestamos" component={ListLoansPage} />


      </Router>


        <div id="styleSelector">

        </div>

    </div>//Fin del MODULO APP 
  );
}

export default App;
