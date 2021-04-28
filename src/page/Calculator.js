import React, { useState } from 'react'
import TablaAmortizacionNC from './TablaAmortizacionNC'
import TablaAmortizacionVC from './TablaAmortizacionVC';

import {saveAs} from 'file-saver' 
import Axios from 'axios';
import { URL_API } from '../config/config';

 export const Calculator = () => {

    let today =new Date();
    let day = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();
    if(day < 10 ){ day= '0'+day}
    if(month < 10){ month = '0'+month}
    today  = year + '-' + month + '-' + day;
    

    const [data, setData] = useState({
        quota:0,
        quotaValue:0,
        totalInterest:0,
        amount:0,
        rate:10,
        typeLoan:'Solidario',
        frequency:'Semanal',
        tipotasa:'Mensual',
        tipoInteres:'Compuesto',
        closingCostVar:0,
        TasaM:0,
        totalAmount:0,
        datestart:today
    })

    const [Error, setError] = useState(false)
    const [TipoCalculo, setTipoCalculo] = useState('NumeroDeCuotas') //o por ValordeCuotas
    const [tablaAmortizacionNC, setTablaAmortizacionNC] = useState(false)
    const [tablaAmortizacionVC, setTablaAmortizacionVC] = useState(false)
    const [descargar, setdescargar] = useState(false)
   
    const {quota,quotaValue,rate,typeLoan,totalInterest,amount,frequency,tipotasa,tipoInteres,closingCostVar,totalAmount,datestart} = data

    const calcular=()=>{

        ValidarCampos() 
       /****************************************************** */
        if(tipoInteres==='Compuesto'){
            if(Error===false){
                CalcularCutoasInteresCompuesto()
            }
        }else if(tipoInteres==='Simple'){
            //CalcularCutoasInteresSimple
        }else if(tipoInteres==='Nivelado'){
            //CalcularCutoasInteresNivelado
        }
        /****************************************************** */
      
    }

    const ValidarCampos = ()=>{

         //********Validar Campos Requeridos************//
         if(amount === 0 || amount==='') {
            setError(true)
            setdescargar(false)
            setTablaAmortizacionNC(false)
            setTablaAmortizacionVC(false)
            return
        }else if( (quotaValue===0 || quotaValue==='' || parseFloat(quotaValue)<100) && (quota===0 || quota==='') ){
            setError(true)
            setdescargar(false)
            setTablaAmortizacionNC(false)
            setTablaAmortizacionVC(false)
            return
        }else{
            setError(false)
            setdescargar(true)
        }
    }

    const CalcularCutoasInteresCompuesto =()=>{

        let CapitalInicial = 0.0
        let Interes =0.0
        let CapitalFinal=0.0
        let SumadeInteres=0.0
        let periodos=0

        let tasa =0
        if(tipotasa==='Mensual'){
        tasa=parseInt(rate)/100
        }else if(tipotasa==='Anual'){
            tasa=(parseInt(rate)/12)/100
        }

        //En caso de tener el numero de cuotas
        if(TipoCalculo==='NumeroDeCuotas'){

            let Close=0.0

            if(frequency==='Mensual'){ 
                periodos=parseInt(quota) 
            }else if(frequency==='Quincenal'){
                periodos=parseInt(quota) /2
            }else if(frequency==='Semanal'){
                periodos=parseInt(quota) /4
            }   

            
            if(parseFloat(amount)>=5000){
                CapitalInicial = parseFloat(amount) + (parseFloat(amount)*0.04)
            }else{
                CapitalInicial = parseFloat(amount) + 200
            }

            for (let i = 0; i < periodos; i++) {
                
                Interes = CapitalInicial * tasa
                CapitalFinal = CapitalInicial + Interes
                SumadeInteres+=Interes
                CapitalInicial = CapitalFinal

            }

            //Calculo del costo de Cierre
            if(parseFloat(amount)>=5000){
                Close=+parseFloat(amount)*0.04
            }else{
                Close=200
            }

            setData({
                ...data,
                closingCostVar:(Close).toFixed(2),
                totalInterest:SumadeInteres.toFixed(2),
                totalAmount:(parseFloat(amount)+parseFloat(SumadeInteres)+Close).toFixed(2),
                quotaValue:((parseFloat(amount)+parseFloat(SumadeInteres)+Close)/quota).toFixed(2)
            })

            //Mostramos la tabla de amortizacion por numero de cuotas
            if(Error===true){
                setTablaAmortizacionNC(false)
            }else{
                setTablaAmortizacionNC(true)
                setTablaAmortizacionVC(false)
            }
            
        }// Fin de Calculo Por Numero de Cuotas

        //En el caso de tener el valor de la cuota en lugar del numero de cuotas
        if(TipoCalculo==='ValorDeCuotas'){

            let contador = 0
        
            if(frequency==='Semanal'){contador=4}
            if(frequency==='Quincenal'){contador=2}
            if(frequency==='Mensual'){contador=1}

            let CapitalInicial = 0.0 
            let Capitalfinal=0.0
            let InteresSemanal = 0.0
            let AbonoCapital = 0.0
            let SaldoFinal = 0.0 
            let TotaldeInteres =0.0
            let TotalAbonoCapital=0.0
            let Close=0.0 //Para guardar el valor a prestar mas el costo de cierre
            let cuota=0
            let SaldoInicial=0.0

            if(parseFloat(amount)>=5000){
                CapitalInicial=parseFloat(amount) + (parseFloat(amount)*0.04) 
                Close=parseFloat(amount)*0.04
                SaldoInicial=CapitalInicial
                SaldoFinal=CapitalInicial //Solo para que el while de inicio debe ser distinto de 0
                
            }else{
                CapitalInicial = parseFloat(amount) + 200 
                Close=  200
                SaldoInicial=CapitalInicial
                SaldoFinal=CapitalInicial //Solo para que el while de inicio debe ser distinto de 0

            }

            while (SaldoFinal>0) {
                
                Capitalfinal = CapitalInicial + (CapitalInicial*tasa)
                //obtenemos el interes de este primer periodo
                InteresSemanal = (CapitalInicial * tasa)/4
            
                for (let i = 0; i < contador; i++) {

                    if(SaldoInicial!==0){

                        //Verificar si hemos llegado a la Penultima cuota
                        if(SaldoFinal+InteresSemanal < parseFloat(quotaValue)){
                            TotaldeInteres+=InteresSemanal
                            AbonoCapital = SaldoFinal
                            TotalAbonoCapital+=AbonoCapital
                            SaldoFinal = SaldoInicial - AbonoCapital
                            SaldoInicial= SaldoFinal
                            cuota+=1
                            
                        }else{
                            TotaldeInteres+=InteresSemanal
                            AbonoCapital = parseFloat(quotaValue) - InteresSemanal
                            TotalAbonoCapital+=AbonoCapital
                            SaldoFinal = SaldoInicial - AbonoCapital
                            SaldoInicial= SaldoFinal
                            cuota+=1
                        }
                        
                    }
                    console.table((SaldoInicial).toFixed(2),(InteresSemanal).toFixed(2),(quotaValue),(AbonoCapital).toFixed(2),(SaldoFinal).toFixed(2),(Capitalfinal).toFixed(2))
                }

                CapitalInicial = Capitalfinal
                
            }

            //console.log("ABONOC=",AbonoCapital)
                
            setData({
                ...data,
                closingCostVar:parseFloat(Close).toFixed(2),
                totalInterest:TotaldeInteres.toFixed(2),
                totalAmount:(parseFloat(amount)+parseFloat(TotaldeInteres)+parseFloat(Close)).toFixed(2),
                quota:cuota,
                //quotaValue:((parseFloat(CP)+parseFloat(TotaldeInteres)+parseFloat(amount)*0.04)/quota).toFixed(2)
            })

            //Mostramos la tabla de amortizacion por numero de cuotas
            if(Error===true){
                setTablaAmortizacionVC(false)
            }else{
                setTablaAmortizacionVC(true)
                setTablaAmortizacionNC(false)
            }

        }

    }

    const handleInputChange = ({ target }) => {

        //Definimos el tipo de Calculo a realizar
        if(target.name==='quotaValue'){
            setTipoCalculo('ValorDeCuotas')

            setData({
                ...data,
                [target.name]: target.value,
                quota: 0
            })

            
        }else if (target.name==='quota'){
            setTipoCalculo('NumeroDeCuotas')

            setData({
                ...data,
                [target.name]: target.value,
                quotaValue: 0
            })
            
        }else{
            //para cualquier otro valor que no sea cuota y valor de cuota
            setData({
                ...data,
                [target.name]: target.value
            })
            
        }

        
       
    }

    const handleSelect = ({target}) =>{
       
        setData({
            ...data,
            [target.name]: target.value
        })

    }

    const generarPDF = async() =>{
       
        Axios.post(URL_API+'/reports/reportCalculator', data)

        .then(()=>Axios.get(URL_API+'/reports/fetchReportCalculator', {responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob, 'newPDF.pdf')
        })
    }

    return (
    <div className="pcoded-content">
        <div className="pcoded-inner-content">
            <div className="main-body">
                <div className="page-wrapper">
                    <div className="page-header mt-5">
                        <div className="page-header-title">
                            <h4>Calculadora de Préstamos</h4>
                        </div>
                           
                    </div>
                        <div className="page-body">
                            {/* Basic table card start */}
                            <div className="card">
                            <div className="card-header">

                                <div className="row">
                                   <div className="col-sm-12 col-md-3">
                                        <label htmlFor="monto">Tipo de Préstamo</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <select value={typeLoan} onChange={handleInputChange} name="typeLoan" id="typeLoan" className="form-control col-md-12"> 
                                                <option selected value="Solidario">Solidario</option>
                                                <option value="Fiduciario">Fiduciario</option>
                                                <option value="Prendario">Prendario</option>
                                                <option value="Hipotecario">Hipotecario</option>
                                                <option value="Mixto">Mixto</option>
                                            </select>
                                        </div>
                                    </div> 

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="monto">Monto Solicitado</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">LPS.</p>
                                            <input value={amount} onChange={handleInputChange} id="amount"  min="0" name="amount" type="number" className="form-control" placeholder="Ingresar el Monto" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-2">
                                        <label htmlFor="frecuency">Tipo de Tasa</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-hour-glass"></i></p>
                                            <select onChange={handleSelect} name="tipotasa" id="tipotasa"  className="form-control col-md-12"> 
                                                <option selected value="Mensual">Mensual</option>
                                                <option value="Anual">Anual</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-2">
                                        <label htmlFor="rate">Valor de la Tasa</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">%</p>
                                            <input value={rate} onChange={handleInputChange} name="rate"  min="0" max="100"  id="rate" type="number" className="form-control" placeholder="Tasa de Interes en %" />
                                        </div>         
                                    </div>

                                    <div className="col-sm-12 col-md-2">
                                        <label htmlFor="frecuency">Tipo de Interes</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-hour-glass"></i></p>
                                            <select onChange={handleSelect} name="tipoInteres" id="tipoInteres"  className="form-control col-md-12"> 
                                                <option selected value="Compuesto">Compuesto</option>
                                                <option value="Simple">Simple</option>
                                                <option value="Nivelado">Nivelado</option>
                                            </select>
                                        </div>
                                    </div>


                                </div>


                                <div className="row">
                                   
                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="frecuency">Frecuencia de Pago</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-hour-glass"></i></p>
                                            <select onChange={handleSelect} name="frequency" id="frequency"  className="form-control col-md-12"> 
                                                <option selected value="Semanal">Semanal</option>
                                                <option value="Quincenal">Quincenal</option>
                                                <option value="Mensual">Mensual</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="dateInicio">Número de Cuotas</label> 
                                        <div className="input-group">
                                            <p className="input-group-addon"  id="basic-addon1"><i className="icofont icofont-listing-number"></i></p>
                                            <input  value={quota} min="0" onChange={handleInputChange} name="quota" id="quota" type="number" className="form-control" placeholder="Número de Cuotas"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="dateInicio">Valor de cada cuota</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input value={quotaValue} onChange={handleInputChange} name="quotaValue" id="quotaValue" type="number" min="0" className="form-control" placeholder="Valor de Cada Couta" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="datestart">Fecha de Primera Cuota</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input value={datestart} onChange={handleInputChange} name="datestart" id="datestart" type="date" className="form-control" />
                                        </div>
                                       
                                    </div>
                                    
                                </div>


                                <hr />

                                <div className="row">

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="dateInicio">Calcular Préstamo</label>
                                            <div className="input-group">
                                                <button onClick={()=> calcular() } id="btnCalcular" className="btn btn-success width-100">CALCULAR</button>
                                                {descargar=== true 
                                                ? <button onClick={()=> generarPDF() } id="btnDescargar" className="btn btn-primary width-20"><i class="icofont icofont-download"></i></button>
                                                : <button disabled onClick={()=> generarPDF() } id="btnDescargar" className="btn btn-primary width-20"><i class="icofont icofont-download"></i></button>
                                                
                                                }
                                            </div>
                                            {Error===true ? 
                                                <div class="alert alert-danger" role="alert">
                                                Faltan Algunos Datos
                                                </div>
                                            : null}
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInterest">Total de Interes</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input value={totalInterest} disabled onChange={handleInputChange} name="totalInterest" id="totalInterest" type="text" className="form-control" placeholder="Total de Interes" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInteres">Costo de Cierre</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input disabled value={closingCostVar} className="form-control"  name="closingCost" id="closingCost" type="text" placeholder="Costo de Cierre 4%" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInteres">Monto total a Pagar</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input disabled value={totalAmount} className="form-control" onChange={handleInputChange} name="totalAmount" id="totalAmount" type="text" placeholder="Monto Total a Pagar" />
                                        </div>
                                    </div>
                                    
                                </div>    

                                <div className="table-responsive">
                                                       
                                {
                                    (tablaAmortizacionNC === true && Error===false && parseInt(quota)>0) && 
                                    <TablaAmortizacionNC 
                                        CapitalInicial={amount}
                                        Tasa={rate}
                                        TipoTasa={tipotasa}
                                        Quotas={quota}
                                        TipoInteres={tipoInteres}
                                        Frequency={frequency}
                                        DateStart={datestart}
                                        
                                    />
                                }
                                { 
                                      (tablaAmortizacionVC === true && Error===false && parseFloat(quotaValue)>100) && 
                                    <TablaAmortizacionVC 
                                    CapitalInicial={amount}
                                    Tasa={rate}
                                    TipoTasa={tipotasa}
                                    QuotasValue={quotaValue}
                                    TipoInteres={tipoInteres}
                                    Frequency={frequency}
                                    DateStart={datestart}
                                    />  
                               }
                                </div> 
                            </div>
                            
                         </div>{/* FINAL DEL DIV CARD */}
 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Calculator
