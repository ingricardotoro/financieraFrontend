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


function FormCustomerNewRequest({setDataRequest,DataRequest,ErrorCustomer,setErrorCustomer}) {

    const classes = useStyles();
    const [customers, setCustomers] = useState([])
    const [inputValue, setInputValue] = useState('')
   
    const [data, setData] = useState({
        value:'',
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
 
    const [data2, setData2] = useState('')
  useEffect (() => {  
      obtenerClientes()
  }, [])

  const obtenerClientes = async()=>{
       
      const resp_customers = await Axios.get(URL_API +'/customers')   
      setCustomers(resp_customers.data.customers)
      setInputValue('') // para la inicializacion inicial del  autocomplete, es necesario
      const resp_lastCode = await Axios.post(URL_API +'/requests/lastcode')   
      console.log(resp_lastCode.data.lastCode)
      setData2(resp_lastCode.data.lastCode+1)
  }

  const handleCustomSelect = (event,newValue)=>{

    setData({
        
        value:newValue,
        customValue:newValue._id,
        codeCustomer:newValue.codeCustomer,
        identidad:newValue.personId.identidad,
        rtn:newValue.personId.rtn,
        fec_nac:newValue.personId.fec_nac,
        phone1:newValue.personId.phone1,
        phone2:newValue.personId.phone2,
        email1:newValue.personId.email1,
        email2:newValue.personId.email2,
        city:newValue.personId.city,
        location:newValue.personId.location
    })

    setDataRequest({
        ...DataRequest,
        customerId:newValue._id
    })

    setErrorCustomer(false)

  }

    return (
        
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-6">
                    <label htmlFor="free-solo-2-demo" className="block">Nombre de Cliente</label>
                <div >

                <Autocomplete

                    options={customers}
                    value={data.value}
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

                {ErrorCustomer===true ? 
                    <div class="alert alert-danger" role="alert">
                        *El Cliente es Requerido
                    </div>
                : null}
                  
                </div>
            </div>

                <div className="col-sm-4 col-md-3">
                    <label htmlFor="codeRequest" className="block">Código de Solicitud</label>
                     <div >
                        <input value={data2} disabled name="codeRequest" type="text" id="codeRequest" className="required form-control" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-3">
                    <label htmlFor="codeCustomer" className="block">Código de Cliente</label>
                     <div >
                        <input value={data.codeCustomer} disabled name="codeCustomer" type="text" id="codeCustomer" className="required form-control" />
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
                    <textarea value={data.location} disabled  name="location" id="location" className="form-control" rows="5" placeholder="Dirección del cliente"></textarea>  
                    </div>
                </div>

            </div>
            
            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Id</span>
                        <input value={data.identidad} disabled  name="identidad" id="identidad" type="text" className="form-control" placeholder="Número de Identidad" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">RTN</span>
                            <input value={data.rtn} disabled  name="rtn" id="rtn" type="text" className="form-control" placeholder="Número de RTN"/>
                        </div>
                </div>
            
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                        <input value={data.phone1} disabled  name="phone1" id="phone1" type="text" className="form-control" placeholder="Número de Teléfono 1" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                        <input value={data.phone2} disabled  name="phone2" id="phone2" type="text" className="form-control" placeholder="Número de Teléfono 2"/>
                    </div>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input value={data.email1} disabled  name="email1" id="email1" type="email" className="form-control" placeholder="Correo eletrónico 1" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input value={data.email2} disabled  name="email2" id="email2" type="email" className="form-control" placeholder="Correo electrónico 2"/>
                    </div>
                </div>
                
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-pin"></i></span>
                        <input value={data.city} disabled  name="city" id="city" type="text" className="form-control" placeholder="Localidad del Cliente" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                        <input value={data.fec_nac} disabled  name="fec_nac" id="fec_nac" type="text" className="form-control" placeholder="Fecha de Nacimiento"/>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

export default FormCustomerNewRequest
