import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userLogo from '../../user.png'
import Axios from 'axios';
import { URL_API } from '../../config/config';

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
      marginTop:'10px'
    },
  }));


function FormCustomerNewRequest() {
    const classes = useStyles();
    const [data, setData] = useState({
        customers:[],
        value:'',
        inputValue:'',
        customValue:'',
        codeCustomer:'',
        identidad:'',
        rtn:'',
        fec_nac:'',
        phone1:'',
        phone2:'',
        email1:'',
        email2:'',
        city:'',
        location:''

    })

    const [customers, setCustomers] = useState([])
    const [value, setValue] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [customValue, setCustomValue] = useState('')

    const [codeCustomer, setCodeCustomer] = useState('')
    const [identidad, setIdentidad] = useState('')
    const [rtn, setRtn] = useState('')
    const [fec_nac, setFec_nac] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone2, setPhone2] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
 
  useEffect (() => {  
      obtenerClientes()
  }, [])

  const obtenerClientes = async()=>{
       
      const resp_customers = await Axios.get(URL_API +'/customers')   
      setCustomers(resp_customers.data.customers)
      setInputValue('') // para la inicializacion inicial del  autocomplete, es necesario
  }

  const handleCustomSelect = (event,newValue)=>{
        
        setValue(newValue);
        setCustomValue(newValue._id);
        setCodeCustomer(newValue.codeCustomer)
        setIdentidad(newValue.personId.identidad)
        setRtn(newValue.personId.rtn)
        setFec_nac(newValue.personId.fec_nac)
        setPhone1(newValue.personId.phone1)
        setPhone2(newValue.personId.phone2)
        setEmail1(newValue.personId.email1)
        setEmail2(newValue.personId.email2)
        setCity(newValue.personId.city)
        setLocation(newValue.personId.location)

  }

    return (
        
        <div className="container">

            <div className="row">

                <div className="col-sm-4 col-md-6">
                    <label htmlFor="free-solo-2-demo" className="block">Nombre de Cliente</label>
                <div >

                <Autocomplete

                    options={customers}
                    value={value}
                    getOptionLabel={(option) => option?.personId?.name + " " + option?.personId?.lastname }
                    renderOption={(option) => (
                    <>
                        {option?.personId?.name} - {option?.personId?.lastname}
                    </>
                    )}
                    onChange={(event, newValue) => {
                        if(newValue!==null){
                            handleCustomSelect(event,newValue)
                            }}
                        }
                        
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    
                    }}
                    renderInput={(params) => (
                        <TextField
                        style={{marginTop:"0px"}}
                        {...params}
                        label="Buscar Cliente"
                        margin="normal"
                        variant="outlined"
                        />                            
                    )}
                />
                  
                </div>
            </div>

                <div className="col-sm-4 col-md-6">
                    <label htmlFor="codeCustomer" className="block">Código de Cliente</label>
                <div >
                    <input value={codeCustomer} disabled name="codeCustomer" type="text" id="codeCustomer" className="required form-control" />
                </div>
            </div>

            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group" >
                        <Avatar alt="Remy Sharp" className={classes.large} src={userLogo} />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-arrow"></i></span>
                    <textarea value={location} disabled  name="location" id="location" className="form-control" rows="5" placeholder="Dirección del cliente"></textarea>  
                    </div>
                </div>

            </div>
            
            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Id</span>
                        <input value={identidad} disabled  name="identidad" id="identidad" type="text" className="form-control" placeholder="Número de Identidad" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">RTN</span>
                            <input value={rtn} disabled  name="rtn" id="rtn" type="text" className="form-control" placeholder="Número de RTN"/>
                        </div>
                </div>
            
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                        <input value={phone1} disabled  name="phone1" id="phone1" type="text" className="form-control" placeholder="Número de Teléfono 1" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                        <input value={phone2} disabled  name="phone2" id="phone2" type="text" className="form-control" placeholder="Número de Teléfono 2"/>
                    </div>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input value={email1} disabled  name="email1" id="email1" type="email" className="form-control" placeholder="Correo eletrónico 1" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input value={email2} disabled  name="email2" id="email2" type="email" className="form-control" placeholder="Correo electrónico 2"/>
                    </div>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-pin"></i></span>
                        <input value={city} disabled  name="city" id="city" type="text" className="form-control" placeholder="Localidad del Cliente" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                        <input value={fec_nac} disabled  name="fec_nac" id="fec_nac" type="text" className="form-control" placeholder="Fecha de Nacimiento"/>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default FormCustomerNewRequest
