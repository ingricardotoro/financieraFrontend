import React, { useEffect, useState } from 'react'

 export const Calculator = () => {

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
        Periodos:0
    })

    const [Error, setError] = useState(false)
    const [TipoCalculo, setTipoCalculo] = useState('NumeroDeCuotas') //o por ValordeCuotas

    const {quota,quotaValue,rate,typeLoan,totalInterest,amount,frequency,tipotasa,tipoInteres,closingCostVar,TasaM,Periodos} = data

    const formatter = new Intl.NumberFormat('es-HN', {
        style: 'currency',
        currency: 'LPS',
        minimumFractionDigits: 2
      })


    const calcular=()=>{

        //********Validar Campos Requeridos************//
        if(amount === 0 || amount==='') {
            setError(true)
            return
        }else if( (quotaValue===0 || quotaValue==='') && (quota===0 || quota==='') ){
            setError(true)
            return
        }else{
            setError(false)
        }
        //******************************************* */

        if(tipotasa==='Mensual'){
            TasaM=parseFloat(rate)
        }else if(tipotasa==='Anual'){
            TasaM=parseFloat(rate)/12
        }

        if(tipoInteres==='Compuesto'){
            CalcularCutoasInteresCompuesto()
        }else if(tipoInteres==='Simple'){
            //CalcularCutoasInteresSimple
        }else if(tipoInteres==='Nivelado'){
            //CalcularCutoasInteresNivelado
        }
        
        //El objetivo esque los periodos esten en la cantidad de mese que durara el prestamo
        if(frequency==='Mensual'){
            setData({
                ...data,
                Periodos:quota
            })
        }else if(frequency==='Quincenal'){
            setData({
                ...data,
                Periodos:quota/2
            })
        }else if(frequency==='Semanal'){
            setData({
                ...data,
                Periodos:quota/4
            })
        }
 
        //*************************valor de costo de Cierre************************
        if(parseFloat(amount)>=5000){
            setData({
                ...data,
                closingCostVar:parseFloat(amount)*0.04
            })
            //closingCostVar=amount*0.04
        }else{
            setData({
                ...data,
                closingCostVar:200
            })
            //closingCostVar = 200            
        }
       // document.getElementById('closingCost').value = formatter.format(closingCostVar)
        //*************************valor de costo de Cierre************************
    }

    //Para saber si calculamos por numero de cuotas o por valor de cuotas
    const CambioTipodeCalculo =(tipo)=>{
        setTipoCalculo(tipo)
    }

    const CalcularCutoasInteresCompuesto =()=>{


        //calcular valor de cada cuota
        /*let MonthlyQuota=
        (parseFloat(amount) + parseFloat(closingCostVar)) * Math.pow(
                    (( 1-(Math.pow((1+TEM), - quota)))/ TEM)
                    ,-1)*/

        //******************calculo de interes total (Mensual)***************************//
        //let InteresTotal= (( parseFloat(amount) + parseFloat(closingCostVar) ) *  parseFloat(rate) * parseInt(quota))/1200
        let InteresTotal=  ( parseFloat(amount) + parseFloat(closingCostVar) ) *  parseFloat(TasaM) * parseInt(quota)
        document.getElementById('totalInterest').value=formatter.format(InteresTotal)
        //******************calculo de interes total (Mensual)***************************//
        

        //******************Calculo del Monto Total a Pagar*****************************//
        let totalAmount = parseFloat(amount) + parseFloat(InteresTotal) + parseFloat(closingCostVar)
        document.getElementById('totalAmount').value = formatter.format(totalAmount)
        //******************Calculo del Monto Total a Pagar*****************************//
        
        //para el calculo de interes compuesto
        //let MonthlyQuota= (parseFloat(amount) + parseFloat(closingCostVar)) * ( ( TEM * Math.pow((1+TEM),quota) ) / ((Math.pow((1+TEM), quota))-1) )
        let Quota=parseFloat(parseFloat(totalAmount) / quota)
         //document.getElementById('quotaValue').value=(parseFloat(amount) + parseFloat(InteresTotal)+parseFloat(closingCostVar))/quota
         document.getElementById('quotaValue').value=formatter.format(Quota)

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
                                    <label htmlFor="dateInicio">Calcular Préstamo</label>
                                        <div className="input-group">
                                            <button onClick={()=> calcular() } id="btnCalcular" className="btn btn-success width-100">CALCULAR</button>
                                        </div>
                                        {Error===true ? 
                                            <div class="alert alert-danger" role="alert">
                                               Faltan Algunos Datos
                                            </div>
                                        : null}
                                    </div>
                                    
                                </div>


                                <hr />

                                <div className="row">

                                   

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
                                            <input disabled className="form-control" onChange={handleInputChange} name="totalAmount" id="totalAmount" type="text" placeholder="Monto Total a Pagar" />
                                        </div>
                                    </div>
                                    
                                </div>                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Calculator
