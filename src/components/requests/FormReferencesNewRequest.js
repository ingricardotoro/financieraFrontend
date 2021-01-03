import React , { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';
import { URL_API } from '../../config/config';
import { useForm } from '../../hooks/useForm';


function FormReferencesNewRequest({DataRequest, setDataRequest) {

    const [value, setValue] = useState([])
    const [inputValue, setInputValue] = useState('')

    const [formValues, handleInputChange] = useForm({
        codeCustomer:'c-112',
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

    const [aval, setAval] = useState([])

    useEffect (() => {  
        obtenerClientes()
    }, [])
  
    const obtenerClientes = async()=>{
  
        const resp_customers = await Axios.get(URL_API +'/customers')
        setAval(resp_customers.data.customers)
    }

    const handleSubmit = ()=>{

    }
  
    return (
        <div className="container">
            
            <div className="row">

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="totalInteres">Referencia Personal</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input id="referecia1" className="form-control" name="referencia1" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Relación o Parentesco</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-link"></i> </span> 
                        <input id="relacion" className="form-control" name="relacion" type="text" placeholder="Relación o Parentesco" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Número de Teléfono</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i> </span> 
                        <input id="telefonoRef1" className="form-control" name="telefonoRef1" type="text" placeholder="Teléfono de Referencia" />
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="totalInteres">Referencia Familiar</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input id="referencia2" className="form-control" name="referencia2" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Relación o Parentesco</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-link"></i> </span> 
                        <input id="relacion" className="form-control" name="relacion" type="text" placeholder="Relación o Parentesco" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Número de Teléfono</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span> 
                        <input id="telefonoRef1" className="form-control" name="telefonoRef1" type="text" placeholder="Teléfono de Referencia" />
                    </div>
                </div>
    
            </div>

            <hr />

            <div className="row">

                <div className="col-sm-4 col-md-4">
                   
                    <p></p>
                    <Autocomplete
                        options={aval}
                        value={value}
                        getOptionLabel={(option) => option.name + option.lastname}
                        renderOption={(option) => (
                        <>
                            {option.name} {option.lastname}
                        </>
                        )}
                        onChange={(event, newValue) => {
                            if(newValue!==null){
                                //handleCustomSelect(event,newValue)
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
                            label="Buscar Aval"
                            margin="normal"
                            variant="outlined"
                            />                            
                        )}
                    />
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Identidad de Aval 1</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Teléfono de Aval 1</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                  
            </div>
           
            <hr />

            <div className="row">

                <div className="col-sm-4 col-md-4">
                   <p></p>
                
                    <Autocomplete
                        options={aval}
                        value={value}
                        getOptionLabel={(option) => option.name + option.lastname}
                        renderOption={(option) => (
                        <>
                            {option.name} {option.lastname}
                        </>
                        )}
                        onChange={(event, newValue) => {
                            if(newValue!==null){
                                //handleCustomSelect(event,newValue)
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
                            label="Buscar Aval"
                            margin="normal"
                            variant="outlined"
                            />                            
                        )}
                    />
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Identidad de Aval 2</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Teléfono de Aval 2</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                  
            </div>
            <hr />
            
            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <button className="btn btn-success" style={{width:"100%"}} data-toggle="modal" data-target="#modalNewAval">Registrar Nuevo Aval</button>
                </div>    
            </div>
            <hr />
            
           
            {/* Modal */}
            <div className="modal fade" id="modalNewAval" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Aval  <strong>Código: 01</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <input value={"C-110"} onChange={handleInputChange} name="codeCustomer" id="codeCustomer" type="hidden" />
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
    )
}

export default FormReferencesNewRequest