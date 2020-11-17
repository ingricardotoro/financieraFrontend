import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from '../../hooks/useForm';
import { URL_API } from '../../config/config';

function ListCustomers() {

    const [formValues, handleInputChange] = useForm({
        codeCustomer:'',
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
   
   
    const [customers, setCustomers] = useState([])
    const [nextCode, setNextCode] = useState(0)
    //const { codeCustomer,name,lastname,identidad,gender,rtn,fec_nac,phone1,phone2,email1,email2,profesion,city,location,photo } = formValues

    useEffect(() => {
       
        obtenerClientes()
        obtenerMaximoCodecustomer()

    }, [])

    const obtenerClientes = async()=>{

        const resp_customers = await axios.get(URL_API+'/customers')
        setCustomers(resp_customers.data.customers)
        //console.log(resp_customers.data.customers)
     
    }

    const obtenerMaximoCodecustomer =()=>{

        if (customers.length > 0){
            let codigos =[]
            customers.map(customer => (
        
            codigos.push(customer.codeCustomer)
         ))

         codigos.sort()

         setNextCode((codigos.length-1).codeCustomer)
        }else{
            setNextCode(1)
        }

        
    }

    const handleSubmit = async(e)=>{
        
        e.preventDefault()

        await axios.post(URL_API+'/customers', formValues)

        window.location.href ='/clientes'
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

                                {
                                       customers.map(customer => ( 
                                        <tr>
                                            <th scope="row">1</th>
                                            <td> <Avatar alt="Remy Sharp" src="assets/images/avatar-4.png" /></td>
                                            <td>{customer.codeCustomer}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.lastname}</td>    
                                            <td>{customer.identidad}</td>
                                            <td>{customer.phone1}</td>
                                            <td><button className="btn btn-sm btn-success "> {<InfoIcon />}</button></td>
                                            <td><button className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> </td>
                                        </tr>
                                        )) 
                                     } 
                            
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
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Cliente  <strong>Código: {nextCode} </strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <input value={nextCode} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
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
                                        <option value="opt1">Selecione Localidad</option>
                                        <option value="Olanchito">Olanchito</option>
                                        <option value="Ceiba">La Ceiba</option>
                                        <option value="Tocoa">Tocoa</option>
                                        <option value="Saba">Sabá</option>
                                        <option value="Arenal">Arenal</option>
                                        <option value="jocon">Jocón</option>
                                        <option value="otra">Otra</option>
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
                                    <textarea onChange={handleInputChange}  name="location" id="location" class="form-control" rows="5" placeholder="Dirección completa"></textarea>  
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
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Guardar</button>
                    </div>
                    </div>
                    </div>
                </div>
                 {/* END Modal */}

        
        </div> 
           
    </div>

    )
}

/*const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      color: "#fff",
      marginRight: "5px"
    },
  }));*/

export default ListCustomers
