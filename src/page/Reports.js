
import axios from 'axios'
import React, { useState } from 'react'
import { URL_API } from '../config/config'
import {saveAs} from 'file-saver' 

export const Reportes = () => {

    const [anio_Trim, setAnio_Trim] = useState(null)
    const [mes_Trim, setMes_Trim] = useState(null)

    const [anio_ingresos, setAnio_Ingresos] = useState(null)
    const [mes_ingresos, setMes_Ingresos] = useState(null)

    const [anio_colocados, setAnio_Colocados] = useState(null)
    const [mes_colocados, setMes_Colocados] = useState(null)

    const [anio_cancel, setAnio_Cancel] = useState(null)
    const [mes_cancel, setMes_Cancel] = useState(null)
    
    //Control de fechas de reportes trimestrales
    const Change_anio_Trim = ({ target }) => {setAnio_Trim(target.value)}
    const Change_mes_Trim = ({ target }) => {setMes_Trim(target.value)}

    //Control de fechas de reportes de ingresos
    const Change_anio_ingresos = ({ target }) => {setAnio_Ingresos(target.value)}
    const Change_mes_ingresos = ({ target }) => {setMes_Ingresos(target.value)}

    //Control de fechas de reportes de nuevos prestamos colocados
    const Change_anio_colocados = ({ target }) => {setAnio_Colocados(target.value)}
    const Change_mes_colocados = ({ target }) => {setMes_Colocados(target.value)}

    //Control de fechas de reportes de cancelados
    const Change_anio_cancel = ({ target }) => {setAnio_Cancel(target.value)}
    const Change_mes_cancel = ({ target }) => {setMes_Cancel(target.value)}

    const generarPDFTrim = async() =>{
       
        axios.post(URL_API+'/reports/report_trimestral', {anio_Trim,mes_Trim})

        .then(()=>axios.get(URL_API+'/reports/fetchReportTrimestral', {responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob, 'Reporte Trimestral.pdf')
        })
    }

    const generarPDFCancel = async() =>{
       
        axios.post(URL_API+'/reports/report_cancel', {anio_cancel,mes_cancel})

        .then(()=>axios.get(URL_API+'/reports/fetchReportCancel', {responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob, 'Reporte De Cancelados.pdf')
        })
    }

    const generarPDFIngresos = async() =>{
       
        axios.post(URL_API+'/reports/report_ingresos', {anio_ingresos,mes_ingresos})

        .then(()=>axios.get(URL_API+'/reports/fetchReportIngresos', {responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob, 'Reporte De Ingresos Mensuales.pdf')
        })
    }

    const generarPDFColocados = async() =>{
       
        axios.post(URL_API+'/reports/report_colocados', {anio_colocados,mes_colocados})

        .then(()=>axios.get(URL_API+'/reports/fetchReportColocados', {responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob, 'Reporte De Prestamos Colocados.pdf')
        })
    }

    const generarPDFMora = async() =>{
       
        axios.post(URL_API+'/reports/report_mora')

        .then(()=>axios.get(URL_API+'/reports/fetchReportMora', {responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob, 'Reporte Mora.pdf')
        })
    }


   return (
   <div className="pcoded-content">
       <div className="pcoded-inner-content">
           <div className="main-body">
               <div className="page-wrapper">
                   <div className="page-header mt-5">
                       <div className="page-header-title">
                           <h4>Módulo de Reportes</h4>
                           <span>Módulo para gestionar los Reportes</span>
                       </div>
                       <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <a href="/reportes">
                            <i className="icofont icofont-edit" />
                        </a>
                        </li>
                        <li className="breadcrumb-item"> Reportes
                        </li>
                        
                    </ul>
                </div>
                          
                   </div>
                       <div className="page-body">

                       <div className="card" style={{marginTop:'10px'}}>
                                <div className="card-header">
                                    <div className="row">
                                        <h5>Reportes Trimestral</h5>
                                    </div>
                                    <div class="card-block" style={{display:'flex'}} >
                                        <div class="sub-title"></div>
                                        <div className="col-sm-12 col-md-4">

                                    <h4 class="sub-title">Seleccione Año</h4>
                                            <select onChange={Change_anio_Trim} name="anio_trim" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Año</option>
                                                <option value="opt2">2018</option>
                                                <option value="opt3">2019</option>
                                                <option value="opt4">2020</option>
                                                <option value="opt5">2021</option>
                                                <option value="opt6">2022</option>
                                                <option value="opt7">2023</option>
                                                <option value="opt7">2024</option>
                                            </select>
                                    </div>
                                        <div className="col-sm-12 col-md-4">
                                            <h4 class="sub-title">Seleccione Trimestre</h4>
                                            <select onChange={Change_mes_Trim} name="mes_trim" class="form-control form-control-primary">
                                                    <option value="opt1">Selecciona Trimestre</option>
                                                    <option value="opt2">I-Trimestre (Enero-Febrero-Marzo)</option>
                                                    <option value="opt2">II-Trimestre (Abril-Mayo-Junio)</option>
                                                    <option value="opt2">III-Trimestre (Julio-Agosto-Septiembre)</option>
                                                    <option value="opt2">IV-Trimestre (Octubre-Noviembre-Diciembre)</option>
                                                </select>
                                        </div>
                                        {/*

                                            <span style={{color:'white'}} className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1 color-3"></i> Fecha Inicial</span>
                                            <input onChange={Change_anio_Trim}  name="fec_inicio" id="fec_inicio" className="form-control" type="date"/>
                                    
                                        
                                        <div className="col-sm-12 col-md-4">
                                        
                                            <span style={{color:'white'}} className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i> Fecha Final</span>
                                            <input onChange={Change_trim_final}  name="fec_final" id="fec_final" className="form-control" type="date"/>
                                    
                                        </div> */}
                                        <div className="col-sm-12 col-md-4">
                                            <h4 class="sub-title">Generar</h4>
                                        
                                            {
                                                anio_Trim === null || mes_Trim === null 
                                                ? 
                                                    <buttom disabled className="btn btn-lg btn-default">Generar Reporte</buttom>
                                                :
                                                <buttom className="btn btn-lg btn-success" onClick={()=> generarPDFTrim() }>Generar Reporte</buttom>

                                            }

                                        </div>
                                    </div> 
                                </div>
                            </div>{/* FINAL DEL DIV CARD */}

                        {/* Prestamos Cancelados */}
                        <div className="card">
                                <div className="card-header">

                              <div className="row">
                                    <h5>Prestamos Cancelados </h5>
                              </div>

                              <div class="card-block" style={{display:'flex'}} >
                                    <div class="sub-title"></div>
                                    <div className="col-sm-12 col-md-4">

                                    <h4 class="sub-title">Seleccione Año</h4>
                                            <select onChange={Change_anio_cancel} name="select" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Año</option>
                                                <option value="opt2">2018</option>
                                                <option value="opt3">2019</option>
                                                <option value="opt4">2020</option>
                                                <option value="opt5">2021</option>
                                                <option value="opt6">2022</option>
                                                <option value="opt7">2023</option>
                                                <option value="opt7">2024</option>
                                            </select>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                           
                                            <h4 class="sub-title">Seleccione Mes</h4>
                                            <select onChange={Change_mes_cancel} name="select" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Mes</option>
                                                <option value="opt2">Enero</option>
                                                <option value="opt3">Febrero</option>
                                                <option value="opt4">Marzo</option>
                                                <option value="opt5">Abril</option>
                                                <option value="opt6">Mayo</option>
                                                <option value="opt7">Junio</option>
                                                <option value="opt8">Julio</option>
                                                <option value="opt8">Agosto</option>
                                                <option value="opt8">Septiembre</option>
                                                <option value="opt8">Octubre</option>
                                                <option value="opt8">Noviembre</option>
                                                <option value="opt8">Diciembre</option>
                                            </select>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                    <h4 class="sub-title">Generar</h4>
                                      
                                      {
                                          anio_cancel === null || mes_cancel === null 
                                          ? 
                                            <buttom disabled className="btn btn-lg btn-default">Generar Reporte</buttom>
                                          :
                                          <buttom className="btn btn-lg btn-success" onClick={()=> generarPDFCancel() }>Generar Reporte</buttom>

                                      }

                                    </div>
                                    
                             </div> 
                            
                            </div>
                           </div>{/* FINAL DEL DIV CARD */}

                        
                        {/* Prestamos Ingresos Mensuales */}
                        <div className="card">
                                <div className="card-header">

                              <div className="row">
                                    <h5>Ingresos Mensuales </h5>
                              </div>

                              <div class="card-block" style={{display:'flex'}} >
                                    <div class="sub-title"></div>
                                    <div className="col-sm-12 col-md-4">

                                    <h4 class="sub-title">Seleccione Año</h4>
                                            <select onChange={Change_anio_ingresos} name="select" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Año</option>
                                                <option value="opt2">2018</option>
                                                <option value="opt3">2019</option>
                                                <option value="opt4">2020</option>
                                                <option value="opt5">2021</option>
                                                <option value="opt6">2022</option>
                                                <option value="opt7">2023</option>
                                                <option value="opt7">2024</option>
                                            </select>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                           
                                            <h4 class="sub-title">Seleccione Mes</h4>
                                            <select onChange={Change_mes_ingresos} name="select" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Mes</option>
                                                <option value="opt2">Enero</option>
                                                <option value="opt3">Febrero</option>
                                                <option value="opt4">Marzo</option>
                                                <option value="opt5">Abril</option>
                                                <option value="opt6">Mayo</option>
                                                <option value="opt7">Junio</option>
                                                <option value="opt8">Julio</option>
                                                <option value="opt8">Agosto</option>
                                                <option value="opt8">Septiembre</option>
                                                <option value="opt8">Octubre</option>
                                                <option value="opt8">Noviembre</option>
                                                <option value="opt8">Diciembre</option>
                                            </select>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                    <h4 class="sub-title">Generar</h4>
                                      
                                      {
                                          anio_ingresos === null || mes_ingresos === null 
                                          ? 
                                            <buttom disabled className="btn btn-lg btn-default">Generar Reporte</buttom>
                                          :
                                          <buttom className="btn btn-lg btn-success" onClick={()=> generarPDFIngresos() }>Generar Reporte</buttom>

                                      }

                                    </div>
                                    
                             </div> 
                            
                            </div>
                           </div>{/* FINAL DEL DIV CARD */}

                        
                        {/* Prestamos Prestamos Colocados */}
                        <div className="card">
                                <div className="card-header">

                              <div className="row">
                                    <h5>Reporte de Préstamos Colocados </h5>
                              </div>

                              <div class="card-block" style={{display:'flex'}} >
                                    <div class="sub-title"></div>
                                    <div className="col-sm-12 col-md-4">

                                    <h4 class="sub-title">Seleccione Año</h4>
                                            <select onChange={Change_anio_colocados} name="select" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Año</option>
                                                <option value="opt2">2018</option>
                                                <option value="opt3">2019</option>
                                                <option value="opt4">2020</option>
                                                <option value="opt5">2021</option>
                                                <option value="opt6">2022</option>
                                                <option value="opt7">2023</option>
                                                <option value="opt7">2024</option>
                                            </select>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                           
                                            <h4 class="sub-title">Seleccione Mes</h4>
                                            <select onChange={Change_mes_colocados} name="select" class="form-control form-control-primary">
                                                <option value="opt1">Selecciona Mes</option>
                                                <option value="opt2">Enero</option>
                                                <option value="opt3">Febrero</option>
                                                <option value="opt4">Marzo</option>
                                                <option value="opt5">Abril</option>
                                                <option value="opt6">Mayo</option>
                                                <option value="opt7">Junio</option>
                                                <option value="opt8">Julio</option>
                                                <option value="opt8">Agosto</option>
                                                <option value="opt8">Septiembre</option>
                                                <option value="opt8">Octubre</option>
                                                <option value="opt8">Noviembre</option>
                                                <option value="opt8">Diciembre</option>
                                            </select>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                    <h4 class="sub-title">Generar</h4>
                                      
                                      {
                                          anio_colocados === null || mes_colocados === null 
                                          ? 
                                            <buttom disabled className="btn btn-lg btn-default">Generar Reporte</buttom>
                                          :
                                          <buttom className="btn btn-lg btn-success" onClick={()=> generarPDFColocados() }>Generar Reporte</buttom>

                                      }

                                    </div>
                                    
                             </div> 
                            
                            </div>
                           </div>{/* FINAL DEL DIV CARD */}

                        
                       
                        {/* INFORME DE MORA */}
                        <div className="card">
                                <div className="card-header">

                              <div className="row">
                                    <h5>Reporte de Mora</h5>
                              </div>

                              <div class="card-block" style={{display:'flex'}} >
                                    <div class="sub-title"></div>
                                   {/*  <div className="col-sm-12 col-md-4">

                                        <span style={{color:'white'}} className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1 color-3"></i> Fecha Inicial</span>
                                        <input onChange={Change_mora_incio}  name="fec_inicio" id="fec_inicio" className="form-control" type="date"/>
                                
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                      
                                        <span style={{color:'white'}} className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i> Fecha Final</span>
                                        <input onChange={Change_mora_final}  name="fec_final" id="fec_final" className="form-control" type="date"/>
                                
                                    </div> */}
                                    {/* <div className="col-sm-12 col-md-4">
                                    <h4 class="sub-title">Generar</h4>
                                      
                                      {
                                          fec_mora_inicio === null || fec_mora_final === null 
                                          ? 
                                            <buttom disabled className="btn btn-lg btn-default">Generar Reporte</buttom>
                                          :
                                          <buttom  className="btn btn-lg btn-success" onClick={()=> generarPDFMora() } >Generar Reporte</buttom>

                                      }

                                    </div> */}
                                    <buttom  className="btn btn-lg btn-success" onClick={()=> generarPDFMora() } >Generar Reporte de Mora Actual</buttom>
                                    
                             </div> 
                            
                            </div>
                           </div>{/* FINAL DEL DIV CARD */}

                        
                        </div>{/* FINAL DEL page-body */}

               </div>
           </div>
       </div>
   </div>
   )
}

export default Reportes
