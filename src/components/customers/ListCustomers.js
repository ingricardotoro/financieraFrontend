import React, { useEffect, useState } from 'react'
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import axios from 'axios'
//import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useForm } from '../../hooks/useForm';
import { URL_API } from '../../config/config';
import { Link } from 'react-router-dom';
import Excel from '../../customers.xlsx'

function ListCustomers() {

    const [formValues, handleInputChange] = useForm({
        //codeCustomer:'',
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
    const [codeCustomer, setCodeCustomer] = useState(0)
    const [customersFilters, setCustomersFilters] = useState([])
    const [finding, setFinding] = useState(false)
    const [reload, setReload] = useState(false)

    const [uploadCustomer, setUploadCustomer] = useState({cols:'',rows:''})

    const [totalCustomersRegister, setTotalCustomersRegister] = useState(0)
    const [totalCustomersWithLoanActive, setTotalCustomersWithLoanActive] = useState(0)
    const [totalCustomersSolved, setTotalCustomersSolved] = useState(0)
    const [totalCustomersDefaulter, setTotalCustomersDefaulter] = useState(0)

    useEffect(() => {
       
        obtenerClientes()

    }, [reload])

    const obtenerClientes = async()=>{

        const resp_customers = await axios.get(URL_API+'/customers')
        const resp_MaxCode = await axios.get(URL_API+'/customers/lastCode')
        
        //arreglo principal de clientes
        setCustomers(resp_customers.data.customers)
        //Arreglo para realizar las busquedas
        setCustomersFilters(resp_customers.data.customers)

        setTotalCustomersRegister(resp_customers.data.customers.length)

        //Obtenemos la cantidad total de clientes con prestamos activo
        customers.map(customer =>(

            customer.LoanActive ===  true 
            ? setTotalCustomersWithLoanActive(setTotalCustomersWithLoanActive+1)
            : null
        ))    

        //no es una busqueda por filtro de busqueda
        setFinding(false)
        
        //Obtenemos la cantidad total de clients morosos
        customers.map(customer =>(
            customer.defaulter === true 
            ? setTotalCustomersDefaulter(totalCustomersDefaulter+1)
            : null
        ))

        //Obtenemos la cantidad total de clients solventes
        customers.map(customer =>(
            customer.solved === true 
            ? setTotalCustomersSolved(totalCustomersSolved+1)
            : null
        ))

        //obtenemos el siguente codigo de cliente a ingresar
        if(resp_MaxCode.data.LastCode[0]){
            setCodeCustomer(resp_MaxCode.data.LastCode[0].codeCustomer+1)
        }else{
            setCodeCustomer(1)
        }
      
    }

    const DesactivarCliente = async(idCustomer)=>{

        const resp_desactivar = await axios.put(URL_API+'/customers/updateActive/'+idCustomer, {active:false})
        if (resp_desactivar.data.ok ===true){
            obtenerClientes()   
        }
    }

    const ActivarCliente = async(idCustomer)=>{
        const resp_activar = await axios.put(URL_API+'/customers/updateActive/'+idCustomer, {active:true})
        if (resp_activar.data.ok ===true){
            obtenerClientes()   
        }
    }

    //funcion para filtrar y realizar busquedas por nombre y apellido
    const filterItems = (query)=> {
        return customers.filter(function(el) {
            return (el.personId.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    el.personId.lastname.toLowerCase().indexOf(query.toLowerCase()) > -1
                    )
        })
      }

    //funcion para mostrar los valores que han sido filtrados y buscados
    const handleFindCustomer =(e)=>{
        
        if(e.target.value!=0){
            let filters = filterItems(e.target.value)
            setCustomersFilters(filters)
            setFinding(true)
        }else{
            obtenerClientes()
        }

    }

    //realizar busquedas mediante el boton de buscar
    const handleButtonFindCustomer = ()=>{
       
        let query = document.getElementById("textFindCustomer").value
        if(query!=0){
            let filters = filterItems(query)
            setCustomersFilters(filters)
            setFinding(true)
        }else{
            obtenerClientes()
        }
    }

    //funcion para subir excel de clientes
    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
    
        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if(err){
            console.log(err);            
            }
            else{

            setUploadCustomer(
                {
                cols: resp.cols,
                rows: resp.rows
                } )
            }
            
        });              
    
    }

    //funcion para la carga de excel de nuevos clientes
    const handleUploadCustomers = async(e)=>{

        e.preventDefault()

        await axios.post(URL_API+'/customers/upload', uploadCustomer).then((data)=>{
            console.log("Datos Guardados." + JSON.stringify(data))
            if(data.data.ok === true){
                setReload(!reload)
                document.getElementById("closeModal").click();
            }else{
                alert("Error al Subir Clientes")
            }
        })
       

    }
    

    //funcion para crear nuevos clientes
    const handleSubmit = async(e)=>{
        
        e.preventDefault()

        formValues.codeCustomer = codeCustomer

        await axios.post(URL_API+'/customers', formValues)

        obtenerClientes()
     
        document.getElementById("closeModal").click();
    } 

    return (
        <div className="pcoded-content">

        <div className="pcoded-inner-content">
 
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
                                <h3>{totalCustomersRegister}</h3>
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
                                <h3>{totalCustomersWithLoanActive} </h3>
                                <span className="m-t-10 size-16" style={{color:"white", fontSize:16}}>Con Préstamo Activos</span>
                                <i className="icofont icofont-money" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                        {/* Twitter card end */}
                        {/* Linked in card start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card social-widget-card">
                            <div className="card-block-big" style={{backgroundColor:"#40b572"}}>
                                <h3>{totalCustomersSolved} </h3>
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
                                <h3>{totalCustomersDefaulter} </h3>
                                <span className="m-t-10 size-16"style={{color:"white", fontSize:16}}>Clientes en Mora</span>
                                <i className="icofont icofont-close-circled" style={{opacity:1}} />
                            </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row">

                        {/* Facebook card start */}
                        <div className="col-md-3 col-xl-6">
                            <input onChange={handleFindCustomer} type="text" id="textFindCustomer" className=" form-control form-control-round" style={{borderRadius: "50px"}} placeholder="Buscar Cliente ..."  />
                        </div>
                        {/* Facebook card end */}
                       
                       
                        {/* Linked in card start */}
                        <div className="col-sm-12 col-md-2 col-xl-2">
                            <button onClick={() => handleButtonFindCustomer()} className="col-sm-12 btn btn-primary  btn-round f-right d-inline-flex">
                                {<SearchIcon />} 
                                Buscar Cliente  
                            </button>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className=" col-sm-12 col-md-2 col-xl-2">
                            <button className=" btn btn-success btn-round f-right d-inline-flex" data-toggle="modal" data-target="#modalNewCustomer">
                                {<AddCircleIcon />}     
                                Nuevo Cliente  
                            </button>
                        </div>

                        <div className=" col-sm-12 col-md-2 col-xl-2">
                            <button className=" btn btn-warning btn-round f-right d-inline-flex" data-toggle="modal" data-target="#modalUpCustomers">
                                {<ArrowUpwardIcon />}     
                                Subir Clientes  
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

                                {     finding === false ? 

                                       customers?.map(customer => ( 

                                        <tr className={customer.active ? null : "desactivado"}  key={customer._id}>
                                            <th scope="row">1</th>
                                            <td> <Avatar alt="Remy Sharp" src="assets/images/avatar-4.png" /></td>
                                            <td>{customer.codeCustomer}</td>
                                            <td>{customer.personId.name}</td>
                                            <td>{customer.personId.lastname}</td>    
                                            <td>{customer.personId.identidad}</td>
                                            <td>{customer.personId.phone1}</td>
                                            <td><Link to ={`clientes/expediente/${customer._id}`} className="btn btn-sm btn-success "> {<InfoIcon />}</Link></td>
                                            <td>
                                                {customer.active === true 
                                                    ? <button onClick={() => DesactivarCliente(customer._id)} className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> 
                                                    : <button onClick={() =>ActivarCliente(customer._id)} className="btn btn-sm btn-success"> {<CheckCircleOutlineIcon />}</button>
                                                }
                                            </td>
                                        </tr>
                                        )) 

                                        :

                                        customersFilters?.map(customer => ( 

                                            <tr className={customer.active ? null : "desactivado"}  key={customer._id}>
                                                <th scope="row">1</th>
                                                <td> <Avatar alt="Remy Sharp" src="assets/images/avatar-4.png" /></td>
                                                <td>{customer.codeCustomer}</td>
                                                <td>{customer.personId.name}</td>
                                                <td>{customer.personId.lastname}</td>    
                                                <td>{customer.personId.identidad}</td>
                                                <td>{customer.personId.phone1}</td>
                                                <td><Link to ={`clientes/expediente/${customer.personId._id}`} className="btn btn-sm btn-success "> {<InfoIcon />}</Link></td>
                                                <td>
                                                    {customer.active === true 
                                                        ? <button onClick={() => DesactivarCliente(customer._id)} className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> 
                                                        : <button onClick={() =>ActivarCliente(customer._id)} className="btn btn-sm btn-success"> {<CheckCircleOutlineIcon />}</button>
                                                    }
                                                </td>
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
             <div className="modal fade" id="modalUpCustomers" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                             <h5 className="modal-title" id="exampleModalLabel">Subir Excel de Clientes </h5>
                            <button id="closeModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                    <div className="modal-body">
                    <form onSubmit={handleUploadCustomers}>
                        <div className="row">
                            <input value={codeCustomer} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
                             <label className="col-sm-4 col-md-6 col-form-label"><a className="btn btn-success" target="_black" href={Excel} >Descargar Excel de Muestra</a> </label> 
                             </div>
                        
                        <div className="row">
                           
                            <div className="col-sm-12 col-md-12">
                                <div className="input-group">
                                     <input className="form-control" type="file" onChange={fileHandler} style={{"padding":"10px"}} />
                                </div>
                               {
                                   uploadCustomer.rows === '' ? null
                                   :<OutTable className="table table-responsive" data={uploadCustomer.rows} columns={uploadCustomer.cols} tableClassName="table table-responsive" tableHeaderRowClass="heading" />
                                
                                }
                                    
                            </div>
                        </div>
                    </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="submit" onClick={handleUploadCustomers} className="btn btn-primary">Guardar</button>
                    </div>

                    </div>
                    </div>
                                     
             </div>
            {/* END Modal */}


                {/* Modal */}
                <div className="modal fade" id="modalNewCustomer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Cliente  <strong>Código: {codeCustomer} </strong></h5>
                            <button id="closeModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <input value={codeCustomer} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="name" id="name" type="text" className="form-control" placeholder="Ingrese Nombres" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="lastname" id="lastname" type="text" className="form-control" placeholder="Ingrese Apellidos"/>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="identidad" id="identidad" type="text" className="form-control" placeholder="Identidad: 0801199916151" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleInputChange} name="rtn" id="rtn" type="text" className="form-control" placeholder="RTN. 08011999161512" />
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                                    <input onChange={handleInputChange}  name="phone1" id="phone1" type="text" className="form-control" placeholder="Teléfono-1"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
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
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-pin"></i></span>
                                    <select onChange={handleInputChange}  name="city" id="city" className="form-control col-md-12"> 
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
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                                    <input onChange={handleInputChange}  name="fec_nac" id="fec_nac" className="form-control" type="date"/>
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-arrow"></i></span>
                                    <textarea onChange={handleInputChange}  name="location" id="location" className="form-control" rows="5" placeholder="Dirección completa"></textarea>  
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-fix-tools "></i></span>
                                    <input onChange={handleInputChange}  name="profesion" id="profesion" type="text" className="form-control" placeholder="Profesión" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-group-students"></i></span>
                                    <select onChange={handleInputChange}  name="gender" id="gender"  className="form-control col-md-12"> 
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
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-paper-clip mr-1"></i>Fotografia </span>
                                    <input onChange={handleInputChange}  name="photo" id="photo" type="file" className="form-control"></input>
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
