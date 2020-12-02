import React, { useState } from 'react'

 export const Calculator = () => {

    const [data, setData] = useState({
        quota:'',
        quotaValue:'',
        totalInterest:'',
        amount:'',
        rate:'',
    })

    const {quota,quotaValue,rate,totalInterest,amount} = data

    const calcularInteres=()=>{
       
        //calculo de interes total
        let InteresTotal= (amount * rate * quota)/1200
        document.getElementById('totalInterest').value=InteresTotal
       
        //valor de costo de Cierre
        let closingCostVar
        if(amount>5000){
            closingCostVar=amount*0.04
        }else{
            closingCostVar =200            
        }
        document.getElementById('closingCost').value = closingCostVar

        //calcular valor de cada cuota
        document.getElementById('quotaValue').value=(parseFloat(amount) + parseFloat(InteresTotal)+parseFloat(closingCostVar))/quota
    
        //Calculo del Monto Total a Pagar
        let totalAmount = parseFloat(amount) + parseFloat(InteresTotal)+parseFloat(closingCostVar)
        document.getElementById('totalAmount').value = totalAmount
    }

    const handleInputChange = ({ target }) => {

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
                                            <input value={amount} onChange={handleInputChange} id="amount" name="amount" type="text" className="form-control" placeholder="Ingresar el Monto" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                        <label htmlFor="rate">Tasa de Interes Anual</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">%</p>
                                            <input value={rate} onChange={handleInputChange} name="rate" id="rate" type="text" className="form-control" placeholder="Tasa de Interes en %"/>
                                        </div>         
                                    </div>


                                </div>

                                <div className="row">
                                    {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                                   
                                    <div className="col-sm-12 col-md-4">
                                        <label htmlFor="frecuency">Frecuencia de Pago</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1"><i className="icofont icofont-hour-glass"></i></p>
                                            <select onChange={handleInputChange} name="frequency" id="frequency"  className="form-control col-md-12"> 
                                                <option value="opt1">Frecuencia de Pago</option>
                                                <option value="Semanal">Semanal</option>
                                                <option value="Quincenal">Quincenal</option>
                                                <option value="Mensual">Mensual</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4">
                                    <label htmlFor="dateInicio">Número de Cuotas</label> 
                                        <div className="input-group">
                                            <p className="input-group-addon"  id="basic-addon1"><i className="icofont icofont-listing-number"></i></p>
                                            <input onBlur={()=>calcularInteres()} value={quota} onChange={handleInputChange} name="quota" id="quota" type="text" className="form-control" placeholder="Cantidad de Cuotas"/>
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
                                            <p className="input-group-addon" id="basic-addon1">LPS.</p>
                                            <input disabled value={quotaValue} onChange={handleInputChange} name="quotaValue" id="quotaValue" type="text" className="form-control" placeholder="Valor de cada cuota" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInterest">Total de Interes</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">LPS.</p>
                                            <input value={totalInterest} disabled onChange={handleInputChange} name="totalInterest" id="totalInterest" type="text" className="form-control" placeholder="Total de Interes" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInteres">Costo de Cierre y Sucursal</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">LPS.</p>
                                            <input disabled className="form-control" onChange={handleInputChange} name="closingCost" id="closingCost" type="text" placeholder="Costo de Cierre 4%" />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="totalInteres">Monto total a Pagar</label>
                                        <div className="input-group">
                                            <p className="input-group-addon" id="basic-addon1">LPS.</p>
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
