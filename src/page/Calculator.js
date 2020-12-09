import React, { useState } from 'react'

 export const Calculator = () => {

    const [data, setData] = useState({
        quota:'',
        quotaValue:'',
        totalInterest:'',
        amount:'',
        rate:'',
        frequency:''
    })

    const {quota,quotaValue,rate,totalInterest,amount,frequency} = data

    const formatter = new Intl.NumberFormat('es-HN', {
        style: 'currency',
        currency: 'LPS',
        minimumFractionDigits: 2
      })

    const calcularInteres=()=>{

        //Tasa de interes anual y mensual
        const TEA = (parseFloat(rate)/100)
        let Tasa=0

        if(frequency==='Mensual'){
            Tasa = (TEA/12)
        }else if(frequency==='Quincenal'){
            Tasa = (TEA/24)
        }else if(frequency==='Semanal'){
            Tasa = (TEA/48)
        }

        //valor de costo de Cierre
        let closingCostVar
        if(amount>=5000){
            closingCostVar=amount*0.04
        }else{
            closingCostVar =200            
        }
        document.getElementById('closingCost').value = formatter.format(closingCostVar)

        //calcular valor de cada cuota
        /*let MonthlyQuota=
        (parseFloat(amount) + parseFloat(closingCostVar)) * Math.pow(
                    (( 1-(Math.pow((1+TEM), - quota)))/ TEM)
                    ,-1)*/

        //calculo de interes total (Mensual)
        //let InteresTotal= (( parseFloat(amount) + parseFloat(closingCostVar) ) *  parseFloat(rate) * parseInt(quota))/1200
        let InteresTotal=  ( parseFloat(amount) + parseFloat(closingCostVar) ) *  parseFloat(Tasa) * parseInt(quota)
        document.getElementById('totalInterest').value=formatter.format(InteresTotal)
    
        //Calculo del Monto Total a Pagar
        let totalAmount = parseFloat(amount) + parseFloat(InteresTotal)+parseFloat(closingCostVar)
        document.getElementById('totalAmount').value = formatter.format(totalAmount)

        //para el calculo de interes compuesto
        //let MonthlyQuota= (parseFloat(amount) + parseFloat(closingCostVar)) * ( ( TEM * Math.pow((1+TEM),quota) ) / ((Math.pow((1+TEM), quota))-1) )
        let MonthlyQuota=parseFloat(parseFloat(totalAmount) / quota)
         //document.getElementById('quotaValue').value=(parseFloat(amount) + parseFloat(InteresTotal)+parseFloat(closingCostVar))/quota
         document.getElementById('quotaValue').value=formatter.format(MonthlyQuota)

    }

    const handleInputChange = ({ target }) => {
        
        setData({
            ...data,
            [target.name]: target.value
        })
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
                                    <div className="col-sm-12 col-md-4">
                                        <label htmlFor="monto">Tipo de Préstamo</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <select onChange={handleInputChange} name="typeLoan" id="typeLoan" className="form-control col-md-12"> 
                                                <option value="-1">Tipo de Préstamos</option>
                                                <option value="Fiduciario">Fiduciario</option>
                                                <option value="Prendario">Prendario</option>
                                                <option value="Solidario">Solidario</option>
                                                <option value="Hipotecario">Hipotecario</option>
                                                <option value="Mixto">Mixto</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                        <label htmlFor="monto">Monto Solicitado</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">LPS.</p>
                                            <input value={amount} onChange={handleInputChange} id="amount"  min="0" name="amount" type="number" className="form-control" placeholder="Ingresar el Monto" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                        <label htmlFor="rate">Tasa de Interes Anual</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">%</p>
                                            <input value={rate} onChange={handleInputChange} name="rate"  min="0" max="100"  id="rate" type="number" className="form-control" placeholder="Tasa de Interes en %"/>
                                        </div>         
                                    </div>


                                </div>

                                <div className="row">
                                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                                   
                                    <div className="col-sm-12 col-md-4">
                                        <label htmlFor="frecuency">Frecuencia de Pago</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-hour-glass"></i></p>
                                            <select defaultValue={frequency} onChange={handleSelect} name="frequency" id="frequency"  className="form-control col-md-12"> 
                                                <option selected value="Mensual">Mensual</option>
                                                <option value="Quincenal">Quincenal</option>
                                                <option value="Semanal">Semanal</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                    <label htmlFor="dateInicio">Número de Cuotas</label> 
                                        <div className="input-group">
                                            <p className="input-group-addon"  id="basic-addon1"><i className="icofont icofont-listing-number"></i></p>
                                            <input onBlur={()=>calcularInteres()} value={quota} min="0" onChange={handleInputChange} name="quota" id="quota" type="number" className="form-control" placeholder="Cantidad de Cuotas"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                    <label htmlFor="dateInicio">Calcular Préstamo</label>
                                        <div className="input-group">
                                            <button onClick={()=> calcularInteres() } className="btn btn-success width-100">CALCULAR</button>
                                        </div>
                                    </div>
                                    
                                </div>


                                <hr />

                                <div className="row">

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="dateInicio">Valor de cada cuota</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input disabled value={quotaValue} onChange={handleInputChange} name="quotaValue" id="quotaValue" type="text" className="form-control" placeholder="Valor de cada cuota" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInterest">Total de Interes</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input value={totalInterest} disabled onChange={handleInputChange} name="totalInterest" id="totalInterest" type="text" className="form-control" placeholder="Total de Interes" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInteres">Costo de Cierre y Sucursal</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></p>
                                            <input disabled className="form-control" onChange={handleInputChange} name="closingCost" id="closingCost" type="text" placeholder="Costo de Cierre 4%" />
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
