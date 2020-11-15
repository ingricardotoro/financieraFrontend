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

    return (
        
        <div className="container">

            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <label htmlFor="monto">Tipo de Préstamo</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1"><i class="icofont icofont-money"></i></span>
                        <select onChange={handleInputChange} name="typeLoan" id="typeLoan" class="form-control col-md-12"> 
                            <option value="">Tipo de Préstamos</option>
                            <option value="Amortizacion">Amortizacion</option>
                            <option value="Interes Simple">Interes Simple</option>
                            <option value="Interes Acumulado">Interes Acumulado</option>
                            <option value="Préstamos Tipo B">Préstamos Tipo B</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <label htmlFor="monto">Monto Solicitado</label>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">LPS.</span>
                        <input onChange={handleInputChange} id="amount" name="amount" type="text" className="form-control" placeholder="Ingresar el Monto" />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default FormLoanNewRequest
