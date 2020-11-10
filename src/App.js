import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

import ListCustomers from './components/customers/ListCustomers'
import ListLoans from './components/loans/ListLoans'
import ListRequestPage from './page/Requests/ListRequestPage'
import Inicio from "./components/Inicio";
import NewRequestPage from "./page/Requests/NewRequestPage";

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

        <Route exact path="/solicitudes/crear" component={NewRequestPage} />
        <Route exact path="/solicitudes" component={ListRequestPage} />

        <Route exact path="/prestamos" component={ListLoans} />


      </Router>


        <div id="styleSelector">

        </div>

    </div>//Fin del MODULO APP 
  );
}

export default App;
