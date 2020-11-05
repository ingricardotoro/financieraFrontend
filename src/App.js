import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

import ListCustomers from './components/customers/ListCustomers'
import ListLoans from './components/loans/ListLoans'
import ListRequests from './components/requests/ListRequests'
import Inicio from "./components/Inicio";

function App() {
  return (
    <div className="App">

      <Router>

              {/**************MODULO NAVBAR */}
              <Navbar />
              {/**********FIN MODULO NAVBAR */}

          
              {/**************MODULO SIDEBAR */}
              <Sidebar />
              {/**********FIN MODULO SIDEBAR */}

        <Route exact path="/" component={Inicio} />
        <Route exact path="/clientes" component={ListCustomers} />
        <Route exact path="/solicitudes" component={ListRequests} />
        <Route exact path="/prestamos" component={ListLoans} />


      </Router>


        <div id="styleSelector">

        </div>

    </div>//Fin del MODULO APP 
  );
}

export default App;
