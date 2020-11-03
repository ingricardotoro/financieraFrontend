import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import AddCircleIcon from '@material-ui/icons/AddCircle';

function ListCustomers() {

    const classes = useStyles();

    return (
        <div class="pcoded-content">

        <div class="pcoded-inner-content">

        

            {/* Main-body start */}
            <div className="main-body">
                <div className="page-wrapper">
                {/* Page-header start */}
                <div className="page-header mt-5">
                    <div className="page-header-title">
                    <h4>Gestión de Clientes de Sistema</h4>
                    <span>Módulo para gestionar los clientes registrados</span>
                    </div>
                    <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <a href="index.html">
                            <i className="icofont icofont-user" />
                        </a>
                        </li>
                        <li className="breadcrumb-item">Módulo de Clientes
                        </li>
                        
                    </ul>
                    </div>
                </div>
                {/* Page-header end */}
                {/* Page-body start */}
                <div className="page-body">
                    {/* Basic table card start */}
                    <div className="card">
                    <div className="card-header">

                    <div className="row">
                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-facebook">
                                <h3>750</h3>
                                <span className="m-t-10" style={{color:"white"}}>Clientes Registrados</span>
                                <i className="icofont icofont-edit" style={{opacity:1}}  />
                            </div>
                            </div>
                        </div>
                        {/* Facebook card end */}
                        {/* Twitter card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-twitter">
                                <h3>550</h3>
                                <span className="m-t-10" style={{color:"white"}}>Clientes Activos</span>
                                <i className="icofont icofont-money" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Twitter card end */}
                        {/* Linked in card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#40b572"}}>
                                <h3>300</h3>
                                <span className="m-t-10" style={{color:"white"}}>Clientes Al Dia</span>
                                <i className="icofont icofont-check-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big bg-google-plus">
                                <h3>250</h3>
                                <span className="m-t-10"style={{color:"white"}}>Clientes en Mora</span>
                                <i className="icofont icofont-close-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                    </div>
                        
                        <div className="form-group" >
                        
                            <div className="col-sm-12 d-flex">
                                <input type="text" className="form-control form-control-round" placeholder="Buscar Cliente ..."  />
                            
                            <button className="btn btn-primary  btn-round f-right d-inline-flex">
                                {<SearchIcon />} 
                                Buscar Cliente  
                            </button>
                            <button className="btn btn-success btn-round f-right d-inline-flex">
                                {<AddCircleIcon />} 
                                Nuevo Cliente  
                            </button>
                            
                            </div>
                        </div>
                           
                    </div>

                    <div className="card-block table-border-style">
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Foto</th>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Identidad</th>
                                <th>Teléfono</th>
                                <th>Ver</th>
                                <th>Desactivar</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td> <Avatar alt="Remy Sharp" src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" /></td>
                                <td>C-101</td>
                                <td>Ricardo</td>
                                <td>Toro</td>
                                <td>0801198816145</td>
                                <td>89878485</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><Avatar alt="Travis Howard" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" /></td>
                                <td>C-102</td>
                                <td>Davig</td>
                                <td>Gomez</td>
                                <td>0806198814221</td>
                                <td>96401245</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-1.png" /></td>
                                <td>c-103</td>
                                <td>Jorge</td>
                                <td>Osorio</td>
                                <td>0201199912354</td>
                                <td>86878584</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-2.png" /></td>
                                <td>C-104</td>
                                <td>Nora Yolanda</td>
                                <td>Cruz</td>
                                <td>0801197565451</td>
                                <td>33353632</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-3.png" /></td>
                                <td>c-105</td>
                                <td>Daniel</td>
                                <td>Amaya</td>
                                <td>0201199623231</td>
                                <td>98979596</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-4.png" /></td>
                                <td>C-106</td>
                                <td>Luis</td>
                                <td>Manzanares</td>
                                <td>0801198816124</td>
                                <td>89784587</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-5.png" /></td>
                                <td>C-107</td>
                                <td>Douglas Danilo</td>
                                <td>Portillo</td>
                                <td>0803200025145</td>
                                <td>99987878</td>
                                <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    {/* Basic table card end */}
                   
                </div>
                {/* Page-body end */}
                </div>
            </div>
            {/* Main-body end */}

            
            <div id="styleSelector">
            </div>
        
        </div> 
           
    </div>

    )
}

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "#fff",
      marginRight: "5px"
    },
  }));

export default ListCustomers
