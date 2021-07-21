import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from '../../hooks/useForm';
import { URL_API } from '../../config/config';
import { Link } from 'react-router-dom';

function ListAvals() {

    let initialState = {
        codeAval:0,
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
    }

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }
   
   
    const [avals, setAvals] = useState([])
    const [avalsFilters, setAvalsFilters] = useState([])
    const [finding, setFinding] = useState(false)

    const [totalAvalsRegister, setTotalAvalsRegister] = useState(0)
   
    useEffect(() => {
    
        obtenerAvales()

    }, [])

    const obtenerAvales = async()=>{

        const resp_avales = await axios.get(URL_API+'/avals')
        const resp_MaxCode = await axios.get(URL_API+'/avals/lastCode')
        
        //arreglo principal de avales
        setAvals(resp_avales.data.avals)
        //Arreglo para realizar las busquedas
        setAvalsFilters(resp_avales.data.avals)

        setTotalAvalsRegister(resp_avales.data.avals.length)    

        //no es una busqueda por filtro de busqueda
        setFinding(false)
        
        //obtenemos el siguente codigo de aval a ingresar
        if(resp_MaxCode.data.LastCode.length>0){
            //AddCodeAval(resp_MaxCode.data.LastCode[0].codeAval+1)
            //setCodeAval(resp_MaxCode.data.LastCode[0].codeAval+1)
            setValues({
               ...values,
                codeAval: parseInt(resp_MaxCode.data.LastCode[0].codeAval)+1
            })
        }else{
           
            setValues({
               ...values,
                codeAval: 1
            })
        }
      
    }

    const DesactivarAval = async(idAval)=>{

        const resp_desactivar = await axios.put(URL_API+'/avals/updateActive/'+idAval, {active:false})
        if (resp_desactivar.data.ok ===true){
            obtenerAvales()   
        }
    }

    const ActivarAval = async(idAval)=>{
        const resp_activar = await axios.put(URL_API+'/avals/updateActive/'+idAval, {active:true})
        if (resp_activar.data.ok ===true){
            obtenerAvales()   
        }
    }

    //funcion para filtrar y realizar busquedas por nombre y apellido
    const filterItems = (query)=> {
        return avals.filter(function(el) {
            return (el.personId.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                    el.personId.lastname.toLowerCase().indexOf(query.toLowerCase()) > -1
                    )
        })
      }

    //funcion para mostrar los valores que han sido filtrados y buscados
    const handleFindAval =(e)=>{
        
        if(e.target.value!=0){
            let filters = filterItems(e.target.value)
            setAvalsFilters(filters)
            setFinding(true)
        }else{
            obtenerAvales()
        }
    }

    //realizar busquedas mediante el boton de buscar
    const handleButtonFindAvals = ()=>{
       
        let query = document.getElementById("textFindAval").value
        if(query!=0){
            let filters = filterItems(query)
            setAvalsFilters(filters)
            setFinding(true)
        }else{
            obtenerAvales()
        }
    }

    const reset = () => {
        setValues(initialState)
    }

    //funcion para crear nuevos avales
    const handleSubmit = async(e)=>{
        
        e.preventDefault()
        //values.codeAval = codeAval

        await axios.post(URL_API+'/avals', values)
        reset()
        obtenerAvales()
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
                        <h4>Gestión de Avales del Sistema</h4>
                        <span>Módulo para gestionar los avales registrados</span>
                    </div>
                    <div className="page-header-breadcrumb">
                        <ul className="breadcrumb-title">
                            <li className="breadcrumb-item">
                            <a href="index.html">
                                <i className="icofont icofont-user" />
                            </a>
                            </li>
                            <li className="breadcrumb-item">Módulo de Avales
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
                                <h3>{totalAvalsRegister}</h3>
                                <span className="m-t-10" style={{color:"white", fontSize:16}}>Avales Registrados</span>
                                <i className="icofont icofont-edit" style={{opacity:1}}  />
                            </div>
                            </div>
                        </div>
                        
                    </div>

                    
                    <div className="row">

                        {/* Facebook card start */}
                        <div className="col-md-6 col-xl-8">
                            <input onChange={handleFindAval} type="text" id="textFindCustomer" className="mt-3 form-control form-control-round" style={{borderRadius: "50px"}} placeholder="Buscar Aval ..."  />
                        </div>
                        {/* Facebook card end */}
                       
                       
                        {/* Linked in card start */}
                        <div className="col-sm-12 col-md-3 col-xl-2">
                            <button onClick={() => handleButtonFindAvals()} className="col-sm-12 mt-3 btn btn-primary  btn-round f-right d-inline-flex">
                                {<SearchIcon />} 
                                Buscar Aval  
                            </button>
                        </div>
                        {/* Linked in card end */}
                        {/* Google-plus card start */}
                        <div className=" col-sm-12 col-md-3 col-xl-2">
                            <button className="col-sm-12 mt-3 btn btn-success btn-round f-right d-inline-flex" data-toggle="modal" data-target="#modalNewAval">
                                {<AddCircleIcon />}     
                                Crear Nuevo Aval  
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

                                       avals?.map(aval => ( 

                                        <tr className={aval.active ? null : "desactivado"}  key={aval._id}>
                                            <th scope="row">1</th>
                                            <td> <Avatar alt="Remy Sharp" src="assets/images/avatar-4.png" /></td>
                                            <td>{aval.codeAval}</td>
                                            <td>{aval.personId.name}</td>
                                            <td>{aval.personId.lastname}</td>    
                                            <td>{aval.personId.identidad}</td>
                                            <td>{aval.personId.phone1}</td>
                                            <td><Link to ={`avales/expediente/${aval._id}`} className="btn btn-sm btn-success "> {<InfoIcon />}</Link></td>
                                            <td>
                                                {aval.active === true 
                                                    ? <button onClick={() => DesactivarAval(aval._id)} className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> 
                                                    : <button onClick={() =>ActivarAval(aval._id)} className="btn btn-sm btn-success"> {<CheckCircleOutlineIcon />}</button>
                                                }
                                            </td>
                                        </tr>
                                        )) 

                                        :

                                        avalsFilters?.map(aval => ( 

                                            <tr className={aval.active ? null : "desactivado"}  key={aval._id}>
                                                <th scope="row">1</th>
                                                <td> <Avatar alt="Remy Sharp" src="assets/images/avatar-4.png" /></td>
                                                <td>{aval.codeAval}</td>
                                                <td>{aval.personId.name}</td>
                                                <td>{aval.personId.lastname}</td>    
                                                <td>{aval.personId.identidad}</td>
                                                <td>{aval.personId.phone1}</td>
                                                <td><Link to ={`avales/expediente/${aval.personId._id}`} className="btn btn-sm btn-success "> {<InfoIcon />}</Link></td>
                                                <td>
                                                    {aval.active === true 
                                                        ? <button onClick={() => DesactivarAval(aval._id)} className="btn btn-sm btn-danger"> {<NotInterestedIcon />}</button> 
                                                        : <button onClick={() =>ActivarAval(aval._id)} className="btn btn-sm btn-success"> {<CheckCircleOutlineIcon />}</button>
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
                <div className="modal fade" id="modalNewAval" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Aval  <strong>Código: {parseInt(values.codeAval)} </strong></h5>
                            <button id="closeModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                             {/*<input value={codeAval} onChange={handleInputChange} name="codeAval" id="codeAval" type="hidden" />
                            <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
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

export default ListAvals
