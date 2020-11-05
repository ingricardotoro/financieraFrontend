import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from '../../hooks/useForm';

function ListCustomers() {

    const [formValues, handleInputChange] = useForm({
        codeCustomer:'c-110',
        name:'',
        lastname:'',
        identidad:'',
        gender:'',
        rtn:'',
        fec_nac:'',
        phone1:'',
        phone2:'',
        email1:'',
        email2:'',
        profesion:'',
        city:'',
        location:'',
        photo:'',
    })

    const { codeCustomer,name,lastname,identidad,gender,rtn,fec_nac,phone1,phone2,email1,email2,profesion,city,location,photo } = formValues

    const handleSubmit = ()=>{
        e.preventDefault()
        
    }
    return (
        <div class="pcoded-content">

        <div class="pcoded-inner-content">
 
            {/* Main-body start */}
            <div className="main-body">
                <div className="page-wrapper">
                {/* Page-header start */}
                <div className="page-header mt-5">
                    <div className="page-header-title">
                    <h4>Gestión de Clientes del Sistema</h4>
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
                                <span className="m-t-10" style={{color:"white", fontSize:16}}>Clientes Registrados</span>
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
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Clientes Activos</span>
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
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Clientes Al Dia</span>
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
                                <span className="m-t-10 size-16"style={{color:"white", fontSize:16}}>Clientes en Mora</span>
                                <i className="icofont icofont-close-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">

                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-8">
                            <input type="text" className="mt-3 form-control form-control-round" style={{borderRadius: "50px"}} placeholder="Buscar Cliente ..."  />
                        </div>
                        {/* Facebook card end */}
                       
                       
                        {/* Linked in card start */}
                        <div className="col-sm-12 col-md-3 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-primary  btn-round f-right d-inline-flex">
                                {<SearchIcon />} 
                                Buscar Cliente  
                            </button>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className=" col-sm-12 col-md-3 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-success btn-round f-right d-inline-flex" data-toggle="modal" data-target="#modalNewCustomer">
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

                {/* Modal */}
                <div className="modal fade" id="modalNewCustomer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Cliente  <strong>Código: C-105</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            <input value={"C-110"} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="name" id="name" type="text" className="form-control" placeholder="Ingrese Nombres" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="lastname" id="lastname" type="text" className="form-control" placeholder="Ingrese Apellidos"/>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="identidad" id="identidad" type="text" className="form-control" placeholder="Identidad: 0801199916151" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="rtn" id="rtn" type="text" className="form-control" placeholder="RTN. 08011999161512" />
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span>
                                    <input onChange={handleInputChange}  name="phone1" id="phone1" type="text" className="form-control" placeholder="Teléfono-1"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span>
                                    <input onChange={handleInputChange}  name="phone2" id="phone2" type="text" className="form-control" placeholder="Teléfono-2"/>
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">@</span>
                                    <input onChange={handleInputChange}  name="email1" id="email1" type="text" className="form-control" placeholder="Email-1"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">@</span>
                                    <input onChange={handleInputChange}  name="email2" id="email2" type="text" className="form-control" placeholder="Email-2" />
                                </div>
                            </div>
                            
                        </div>

                        <hr />

                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-location-pin"></i></span>
                                    <select onChange={handleInputChange}  name="city" id="city" class="form-control col-md-12"> 
                                        <option value="opt1">Selecione Ciudad</option>
                                        <option value="opt2">CIUDAD 2</option>
                                        <option value="opt3">CIUDAD 3</option>
                                        <option value="opt4">CIUDAD 4</option>
                                        <option value="opt5">CIUDAD 5</option>
                                        <option value="opt6">CIUDAD 6</option>
                                        <option value="opt7">CIUDAD 7</option>
                                        <option value="opt8">CIUDAD 8</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                                    <input onChange={handleInputChange}  name="fec_nac" id="fec_nac" class="form-control" type="date"/>
                                </div>
                            </div>
                            
                        </div>



                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-location-arrow"></i></span>
                                    <textarea onChange={handleInputChange}  name="location" id="location" class="form-control" id="exampleTextarea" rows="5" placeholder="Dirección completa"></textarea>  
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-fix-tools "></i></span>
                                    <input onChange={handleInputChange}  name="profesion" id="profesion" type="text" className="form-control" placeholder="Profesión" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-group-students"></i></span>
                                    <select onChange={handleInputChange}  name="gender" id="gender"  class="form-control col-md-12"> 
                                        <option value="opt1">Selecione Género</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                </div>
                            </div>

                    
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-12">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-paper-clip mr-1"></i>Fotografia </span>
                                    <input onChange={handleInputChange}  name="photo" id="photo" type="file" class="form-control"></input>
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
