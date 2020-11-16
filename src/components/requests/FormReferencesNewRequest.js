import React , { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';
import { URL_API } from '../../config/config';


function FormReferencesNewRequest() {

    const [value, setValue] = useState([])
    const [inputValue, setInputValue] = useState('')

    const [aval, setAval] = useState([])


    useEffect (() => {  
        obtenerClientes()
    }, [])
  
    const obtenerClientes = async()=>{
  
        const resp_customers = await Axios.get(URL_API +'/customers')
        setAval(resp_customers.data.customers)
    }
  

    return (
        <div className="container">
            
            <div className="row">

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="totalInteres">Referencia Personal</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                        <input id="referecia1" className="form-control" name="referencia1" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Relación o Parentesco</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-link"></i> </span> 
                        <input id="relacion" className="form-control" name="relacion" type="text" placeholder="Relación o Parentesco" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Número de Teléfono</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i> </span> 
                        <input id="telefonoRef1" className="form-control" name="telefonoRef1" type="text" placeholder="Teléfono de Referencia" />
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="totalInteres">Referencia Familiar</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                        <input id="referencia2" className="form-control" name="referencia2" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Relación o Parentesco</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-link"></i> </span> 
                        <input id="relacion" className="form-control" name="relacion" type="text" placeholder="Relación o Parentesco" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Número de Teléfono</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-iphone"></i></span> 
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
                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Teléfono de Aval 1</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
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
                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Teléfono de Aval 2</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-user"></i></span>
                        <input disabled id="codeAval" className="form-control" name="codeAval" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                  
            </div>
            <hr />
            
            <div className="row">
                <div className="col-sm-4 col-md-4">
                    <button className="btn btn-success" style={{width:"100%"}}>Registrar Nuevo Aval</button>
                </div>    
            </div>
            <hr />
            
           
        </div>
    )
}

export default FormReferencesNewRequest