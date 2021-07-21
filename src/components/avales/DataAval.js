import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
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

function DataAval({idAval}) {

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
    const [date, setDate] = useState(null)
    
    const classes = useStyles();

    useEffect(() => {
       getAvalById(idAval)
    }, [idAval])
    
    const getAvalById = async(idAval)=>{

        const resp_aval = await Axios.post(URL_API+'/avals/findAvalById/'+idAval)
        //setCustomer(resp_aval.data.customer)
        //console.log("AQUI="+JSON.stringify(resp_aval.data))
        setCodeCustomer(resp_aval.data.aval.codeAval)
        setName(resp_aval.data.aval.personId.name)
        setLastName(resp_aval.data.aval.personId.lastname)
        setIdentidad(resp_aval.data.aval.personId.identidad)
        setRtn(resp_aval.data.aval.personId.rtn)
        setPhone1(resp_aval.data.aval.personId.phone1)
        setPhone2(resp_aval.data.aval.personId.phone2)
        setEmail1(resp_aval.data.aval.personId.email1)
        setEmail2(resp_aval.data.aval.personId.email2)
        setLocation(resp_aval.data.aval.personId.location)
        setCity(resp_aval.data.aval.personId.city)
        setProfesion(resp_aval.data.aval.personId.profesion)
        setGenero(resp_aval.data.aval.personId.gender)

        let fec = new Date(resp_aval.data.aval.personId.fec_nac)
        setDate(fec.toLocaleDateString())
        
      
    }

    const handleInputChange =()=>{

    }

    //const codeCustomer = 1

    return (
        <div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="input-group" >
                        <Avatar alt="Remy Sharp" className={classes.large} src={userLogo} />
                    </div>
                </div>
            </div>
            <div className="row">
                <input value={codeCustomer} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
                {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                        <input disabled value={name} onChange={handleInputChange} name="name" id="name" type="text" className="form-control" placeholder="Nombres de Cliente" />
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                        <input disabled value={lastname} onChange={handleInputChange} name="lastname" id="lastname" type="text" className="form-control" placeholder="Apellidos de Clientes"/>
                    </div>
                </div>
                
            </div>

                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                            <input disabled value={identidad} onChange={handleInputChange} name="identidad" id="identidad" type="text" className="form-control" placeholder="Identidad" />
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                            <input disabled value={rtn} onChange={handleInputChange} name="rtn" id="rtn" type="text" className="form-control" placeholder="RTN" />
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                            <input disabled value={phone1} onChange={handleInputChange}  name="phone1" id="phone1" type="text" className="form-control" placeholder="Teléfono-1"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                            <input disabled value={phone2} onChange={handleInputChange}  name="phone2" id="phone2" type="text" className="form-control" placeholder="Teléfono-2"/>
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input disabled value={email1} onChange={handleInputChange}  name="email1" id="email1" type="text" className="form-control" placeholder="Email-1"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input disabled value={email2} onChange={handleInputChange}  name="email2" id="email2" type="text" className="form-control" placeholder="Email-2" />
                        </div>
                    </div>
                    
                </div>

                        <hr />

                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-pin"></i></span>
                            <select disabled onChange={handleInputChange}  name="city" id="city" className="form-control col-md-12"> 
                                <option value={city}>{city} </option>
                            </select>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i> Nacimiento</span>
                            <input disabled value="2020-02-02"  onChange={handleInputChange}  name="fec_nac" id="fec_nac" className="form-control" type="date"/>
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-arrow"></i></span>
                            <textarea disabled value={location} onChange={handleInputChange}  name="location" id="location" className="form-control" rows="5" placeholder="Dirección completa"></textarea>  
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-fix-tools "></i></span>
                            <input disabled value={profesion} onChange={handleInputChange}  name="profesion" id="profesion" type="text" className="form-control" placeholder="Profesión" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-group-students"></i></span>
                            <select disabled value={genero} onChange={handleInputChange}  name="gender" id="gender"  className="form-control col-md-12"> 
                                <option>{genero} </option>
                            </select>
                        </div>
                    </div>
            
                </div>
                        
        </div>
    )
}

export default DataAval
