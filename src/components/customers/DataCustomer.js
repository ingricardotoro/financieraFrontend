import { Avatar } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import userLogo from '../../user.png'

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

function DataCustomer() {
    const classes = useStyles();


    const handleInputChange =()=>{

    }

    const codeCustomer = 1

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
                        
        </div>
    )
}

export default DataCustomer
