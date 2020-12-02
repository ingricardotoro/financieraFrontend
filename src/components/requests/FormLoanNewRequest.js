import React from 'react'
import { useForm } from '../../hooks/useForm'

function FormLoanNewRequest() {

    const [formValues, handleInputChange] = useForm ({

        customerId:'5fa34c1c62e2ea3e3c29e3b5',
        codeRequest:'S-112',
        typeLoan:'',
        amount:'',
        rate:'',
        frequency:'',
        quota:'',
        quotaValue:'',
        totalInterest:'',
        closingCost:'',
        startDate:'',
        sucursal:'',
        details:'',
        stateRequest:'Pendiente',
       
    })

    const {totalInterest,quota,quotaValue,amount,rate} = formValues

    const calcularInteres=()=>{
       
        //calculo de interes total
        let InteresTotal= (amount * rate * quota)/1200
        document.getElementById('totalInterest').value=InteresTotal
       
        //valor de costo de 
        let closingCostVar
        if(amount>5000){
            closingCostVar=amount*0.04
        }else{
            closingCostVar =200            
        }

        document.getElementById('closingCost').value = closingCostVar

        //calcular valor de cuota
        document.getElementById('quotaValue').value=(parseFloat(amount) + parseFloat(InteresTotal)+parseFloat(closingCostVar))/quota
    }

    return (
        
        <div className="container">

            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <label htmlFor="monto">Tipo de Préstamo</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-money"></i></span>
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

                <div className="col-sm-12 col-md-6">
                    <label htmlFor="monto">Monto Solicitado</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS.</span>
                        <input value={amount} onChange={handleInputChange} id="amount" name="amount" type="text" className="form-control" placeholder="Ingresar el Monto" />
                    </div>
                </div>

            </div>

            <div className="row">
                {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                <div className="col-sm-12 col-md-6">
                    <label htmlFor="rate">Tasa de Interes Anual</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">%</span>
                        <input value={rate} onChange={handleInputChange} name="rate" id="rate" type="text" className="form-control" placeholder="Tasa de Interes en %"/>
                    </div>         
                </div>

                <div className="col-sm-12 col-md-6">
                    <label htmlFor="frecuency">Frecuencia de Pago</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-hour-glass"></i></span>
                        <select onChange={handleInputChange} name="frequency" id="frequency"  className="form-control col-md-12"> 
                            <option value="opt1">Frecuencia de Pago</option>
                            <option value="Semanal">Semanal</option>
                            <option value="Quincenal">Quincenal</option>
                            <option value="Mensual">Mensual</option>
                        </select>
                    </div>
                </div>
                
            </div>


            <div className="row">
                {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                <div className="col-sm-12 col-md-6">
                <label htmlFor="dateInicio">Número de Cuotas</label> 
                    <div className="input-group">
                        <span className="input-group-addon"  id="basic-addon1"><i className="icofont icofont-listing-number"></i></span>
                        <input onBlur={()=>calcularInteres()} value={quota} onChange={handleInputChange} name="quota" id="quota" type="text" className="form-control" placeholder="Cantidad de Cuotas"/>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                <label htmlFor="dateInicio">Valor de cada cuota</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS.</span>
                        <input disabled value={quotaValue} onChange={handleInputChange} name="quotaValue" id="quotaValue" type="text" className="form-control" placeholder="Valor de cada cuota" />
                    </div>
                </div>
                
            </div>

            <hr />

            <div className="row">
                
                <div className="col-sm-12 col-md-6">
                    <label htmlFor="dateInicio">Fecha de Inicio</label> 
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-calendar mr-1"></i></span>
                        <input name="startDate" id="startDate" className="form-control" type="date"/>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <label htmlFor="totalInterest">Total de Interes</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS.</span>
                        <input value={totalInterest} disabled onChange={handleInputChange} name="totalInterest" id="totalInterest" type="text" className="form-control" placeholder="Total de Interes" />
                    </div>
                </div>
                
            </div>

            <div className="row">
                {/* <label className="col-sm-4 col-md-6 col-form-label">Nombre de Cliente</label> */}
                <div className="col-sm-12 col-md-6">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-ui-edit"></i></span>
                        <textarea onChange={handleInputChange} name="details" id="details" className="form-control" rows="6" placeholder="Observaciones"></textarea>  
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <label htmlFor="totalInteres">Costo de Cierre y Sucursal</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS.</span>
                        <input disabled className="form-control" onChange={handleInputChange} name="closingCost" id="closingCost" type="text" placeholder="Costo de Cierre 4%" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i className="icofont icofont-bank-alt"></i> </span> 
                        <select onChange={handleInputChange} name="sucursal" id="sucursal" className="form-control col-md-12"> 
                            <option value="opt1">Seleccione Sucursal</option>
                            <option value="Central">Central</option>  
                            <option value="Valle Alto">Valle Alto</option>
                        </select>   
                    </div>
                </div>
    
            </div>

        </div> 

    )
}

export default FormLoanNewRequest
