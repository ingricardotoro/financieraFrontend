
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

       <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box"></div>
          <div className="pcoded-container navbar-wrapper">
              
              {/**************MODULO NAVBAR */}
              <Navbar />
              {/**********FIN MODULO NAVBAR */}

          </div>
        </div>

        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">

              {/**************MODULO SIDEBAR */}
              <Sidebar />
              {/**********FIN MODULO SIDEBAR */}

            </div>
        </div>

        <div id="styleSelector">

        </div>

    </div>//Fin del MODULO APP 
  );
}

export default App;
