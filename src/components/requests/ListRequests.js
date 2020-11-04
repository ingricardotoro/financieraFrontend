import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BlockIcon from '@material-ui/icons/Block';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

function ListRequests() {

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
                    <h4>Gestión de Solicitudes del Sistema</h4>
                    <span>Módulo para gestionar las Solicitudes registrados</span>
                    </div>
                    <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <a href="index.html">
                            <i className="icofont icofont-user" />
                        </a>
                        </li>
                        <li className="breadcrumb-item">Módulo de Solicitudes
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
                                <span className="m-t-10" style={{color:"white", fontSize:16}}>Solicitudes Registradas</span>
                                <i className="icofont icofont-edit" style={{opacity:1}}  />
                            </div>
                            </div>
                        </div>
                        {/* Facebook card end */}
                        {/* Twitter card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#f1c40f"}}>
                                <h3>550</h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Solicitudes Pendientes</span>
                                <i className="icofont icofont-hour-glass" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Twitter card end */}
                        {/* Linked in card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#40b572"}}>
                                <h3>300</h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Solicitudes Aprobadas</span>
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
                                <span className="m-t-10 size-16"style={{color:"white", fontSize:16}}>Solicitudes Denegadas</span>
                                <i className="icofont icofont-close-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">

                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-8">
                            <input type="text" className="mt-3 form-control form-control-round" style={{borderRadius: "50px"}} placeholder="Buscar Solicitud ..."  />
                        </div>
                        {/* Facebook card end */}
                       
                       
                        {/* Linked in card start */}
                        <div className="col-sm-12 col-md-3 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-primary  btn-round f-right d-inline-flex">
                                {<SearchIcon />} 
                                Buscar Solicitud  
                            </button>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className=" col-sm-12 col-md-3 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-success btn-round f-right d-inline-flex"  data-toggle="modal" data-target="#modalNewRequest">
                                {<AddCircleIcon />}     
                                Nueva Solicitud
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
                                <th>Código</th>
                                <th>Foto</th>
                                <th>Cliente</th>
                                <th>Préstamo</th>
                                <th>Monto</th>
                                <th>Cuotas</th>
                                <th>Sucursal</th>
                                <th>Ver</th>
                                <th>Estado</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>S-101</td>
                                <td> <Avatar alt="Remy Sharp" src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" /></td>
                                <td>C-01 Ricardo Toro</td>
                                <td>Amortizado</td>
                                <td>LPS. 7,000.00</td>
                                <td>8 Cuotas Semanal</td>
                                <td>Valle Alto</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-warning d-inline-flex"> {<HourglassEmptyIcon />} Pendiente</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>S-102</td>
                                <td><Avatar alt="Travis Howard" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" /></td>
                                <td>C-02 Davig Gomes</td>
                                <td>Amortizado</td>
                                <td>LPS. 10,000.00</td>
                                <td>10 cuotas mensuales</td>
                                <td>Central</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger d-inline-flex"> {<BlockIcon />} Denegaa</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>S-103</td>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-1.png" /></td>
                                <td>C-03 Jorge Osorio</td>
                                <td>Amortizado</td>
                                <td>LPS. 5,000.00</td>
                                <td>7 cuotas Semanales</td>
                                <td>Central</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-success d-inline-flex"> {<CheckBoxIcon />}Aprobada</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>S-104</td>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-2.png" /></td>
                                <td>C-104 Nora Cruz</td>
                                <td>Amortizado</td>
                                <td>LPS. 9,000.00</td>
                                <td>12 cuatoas Mensuales</td>
                                <td>Valle Alto</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-success d-inline-flex"> {<CheckBoxIcon />}Aprobada</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>S-105</td>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-3.png" /></td>
                                <td>C-105 Daniel Amaya</td>
                                <td>Amortizado</td>
                                <td>LPS. 8,000.00</td>
                                <td>14 Cuotas Semanales</td>
                                <td>Valle Alto</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-warning d-inline-flex"> {<HourglassEmptyIcon />}Pendiente</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>S-106</td>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-4.png" /></td>
                                <td>C-106 Luis Manzanares</td>
                                <td>Amortizado</td>
                                <td>LPS. 6,500.00</td>
                                <td>6 Cuotas Semanales</td>
                                <td>Central</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-success d-inline-flex"> {<CheckBoxIcon />}Aprobada</button> </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>S-107</td>
                                <td><Avatar alt="Cindy Baker" src="assets/images/avatar-5.png" /></td>
                                <td>C-107 Douglas Portillo</td>
                                <td>Amortizado</td>
                                <td>LPS. 10,000.00</td>
                                <td>12 Cuotas Mensuales</td>
                                <td>Valle Alto</td>
                                <td><button className="btn btn-sm btn-primary "> {<InfoIcon />}</button></td>
                                <td><button className="btn btn-sm btn-danger d-inline-flex"> {<BlockIcon />}Denegada</button> </td>
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

            {/* Modal */}
            <div className="modal fade" id="modalNewRequest" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nueva Solicitud  <strong>Código: S-105</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                                    <input type="text" className="form-control" placeholder="Ingrese Nombre de Cliente" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit"></i></span>
                                    <input disabled={true} type="text" className="form-control" placeholder="Código de Cliente"/>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                            <label htmlFor="monto">Tipo de Préstamo</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-money"></i></span>
                                    <select name="select" class="form-control col-md-12"> 
                                        <option value="opt1">Tipo de Préstamos</option>
                                        <option value="opt2">Amortizacion</option>
                                        <option value="opt2">Interes Simple</option>
                                        <option value="opt3">Interes Acumulado</option>
                                        <option value="opt4">Préstamos Tipo B</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="monto">Monto Solicitado</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">LPS.</span>
                                    <input id="monto" name="monto" type="text" className="form-control" placeholder="Ingresar el Monto" />
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">%</span>
                                    <input type="text" className="form-control" placeholder="Tasa de Interes en %"/>
                                </div>         
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-hour-glass"></i></span>
                                    <select name="select" class="form-control col-md-12"> 
                                        <option value="opt1">Frecuencia de Pago</option>
                                        <option value="opt2">Semanal</option>
                                        <option value="opt2">Quincenal</option>
                                        <option value="opt3">Mensual</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                            <label htmlFor="dateInicio">Número de Cuotas</label> 
                                <div className="input-group">
                                    <span className="input-group-addon"  id="basic-addon1"><i class="icofont icofont-listing-number"></i></span>
                                    <input type="text" className="form-control" placeholder="Cantidad de Cuotas"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                            <label htmlFor="dateInicio">Valor de cada cuota</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">LPS.</span>
                                    <input type="text" className="form-control" placeholder="Valor de cada cuota" />
                                </div>
                            </div>
                            
                        </div>

                        <hr />

                        <div className="row">
                            
                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="dateInicio">Fecha de Inicio</label> 
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-calendar mr-1"></i></span>
                                    <input class="form-control" type="date"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="dateInicio">Total de Interes</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">LPS.</span>
                                    <input id="totalInteres" name="totalInteres"  type="text" className="form-control" placeholder="Total de Interes" />
                                     
                                </div>
                            </div>
                            
                        </div>



                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit"></i></span>
                                    <textarea class="form-control" id="exampleTextarea" rows="6" placeholder="Observaciones"></textarea>  
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="totalInteres">Costo de Cierre y Sucursal</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">LPS.</span>
                                    <input id="costoCierre" className="form-control" name="costoCierre" type="text" placeholder="Costo de Cierre 4%" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-bank-alt"></i> </span> 
                                    <select name="select" class="form-control col-md-12"> 
                                        <option value="opt1">Seleccione Sucursal</option>
                                        <option value="opt2">Central</option>  
                                        <option value="opt2">Valle Alto</option>
                                    </select>   
                                </div>
                            </div>
                
                        </div>

                        <div className="row">

                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="totalInteres">Nombre y Teléfono de Referencia</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                                    <input id="referecia1" className="form-control" name="referencia1" type="text" placeholder="Nombre de Referencia" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i> </span> 
                                    <input id="telefonoRef1" className="form-control" name="telefonoRef1" type="text" placeholder="Teléfono de Referencia" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <label htmlFor="totalInteres">Nombre y Teléfono de Referencia</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                                    <input id="referencia2" className="form-control" name="referencia2" type="text" placeholder="Nombre de Referencia" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span> 
                                    <input id="telefonoRef1" className="form-control" name="telefonoRef1" type="text" placeholder="Teléfono de Referencia" />
                                </div>
                            </div>
                
                        </div>



                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                    </div>
                    </div>
                </div>
                 {/* END Modal */}

            
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

export default ListRequests
