import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

import ListCustomers from './components/customers/ListCustomers'
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

            


        


        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/clientes" component={ListCustomers} />

      </Router>


        <div id="styleSelector">

        </div>

    </div>//Fin del MODULO APP 
  );
}

export default App;
