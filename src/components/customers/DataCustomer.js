import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import userLogo from '../../user.png'
import Axios from 'axios';
import { URL_API } from '../../config/config';
import { useForm } from '../../hooks/useForm';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: 'auto',
      //marginTop:'10px',
      marginBottom:'10px'

    },
  }));

function DataCustomer({idCustomer}) {

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

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [codeCustomer, setCodeCustomer] = useState('')
    const [identidad, setIdentidad] = useState('')
    const [rtn, setRtn] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [location, setLocation] = useState('')
    const [city, setCity] = useState('')
    const [profesion, setProfesion] = useState('')
    const [genero, setGenero] = useState('')
    const [personId, setPersonId] = useState('')

    const [fec_nac, setFec_nac] = useState(null)
    const [flatEdit, setFlatEdit] = useState(false)
    let fec =null
    const classes = useStyles();

    useEffect(() => {
       getCustomerById(idCustomer)
    }, [idCustomer])

    const getCustomerById = async(id)=>{

        const resp_customer = await Axios.post(URL_API+'/customers/findCustomerById/'+id)
        //setCustomer(resp_customer.data.customer)
        //console.log(resp_customer.data.customer.codeCustomer)
        setCodeCustomer(resp_customer.data.customer.codeCustomer)
        setName(resp_customer.data.customer.personId.name)
        setLastName(resp_customer.data.customer.personId.lastname)
        setIdentidad(resp_customer.data.customer.personId.identidad)
        setRtn(resp_customer.data.customer.personId.rtn)
        setPhone1(resp_customer.data.customer.personId.phone1)
        setPhone2(resp_customer.data.customer.personId.phone2)
        setEmail1(resp_customer.data.customer.personId.email1)
        setEmail2(resp_customer.data.customer.personId.email2)
        setLocation(resp_customer.data.customer.personId.location)
        setCity(resp_customer.data.customer.personId.city)
        setProfesion(resp_customer.data.customer.personId.profesion)
        setGenero(resp_customer.data.customer.personId.gender)
        setPersonId(resp_customer.data.customer.personId._id)

        fec = new Date(resp_customer.data.customer.personId.fec_nac)
        fec = moment(fec).add(1, 'days');
        fec = moment(fec).format('YYYY-MM-DD'); 
        setFec_nac(fec)
        
    }

    const handleActiveEdit =()=>{
        setFlatEdit(true)
    }

    const handleCancelEdit =()=>{
        setFlatEdit(false)
        getCustomerById(idCustomer)
    }



    const handleEditar = async(e)=>{

        e.preventDefault()
        const data = {
            name,
            lastname,
            identidad,
            gender:genero,
            rtn,
            fec_nac,
            phone1,
            phone2,
            email1,
            email2,
            profesion,
            city,
            location,
            personId
            //photo,
        }
        //console.log(data)
        await Axios.put(URL_API+'/customers/update/'+idCustomer, data)
        getCustomerById(idCustomer)
        setFlatEdit(false)
    }

    return (
        <div>
            {console.log("NAMe="+name)}
            <div className="row">
                <div className="col-sm-6 col-md-6">
                   
                    <Avatar alt={name}  className={classes.large}  src={userLogo} />
                   
                </div>
                <div className="col-sm-6 col-md-6">
                    <h4 className="f-left">Codigo:{codeCustomer} </h4>

                    {flatEdit===true?

                        <button onClick={handleEditar} className=" btn btn-success btn-round f-right d-inline-flex " >
                            {<SaveIcon />}     
                            Guardar  
                        </button>
                    :    <button onClick={handleActiveEdit} className=" btn btn-warning btn-round f-right d-inline-flex " >
                            {<EditIcon />}     
                        Editar Cliente  
                        </button>}


                    {flatEdit===true? 
                     <button onClick={handleCancelEdit} className=" btn btn-danger btn-round  f-right d-inline-flex " >
                        {<CancelIcon />}     
                        Cancel  
                    </button>
                    : null}
                </div>
                    
            </div>
            <div className="row">
                <input value={codeCustomer} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
                {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                        <input disabled={!flatEdit} value={name} onChange={(e)=>{setName(e.target.value)} } name="name" id="name" type="text" className="form-control" placeholder="Nombres de Cliente" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                        <input disabled={!flatEdit} value={lastname} onChange={(e)=>{setLastName(e.target.value)}} name="lastname" id="lastname" type="text" className="form-control" placeholder="Apellidos de Clientes"/>
                    </div>
                </div>
                
            </div>

                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                            <input disabled={!flatEdit} value={identidad} onChange={(e)=>{setIdentidad(e.target.value)}} name="identidad" id="identidad" type="text" className="form-control" placeholder="Identidad" />
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                            <input disabled={!flatEdit} value={rtn} onChange={(e)=>{setRtn(e.target.value)}} name="rtn" id="rtn" type="text" className="form-control" placeholder="RTN" />
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                            <input disabled={!flatEdit} value={phone1} onChange={(e)=>{setPhone1(e.target.value)}}  name="phone1" id="phone1" type="text" className="form-control" placeholder="Teléfono-1"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                            <input disabled={!flatEdit} value={phone2} onChange={(e)=>{setPhone2(e.target.value)}}  name="phone2" id="phone2" type="text" className="form-control" placeholder="Teléfono-2"/>
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input disabled={!flatEdit} value={email1} onChange={(e)=>{setEmail1(e.target.value)}}  name="email1" id="email1" type="text" className="form-control" placeholder="Email-1"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input disabled={!flatEdit} value={email2} onChange={(e)=>{setEmail2(e.target.value)}}  name="email2" id="email2" type="text" className="form-control" placeholder="Email-2" />
                        </div>
                    </div>
                    
                </div>

                        <hr />

                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-pin"></i></span>
                            <select disabled={!flatEdit} onChange={(e)=>{setCity(e.target.value)}}  name="city" id="city" className="form-control col-md-12"> 
    
                                <option value={city}>{city} </option>
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
                            <input disabled={!flatEdit} value={fec_nac}  onChange={(e)=>{setFec_nac(e.target.value)}}  name="fec_nac" id="fec_nac" className="form-control" type="date"/>
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-arrow"></i></span>
                            <textarea disabled={!flatEdit} value={location} onChange={(e)=>{setLocation(e.target.value)}}  name="location" id="location" className="form-control" rows="5" placeholder="Dirección completa"></textarea>  
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-fix-tools "></i></span>
                            <input disabled={!flatEdit} value={profesion} onChange={(e)=>{setProfesion(e.target.value)}}  name="profesion" id="profesion" type="text" className="form-control" placeholder="Profesión" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-group-students"></i></span>
                            <select disabled={!flatEdit} value={genero} onChange={(e)=>{setGenero(e.target.value)}}  name="gender" id="gender"  className="form-control col-md-12"> 
                                <option>{genero} </option>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </div>
                    </div>
            
                </div>
                        
        </div>
    )
}

export default DataCustomer
