import Axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { URL_API } from '../../config/config'
import fondoImg from '../../config/slider8.jpg'
import userImg from '../../user.png'
import toastr from 'toastr'

export const ViewLoan = (props) => {

    const [payments, setPayments] = useState([])
    const [Request, setRequest] = useState([])
    const [idNextPay, setIdNextPay] = useState('')

    const [dataPay, setDataPay] = useState({
        numcuotas:1,
        typePayment:'Cuota',
        discount:0,
        formaDePayment:'Efectivo',
        ValueToPay:0, //valor que paga
        amountMora:0,
        otherPay:0
        
    })

    const {numcuotas,typePayment,discount,formaDePayment,ValueToPay,amountMora,otherPay} = dataPay
  
    const idLoan = props.match.params.idloan
    const idRequest = props.match.params.idrequest

    const obtenerPagos = async() => {
        
        const resp_payments = await Axios.post(URL_API + '/payments/findPaymentsByLoanId/'+idLoan) 
        setPayments(resp_payments.data.payments)

        const resp_request = await Axios.get(URL_API + '/requests/'+idRequest) 
        setRequest(resp_request.data.request)

        //Obtenemos el Id del siguiente pago que se debe realizar
        let pagos = new Array
        pagos=resp_payments.data.payments
        for (let i = 0; i < pagos.length; i++) {
            if(pagos[i].statusPay === 'Pendiente'){
                setIdNextPay(pagos[i]._id)
                return
            }
        }
       
    }

    const formatter = new Intl.NumberFormat('es-HN', {
        style: 'currency',
        currency: 'LPS',
        minimumFractionDigits: 2
      })

      const pagar = async()=>{
          
          let data={
              
              methodPayed: formaDePayment,
              amountPayed: ValueToPay,
              amountToMora: amountMora,
              otherPay:otherPay,
              discount: discount,
              datePayed: Date.now()
            }
        
        const resp_pay = await Axios.put(URL_API + '/payments/updateState/'+idNextPay, data) 
        if(resp_pay?.data?.ok===true){
            document.getElementById('cerrarModal').click()
            props.history.replace('/prestamos/ver/'+props.match.params.idloan+'/'+props.match.params.idrequest)
            alert("Pago Realizado Exitosamente")
            obtenerPagos()
            
        }else{
            alert("Error Realizando Pago")
        }

      }

      const handleInputChange = ({ target }) => {

        setDataPay({
            ...dataPay,
            [target.name]: parseFloat(target.value)
        })
    }
    const handleInputSelect = ({ target }) => {

        setDataPay({
            ...dataPay,
            [target.name]: target.value
        })
    }

    const FormatDate=(fecha) =>{
        
        let fechaI =new Date(fecha);
        let day = fechaI.getDate();
        let month = fechaI.getMonth()+1;
        let year = fechaI.getFullYear();
        if(day < 10 ){ day= '0'+day}
        if(month < 10){ month = '0'+month}
        let dateF = ''
        return dateF  = day + '-' + month + '-' + year;    
    }

    useEffect(() => {
       
        obtenerPagos()

    }, [])

    return (
        <div className="pcoded-content">
        <div className="pcoded-inner-content">
            <div className="main-body">
                <div className="page-wrapper">
                    <div className="page-header mt-5">
                        <div className="page-header-title">
                            <h4>Revisión de Prestamos Individual</h4>
                        </div>
                        <div className="page-header-breadcrumb">
                    <ul className="breadcrumb-title">
                        <li className="breadcrumb-item">
                        <Link to='/prestamos'>
                            <i className="icofont icofont-user" />
                        </Link>
                        </li>
                        <Link to='/prestamos'>
                        <li className="breadcrumb-item">Volver a Prestamos
                        </li>
                        </Link>
                        
                    </ul>
                    </div>
                           
                    </div>
                        <div className="page-body">
                            {/* Basic table card start */}
                            <div className="card">
                            <div className="card-header vertical">

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                        <div className="widget-profile-card-1">
                                        <div className="bg-layer" />
                                        <img className="img-fluid" src={fondoImg} alt="card-style-1" />
                                        <button className="btn btn-default btn-outline-default btn-icon b-lft"><i className="icofont icofont-ui-user" /></button>
                                        <button className="btn btn-default btn-outline-default btn-icon b-rgt"><i className="icofont icofont-ui-message" /></button>
                                        <div className="middle-user">
                                            <img className="img-fluid" src={userImg} alt="Profile-user" />
                                        </div>
                                        </div>
                                        <div className="card-block text-center">  
                                         <h5>{Request?.customerId?.personId?.name} {Request?.customerId?.personId?.lastname} </h5>
                                        <p className="text-muted">{Request?.customerId?.personId?.city}</p>
                                        <p className="text-muted">{Request?.customerId?.personId?.identidad}</p>
                                        <p className="text-muted">{Request?.customerId?.personId?.phone1} - {Request?.customerId?.personId?.phone2}</p>
                                        <p className="text-muted">{Request?.customerId?.personId?.email1}</p>

                                        {/* <button className="btn btn-primary btn-round m-t-10 m-b-20">Contact</button> */}
                                        </div>
                                        <div className="card-footer">
                                        <div className="row text-center">
                                            <div className="col-6 b-r-default">
                                            <h4 className="text-primary">{Request?.customerId?.codeCustomer}</h4>
                                            <span className="text-muted text-uppercase">Código</span>
                                           
                                            </div>
                                            <div className="col-6">
                                            <h4 className="text-primary">AA</h4>
                                            <span className="text-muted text-uppercase">Categoría</span>
                                            
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                    <div className="card-block table-border-style">
                                        <div className="table-responsive">
                                        <table className="table table-hover">
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Préstamo</th>
                                                    <td>{Request?.typeLoan}</td>
                                                </tr>
                                                <tr>
                                                    <th>Capital</th>
                                                    <td>LPS. {(Request?.amount)}</td>
                                                </tr>
                                                <tr>
                                                    <th>Tasa Mensual</th>
                                                    <td>{Request?.rate}%</td>
                                                </tr>
                                                <tr>
                                                    <th>Frecuencia de pago</th>
                                                    <td>{Request?.frequency}</td>
                                                </tr>
                                                <tr>
                                                    <th>Númeor de Coutas</th>
                                                    <td>{Request?.quota} cuotas</td>
                                                </tr>
                                                <tr>
                                                    <th>Valor de Cuota</th>
                                                    <td>LPS {Request?.quotaValue}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total de Interes</th>
                                                    <td>LPS {Request?.totalInterest}</td>
                                                </tr>
                                                <tr>
                                                    <th>Costo de Cierre</th>
                                                    <td>LPS {Request?.closingCostVar}</td>
                                                </tr>
                                                <tr>
                                                    <th>Monto Total</th>
                                                    <td>LPS {Request?.totalAmount}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <div className="card card-contact borderless-card">
                                     <button className="btn btn-xlg btn-success width-100 " data-toggle="modal" data-target="#modalPagar">Registrar Pago</button>

                                    <div className="card-block table-border-style">
                                                                           
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                            
                                            <tbody>
                                                <tr>
                                                    <th>Ref. Familiar</th>
                                                    <td><p>{Request?.refName1}</p></td>
                                                </tr>
                                                <tr>
                                                    <th>Parentesco</th>
                                                    <td>{Request?.refRelation1}</td>
                                                </tr>
                                                <tr>
                                                    <th>Teléfono</th>
                                                    <td>{Request?.refPhone1}</td>
                                                </tr>
                                                <tr>
                                                    <th>Ref. Personal</th>
                                                    <td><p>{Request?.refName2}</p></td>
                                                </tr>
                                                <tr>
                                                    <th>Parentesco</th>
                                                    <td>{Request?.refRelation2}</td>
                                                </tr>
                                                <tr>
                                                    <th>Teléfono</th>
                                                    <td>{Request?.refPhone2}</td>
                                                </tr>
                                                <tr>
                                                    <th>Aval 1</th>
                                                    <td>{Request?.aval1Id}</td>
                                                </tr>
                                                <tr>
                                                    <th>Aval 2</th>
                                                    <td>{Request?.aval2Id}</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>

                                        </div>
  
                                    </div>
                                       
                                    </div>
                                   
                                </div>
                                
                            </div>

                            <div className="table-responsive p-l-15 p-r-15">
                                    <table className="table table-hover">
                                        <thead >
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Cuota</th>
                                                <th scope="col">Capital</th>
                                                <th scope="col">Interes</th>
                                                <th scope="col">Mora</th>
                                                <th scope="col">Otro</th>
                                                <th scope="col">Descuento</th>
                                                <th scope="col">Pago</th>
                                                <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                            }
                                        {
                                            payments.map((payment,i)=>(
                                                <tr key={payment._id} >
                                                    <th scope="row">{i+1} </th>
                                                    {payment.statusPay === 'Pendiente' ? 
                                                        <Fragment>

                                                            <td>{(new Date(payment.dateToPay)).toLocaleDateString()}</td>
                                                            <td><strong className="text-warning">{formatter.format((payment.amountToPay).toFixed(2))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountToCapital).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountToInteres).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountToMora).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.otherPay).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.discount).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountPayed).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{payment.statusPay}</strong></td>
                                                        
                                                        </Fragment>
                                                        : null
                                                    }

                                                    {payment.statusPay === 'Pagada' ? 
                                                        <Fragment>

                                                            <td>{(new Date(payment.dateToPay)).toLocaleDateString()}</td>
                                                            <td><strong className="text-success">{formatter.format((payment.amountToPay).toFixed(2))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.amountToCapital).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.amountToInteres).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.amountToMora).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.otherPay).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.discount).toFixed(2)))}</strong></td>
                                                            <td> 
                                                                <strong className="text-success">{formatter.format(((payment.amountPayed).toFixed(2)))}</strong>
                                                                <p>{FormatDate(payment.datePayed)}</p>
                                                            </td>
                                                            <td><strong className="text-success">{payment.statusPay}</strong></td>
                                                        
                                                        </Fragment>
                                                        : null
                                                    }               

                                                   
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                       
                                    </table>
                                </div>

                        </div>

                          {/* Modal */}
                <div className="modal fade" id="modalPagar" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registrar Pago</h5>
                                <button id="closeModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">X</span>
                            </button>
                        </div>

                        <div className="modal-body">
                        
                            <div className="row">
                            
                                <div className="col-sm-12 col-md-6" style={{textAlign:"center"}}>
                                    <h3 className="input-group-text">Valor Requerido</h3>
                                    <div style={{textAlign:"center"}}>
                                        <h3 htmlFor="">LPS. {parseFloat(payments[0]?.amountToPay).toFixed(2)}</h3>
                                    </div>
                                    <hr />
                                    
                                    <div className="btn-group" role="group" >
                                        <label >Numero de Cuotas</label>
                                        <div className="d-flex" >
                                            <button type="button" class="btn btn-danger">-</button>
                                            <input value={numcuotas} onChange={handleInputChange} style={{textAlign:"center"}} type="number" min="1" className="form-control sm"  name="numcuotas"/>
                                            <button type="button" className="btn btn-success">+</button>

                                        </div>
                                    </div>
                                    <div className="d-flex m-auto" style={{width:"80%"}}>

                                        <select value={formaDePayment} onChange={handleInputSelect}  name="formaDePayment" id="formaDePayment" className="form-control m-t-15"> 
                                            <option selected value="Efectivo">Pago en Efectivo</option>
                                            <option value="Targeta">Pago con Targeta</option>
                                            <option value="Deposito">Pago con Deposito</option>
                                            <option value="Cheque">Pago con Cheque</option>
                                        </select>
                                       
                                    </div>
                                </div>
                                
                                <div className="col-sm-12 col-md-6 btn-group">

                                    <div className=" m-auto" >
                                        <select value={typePayment} onChange={handleInputSelect}  name="typePayment" id="typePayment" className="form-control m-t-15"> 
                                            <option selected value="Cuota">Pago de Cuota</option>
                                            <option value="Interes">Pago de Interes</option>
                                            <option value="Otro">Otro Pago</option>
                                            
                                        </select>
                                    </div>
                                    
                                        <label >Valor a Pagar</label>
                                        <div className="input-group input-group-lg">
                                            <input value={ValueToPay} name="ValueToPay" onChange={handleInputChange} type="number" min="0" className="form-control"  placeholder="Cantidad a Pagar" style={{border:"3px solid green"}} />
                                        </div>
                                    
                                        <label >Valor de Descuento</label>
                                        <div className="input-group input-group-lg">
                                            <input value={discount} name="discount" onChange={handleInputChange} type="number" min="0" className="form-control"  placeholder="Valor de Descuento" />
                                        </div>
                                </div>

                            </div>

                            <hr />

                                <div className="col-sm-12 col-md-12">
                                <div className="table-responsive p-l-15 p-r-15">
                                    <table className="table table-hover">  
                                        <thead>
                                        <th scope="col"># De Cuota</th>
                                        <th scope="col">Valor De Cuota</th>
                                        <th scope="col">Valor Atrasado</th>
                                        <th scope="col">Mora (0 dias)</th>
                                        <th scope="col">Descuento</th>
                                        <th>Total</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="col">1</td>

                                                <td scope="col">LPS. {parseFloat(payments[0]?.amountToPay).toFixed(2)}</td>
                                           
                                                <td scope="col">LPS. 0.0</td>
                                           
                                                <td scope="col">LPS. 0.0</td>
                                            
                                                <td scope="col">LPS. 0.0</td>

                                                <td scope="col">LPS. {parseFloat(payments[0]?.amountToPay).toFixed(2)}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                            

                            <div className="modal-footer">
                                <button id="cerrarModal" name="cerrarModal" type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button onClick={()=>pagar()} type="button"  className="btn btn-primary">Pagar</button>
                            </div>

                        </div>
                        </div>
                        </div>
                     </div>
                 {/* END Modal */}

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default ViewLoan