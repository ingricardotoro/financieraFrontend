import React , { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';
import { URL_API } from '../../config/config';

function FormReferencesNewRequest({DataRequest, setDataRequest}) {

    const [data, setData] = useState({
        value1:0,
        value2:0,
        NameAval1:'',
        NameAval2:'',
        PhoneAval1:'',
        PhoneAval2:''
    })
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')

    const [DataNewAval, setDataNewAval] = useState([])
    const [LastAval, setLastAval] = useState(0)

    const [avals, setAvals] = useState([])

    useEffect (() => {  
        obtenerAvales()
    }, [])
  
    const obtenerAvales = async()=>{
  
       await Axios.get(URL_API +'/avals').then((data)=>{
            setAvals(data.data.avals)
        })

        //const resp_lastCode = await Axios.get(URL_API +'/avals/lastCode')   
        await Axios.get(URL_API +'/avals/lastCode').then((res)=>{
            console.log("res="+JSON.stringify(res.data.LastCode[0]))
            if(res.data.LastCode[0]===undefined){setLastAval(1)}
            else{setLastAval(parseInt(res.data.LastCode[0])+1)}
        })  
        //console.log("Num"+resp_lastCode.data.lastCode)
        //setLastAval(parseInt(resp_lastCode.data.lastCode)+1)
        
    }

    const handleInputChange = ({ target }) => {

        setDataRequest({
            ...DataRequest,
            [target.name]: target.value
        })
       
    }

    const handleNewAval = ({ target }) => {

        setDataNewAval({
            ...DataNewAval,
           codeAval: 'A'+LastAval,  
           numAval: LastAval,  
            [target.name]: target.value
        })
       
    }

    
    //funcion para crear nuevos avales
    const handleSubmit = async(e)=>{
        
        e.preventDefault()
    
        await Axios.post(URL_API+'/avals', DataNewAval)
        reset()
        obtenerAvales()
        document.getElementById("closeModal").click();

    } 

    const reset = () => {
        setDataRequest([])
    }

    const handleCustomSelect1 = (event,newValue)=>{
      
        setData({
            ...data,
            value1:newValue,
            NameAval1:newValue.personId.name +" "+ newValue.personId.lastname,
            PhoneAval1:newValue.personId.phone1
        })
    
        setDataRequest({
            ...DataRequest,
            aval1Id:newValue._id
        })

      }

      const handleCustomSelect2 = (event,newValue)=>{
       
        setData({
            ...data,
            value2:newValue,
            NameAval2:newValue.personId.name +" "+ newValue.personId.lastname,
            PhoneAval2:newValue.personId.phone1
        })
    
        setDataRequest({
            ...DataRequest,
            aval2Id:newValue._id
        })

      }
  
    return (
        <div className="container">
           
            <div className="row">

                <div className="col-sm-12 col-md-4">
                    <label htmlFor="totalInteres">Referencia Personal</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input onChange={handleInputChange}  value={DataRequest.refName1} id="refName1" className="form-control" name="refName1" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Relación o Parentesco</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-link"></i> </span> 
                        <input onChange={handleInputChange} value={DataRequest.refRelation1} id="refRelation1" className="form-control" name="refRelation1" type="text" placeholder="Relación o Parentesco" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Número de Teléfono</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i> </span> 
                        <input onChange={handleInputChange} value={DataRequest.refPhone1} id="refPhone1" className="form-control" name="refPhone1" type="text" placeholder="Teléfono de Referencia" />
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <label htmlFor="totalInteres">Referencia Familiar</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input onChange={handleInputChange} value={DataRequest.refName2} id="refName2" className="form-control" name="refName2" type="text" placeholder="Nombre de Referencia" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Relación o Parentesco</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-link"></i> </span> 
                        <input onChange={handleInputChange} value={DataRequest.refRelation2} id="refRelation2" className="form-control" name="refRelation2" type="text" placeholder="Relación o Parentesco" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                <label htmlFor="totalInteres">Número de Teléfono</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span> 
                        <input onChange={handleInputChange} value={DataRequest.refPhone2} id="refPhone2" className="form-control" name="refPhone2" type="text" placeholder="Teléfono de Referencia" />
                    </div>
                </div>
    
            </div>

            <hr />

            <div className="row">

                <div className="col-sm-4 col-md-4">
                   
                    <p></p>
                   
                    {avals?.length>0 ?
                    <Autocomplete
                        options={avals}
                        value={data.value1}
                        getOptionLabel={(option) => option?.personId?.name  +  option?.personId?.lastname}
                        renderOption={(option) => (
                        <>
                            {option.personId?.name} - {option.personId?.lastname}
                        </>
                        )}
                        onChange={(event, newValue) => {
                            if(newValue!==null){
                                handleCustomSelect1(event,newValue)
                                }}
                            }
                            
                        inputValue={inputValue1}
                        onInputChange={(event, newInputValue) => {
                        setInputValue1(newInputValue);
                        
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
                    :<p>No hay Avales Registrados</p>
                    }
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Nombre de Aval 1</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input value={data.NameAval1} disabled id="NameAval1"  name="NameAval1" className="form-control" type="text" placeholder="Nombre de Aval 1" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Teléfono de Aval 1</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input value={data.PhoneAval1}  disabled id="PhoneAval1" className="form-control" name="PhoneAval1" type="text" placeholder="Telefono de Aval 1" />
                    </div>
                </div>
                  
            </div>
           
            <hr />

            <div className="row">

                <div className="col-sm-4 col-md-4">
                   <p></p>
                   {avals?.length>0 ?
                    <Autocomplete
                        options={avals}
                        value={data.value2}
                        getOptionLabel={(option) => option.personId?.name + option.personId?.lastname}
                        renderOption={(option) => (
                        <>
                            {option.personId?.name} {option.personId?.lastname}
                        </>
                        )}
                        onChange={(event, newValue) => {
                            if(newValue!==null){
                                handleCustomSelect2(event,newValue)
                                }}
                            }
                            
                        inputValue={inputValue2}
                        onInputChange={(event, newInputValue) => {
                        setInputValue2(newInputValue);
                        
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
                    :<p>No hay Avales Registrados</p>
                    }
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Identidad de Aval 2</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input value={data.NameAval2} disabled id="NameAval2"  name="NameAval2"  className="form-control"  type="text" placeholder="Nombre de Aval 2" />
                    </div>
                </div>

                <div className="col-sm-4 col-md-4">
                    <label htmlfor="free-solo-2-demo" className="block">Teléfono de Aval 2</label>
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-user"></i></span>
                        <input value={data.PhoneAval2}  disabled id="PhoneAval2" className="form-control" name="PhoneAval2" type="text" placeholder="Telefono de Aval 2" />
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
                        <h5 className="modal-title" id="exampleModalLabel">Crear Nuevo Aval  <strong>Código: {'A'+LastAval}</strong></h5>
                        <button type="button" id="closeModal" name="closeModal" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                         <form >
                            <div className="row">
                            <input value={'A'+LastAval} name="codeAval" id="codeAval" type="hidden" />
                            <input value={LastAval} name="numAval" id="numAval" type="hidden" />
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleNewAval} name="name" id="name" type="text" className="form-control" placeholder="Ingrese Nombres" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleNewAval} name="lastname" id="lastname" type="text" className="form-control" placeholder="Ingrese Apellidos"/>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleNewAval} name="identidad" id="identidad" type="text" className="form-control" placeholder="Identidad: 0801199916151" />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                                    <input onChange={handleNewAval} name="rtn" id="rtn" type="text" className="form-control" placeholder="RTN. 08011999161512" />
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                                    <input onChange={handleNewAval}  name="phone1" id="phone1" type="text" className="form-control" placeholder="Teléfono-1"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-iphone"></i></span>
                                    <input onChange={handleNewAval}  name="phone2" id="phone2" type="text" className="form-control" placeholder="Teléfono-2"/>
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">@</span>
                                    <input onChange={handleNewAval}  name="email1" id="email1" type="text" className="form-control" placeholder="Email-1"/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">@</span>
                                    <input onChange={handleNewAval}  name="email2" id="email2" type="text" className="form-control" placeholder="Email-2" />
                                </div>
                            </div>
                            
                        </div>

                        <hr />

                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-pin"></i></span>
                                    <select onChange={handleNewAval}  name="city" id="city" className="form-control col-md-12"> 
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
                                    <input onChange={handleNewAval}  name="fec_nac" id="fec_nac" className="form-control" type="date"/>
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-location-arrow"></i></span>
                                    <textarea onChange={handleNewAval}  name="location" id="location" className="form-control" rows="5" placeholder="Dirección completa"></textarea>  
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-fix-tools "></i></span>
                                    <input onChange={handleNewAval}  name="profesion" id="profesion" type="text" className="form-control" placeholder="Profesión" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-group-students"></i></span>
                                    <select onChange={handleNewAval}  name="gender" id="gender"  className="form-control col-md-12"> 
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
                                    <input onChange={handleNewAval}  name="photo" id="photo" type="file" className="form-control"></input>
                                </div>
                            </div>

                
                        </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Guardar</button>
                    </div>
                    
                    </div>
                    </div>
                </div>
            {/* END Modal */}

        </div>
    )
}

export default FormReferencesNewRequest