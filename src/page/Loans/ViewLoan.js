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
import moment from 'moment'
import PagoView from './PagoView'
import PagarView from './PagarView'

export const ViewLoan = (props) => {

    const [payments, setPayments] = useState([])
    const [Request, setRequest] = useState([])
    const [viewPagar, setViewPagar] = useState(false)
    const [viewPago, setViewPago] = useState(false)
    const [idNextPay, setIdNextPay] = useState('')
    const [paymentID, setPaymentID] = useState('')

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
   
    const [valorI, setValorI] = useState(0)// para obtener el numero i de payments
    const [nextBool, setNextBool] = useState(false) //bandera para mostar fila de siguiente pago

    let frecuency = parseInt(Request?.frequency)
        if(Request?.frequency==='Semanal'){frecuency=7}
        if(Request?.frequency==='Quincenal'){frecuency=14}

    let tasa = Request?.rate

    const obtenerPagos = async() => {
        
        const resp_payments = await Axios.post(URL_API + '/payments/findPaymentsByLoanId/'+idLoan) 
        setPayments(resp_payments.data.payments)

        const resp_request = await Axios.get(URL_API + '/requests/'+idRequest) 
        setRequest(resp_request.data.request)

        let today  =  moment()
        let fechaRow = moment()
        //let fechatoday =new Date(today);
        //Obtenemos el Id del siguiente pago que se debe realizar
        let pagos = new Array
        pagos=resp_payments.data.payments
        for (let i = 0; i < pagos.length; i++) {
         
            fechaRow = moment(pagos[i].dateToPay)
            
            if(pagos[i].statusPay === 'Pendiente'){

                if((today.diff(fechaRow)>0)){ // determinamos si la fecha de pago ya paso  

                   console.log("1")    
                   
                    let fechaRow2 = moment()
                     fechaRow2 = fechaRow.add(frecuency, 'days')  

                    if( (fechaRow2.diff(fechaRow)>0)){ //Pagos atrasados
                        console.log("2")
                        /*setValorI(i)
                        setIdNextPay(pagos[i]._id)*/
                    }else{ //Proximo pago a realizar
                        console.log("3="+i)
                        setValorI(i)
                        setIdNextPay(pagos[i]._id)
                        setNextBool(true)
                    }
                }else{console.log("NO")}
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
              frequency:frecuency,
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

        switch (parseInt(month)) {
            case 1: month = 'Ene'; break;
            case 2: month = 'Feb'; break;
            case 3: month = 'Mar'; break;
            case 4: month = 'Abr'; break;
            case 5: month = 'May'; break;
            case 6: month = 'Jun'; break;
            case 7: month = 'Jul'; break;
            case 8: month = 'Ago'; break;
            case 9: month = 'Sep'; break;
            case 10: month = 'Oct'; break;
            case 11: month = 'Nov'; break;
            case 12: month = 'Dic'; break;
            default:month = '---';
                break;
        }
        dateF  = day + '-' + month + '-' + year; 
        return dateF  
    }

    //Funcion para ver el nombre del dia
    const dias = ['domingo', 'lunes', 'martes','miércoles','jueves','viernes','sábado', 'domingo',];
    
    const NombreDay = (date) => {
        let numeroDia = new Date(date).getDay();
        let nombreDia = dias[numeroDia];
        return nombreDia
    }

    //let DiasTotaldemora = 0
    
    const DiasDeMora = (dayToPay) =>{

        let fechaFin = moment() //today
        let fechaI =moment(dayToPay);
        
        let duration =  fechaFin.diff(fechaI,'days')

        //DiasTotaldemora+=duration
        //Se aumenta un dias para que incluya el dia de hoy
        return duration + ' dias'
    }

    let totalMora = 0.0
    let totalDeuda =0.0
    let Arraymora= []

    const CalcularMora = (dayToPay, cuota) =>{

        let moradiaria = 0

        let fechaFin    =  moment() //today
        
        /*let fechaI =new Date(dayToPay);
        let fechaF =new Date(fechaFin);
        let duration =  fechaF - fechaI*/
        let fechaI =moment(dayToPay);
        let duration =  fechaFin.diff(fechaI,'days')
        duration = parseInt(duration)+1
        //console.log("Duracion="+duration)

        //console.log(new Date(fechaI) + " D= " +new Date(duration).getDate() )
        let mora =0.0
        if(duration>parseInt(frecuency)){
            mora = (cuota * 0.03) 
            moradiaria = parseFloat(mora) / parseInt(frecuency)
        }

        let moraDeCuota = parseFloat(moradiaria) * (duration)
        totalMora+= parseFloat(moradiaria) * (duration)
        totalDeuda+=parseFloat(cuota) + parseFloat(moraDeCuota)
       
        Arraymora.push({cuota,moraDeCuota,duration,fechaI})

        return parseFloat(moradiaria) * (duration)
    }

    let totalAtrasado = 0.0
    const CalcularPagoAtrasado = (couta) =>{
            totalAtrasado+=couta
    }

    useEffect(() => {
       
        obtenerPagos()

    }, [])

    const handleViewPagar = (paymentId) =>{
        setViewPagar(true) // ven modal de pagar
        setViewPago(false)//cerrar modal de ver pago
        setPaymentID(paymentId)
    }
    const handleViewPago = (paymentId) =>{
        //console.log("HOLA="+paymentId)
        setViewPagar(false) // ven modal de pagar
        setPaymentID(paymentId)
        setViewPago(true)//cerrar modal de ver pago
        
    }

    const today = Date.now()

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
                        <li className="breadcrumb-item">Volver a Préstamos
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
                                                <th scope="col">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                        {
                                            payments.map((payment,i)=>(
                                                
                                                <tr key={payment._id} >
                                                    <th scope="row">{i+1} </th>
                                                    {payment.statusPay === 'Pendiente'
                                                    
                                                        ? 
                                                            (new Date(payment.dateToPay).getTime() < today) ? //Pago con retraso
                                                        
                                                                <Fragment>
                                                                    
                                                                    <td>{NombreDay(new Date(payment.dateToPay))} <p> {FormatDate(new Date(payment.dateToPay))}</p></td>
                                                                    <td><strong className="text-danger">{CalcularPagoAtrasado(payment.amountToPay), formatter.format((payment.amountToPay).toFixed(2))}</strong></td>
                                                                    <td><strong className="text-danger">{formatter.format(((payment.amountToCapital).toFixed(2)))}</strong></td>
                                                                    <td><strong className="text-danger">{formatter.format(((payment.amountToInteres).toFixed(2)))}</strong></td>
                                                                    <td><strong className="text-danger">{formatter.format(CalcularMora(payment.dateToPay,payment.amountToPay))}</strong></td>
                                                                    <td><strong className="text-danger">{formatter.format(((payment.otherPay).toFixed(2)))}</strong></td>
                                                                    <td><strong className="text-danger">{formatter.format(((payment.discount).toFixed(2)))}</strong></td>
                                                                    <td><strong className="text-danger">{DiasDeMora(payment.dateToPay)}</strong></td>
                                                                    <td><strong className="text-danger">Atrasado</strong></td>
                                                                    <td><strong className="text-warning"><button onClick={()=>handleViewPagar(payment._id)} className="btn btn-success">Pagar</button></strong></td>

                                                                    
                                                                </Fragment>
                                                                : 
                                                                <Fragment>
                                                                    
                                                                <td>{NombreDay(new Date(payment.dateToPay))} <p> {FormatDate(new Date(payment.dateToPay))}</p></td>
                                                                <td><strong className="text-warning">{formatter.format((payment.amountToPay).toFixed(2))}</strong></td>
                                                                <td><strong className="text-warning">{formatter.format(((payment.amountToCapital).toFixed(2)))}</strong></td>
                                                                <td><strong className="text-warning">{formatter.format(((payment.amountToInteres).toFixed(2)))}</strong></td>
                                                                <td><strong className="text-warning">{formatter.format(((payment.amountToMora).toFixed(2)))}</strong></td>
                                                                <td><strong className="text-warning">{formatter.format(((payment.otherPay).toFixed(2)))}</strong></td>
                                                                <td><strong className="text-warning">{formatter.format(((payment.discount).toFixed(2)))}</strong></td>
                                                                 <td><strong className="text-warning">{formatter.format(((payment.amountPayed).toFixed(2)))}</strong></td> 
                                                                <td><strong className="text-warning">{payment.statusPay}</strong></td>
                                                                <td><strong className="text-warning"><button onClick={()=>handleViewPagar(payment._id)} className="btn btn-success">Pagar</button></strong></td>
                                                                
                                                            </Fragment>

                                                        :null
                                                    }

                                                    {payment.statusPay === 'Pagada' ? 
                                                        <Fragment>

                                                            <td>{NombreDay(new Date(payment.dateToPay))} <p>{FormatDate(new Date(payment.dateToPay))}</p></td>
                                                            <td><strong className="text-success">{formatter.format((payment.amountToPay).toFixed(2))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.amountToCapital).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.amountToInteres).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.amountToMora).toFixed(2)))}</strong> 
                                                            {
                                                                moment(payment.datePayed).format('ll') < moment(payment.dateToPay).format('ll') ?
                                        
                                                                <p className="text-danger"><strong><p>{DiasDeMora(payment.dateToPay)}</p> </strong></p>
                                                                 :
                                                                 null
                                                                }
                                                            
                                                            
                                                            </td>
                                                            <td><strong className="text-success">{formatter.format(((payment.otherPay).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-success">{formatter.format(((payment.discount).toFixed(2)))}</strong></td>
                                                            <td> 
                                                                <strong className="text-success">{formatter.format(((payment.amountPayed).toFixed(2)))}</strong>
                                                                {
                                                                moment(payment.datePayed).format('ll') < moment(payment.dateToPay).format('ll') ?
                                        
                                                                <p className="text-danger"><strong>{FormatDate(payment.datePayed)}</strong></p>
                                                                 :
                                                                 <p>{FormatDate(payment.datePayed)}</p>
                                                                }
                                                            </td>
                                                            <td><strong className="text-success">{payment.statusPay}</strong> 
                                                                {
                                                                moment(payment.datePayed).format('ll') < moment(payment.dateToPay).format('ll') ?
                                        
                                                                <p className="text-danger"><strong>Con Retraso</strong></p>
                                                                 :
                                                                null
                                                                }
                                                            </td>
                                                            <td><strong className="text-warning"><button onClick={()=> handleViewPago(payment._id)} className="btn btn-warning">Ver</button></strong></td>

                                                        </Fragment>
                                                        : null
                                                    }       

                                                     {payment.statusPay === 'Abonado' ? 
                                                        <Fragment>

                                                            <td>{NombreDay(new Date(payment.dateToPay))} <p> {FormatDate(new Date(payment.dateToPay))}</p></td>
                                                            <td><strong className="text-warning">{formatter.format((payment.amountToPay).toFixed(2))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountToCapital).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountToInteres).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.amountToMora).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.otherPay).toFixed(2)))}</strong></td>
                                                            <td><strong className="text-warning">{formatter.format(((payment.discount).toFixed(2)))}</strong></td>
                                                            <td> 
                                                                <strong className="text-warning">{formatter.format(((payment.amountPayed).toFixed(2)))}</strong>
                                                                {
                                                                moment(payment.datePayed).format('ll') < moment(payment.dateToPay).format('ll') ?
                                        
                                                                <p className="text-danger"><strong>{FormatDate(payment.datePayed)}</strong></p>
                                                                 :
                                                                 <p>{FormatDate(payment.datePayed)}</p>
                                                                }
                                                                
                                                            </td>
                                                            <td><strong className="text-warning">{payment.statusPay} <p>{formatter.format(((payment.amountPayed).toFixed(2)))}</p></strong></td>
                                                            <td><strong className="text-warning"><button onClick={()=>handleViewPagar(payment._id)} className="btn btn-success">Pagar</button></strong></td>

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

                        {/******En caso de quere ver uno de los cuotas ya pagadas */}
                        { viewPago ===true ? <PagoView paymentID={paymentID} setViewPago={setViewPago}  /> : null}
                         </div>
                        {/******En caso de quere pagar una de las cuotas */}
                        { viewPagar ===true ? <PagarView paymentID={paymentID} setViewPagar={setViewPagar} frecuency={frecuency } idLoan={idLoan} tasa={tasa} idRequest={idRequest} /> : null}


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
                                                <th scope="col"># Pagos</th>
                                                <th scope="col">Valor De Cuota</th>
                                                <th scope="col">dias de mora</th>
                                                <th scope="col">Total de Mora</th>
                                                <th scope="col">Descuento</th>
                                                <th>Total</th>
                                                </thead>
                                                <tbody>
                                                        { nextBool === true ? //verificamos si hay pago proximo a pagar
                                                        
                                                            <tr>
                                                                <td scope="col" style={{color:'green'}}>Próximo {NombreDay(new Date(payments[valorI]?.dateToPay))} <p>{FormatDate(payments[valorI]?.dateToPay)} </p></td>

                                                                <td scope="col">LPS. {parseFloat(payments[0]?.amountToPay).toFixed(2)} </td>
                                                        
                                                                <td scope="col" > {"0 dias de atraso"} </td>
                                                        
                                                                <td scope="col">LPS. 0 </td>
                                                            
                                                                <td scope="col">LPS. 0.0</td>

                                                                <td scope="col">LPS. {(parseFloat(payments[0]?.amountToPay)).toFixed(2)}</td>

                                                            </tr>
                                                        : null}
                                                    

                                                    {Arraymora.map((row, index )=> (

                                                        <tr>
                                                            <td scope="col" style={{color:'red'}}>Pago Atrasado <p>{FormatDate(row.fechaI)} </p></td>

                                                            <td scope="col">LPS. {parseFloat(row.cuota).toFixed(2)}</td>
                                                    
                                                            <td scope="col" style={{color:'red'}}> {(row.duration) + " dias de atraso"} </td>
                                                    
                                                            <td scope="col">LPS. {parseFloat(row.moraDeCuota).toFixed(2)} </td>
                                                        
                                                            <td scope="col">LPS. 0.0</td>

                                                            <td scope="col">LPS. {(parseFloat(row.cuota) + parseFloat(row.moraDeCuota)).toFixed(2)}</td>

                                                        </tr>
                                                ))
                                                    }
                                                        <tr>
                                                            <td scope="col">#</td>
                                                            <td scope="col">Total Adeudado</td>
                                                            <td scope="col"> </td>
                                                            <td scope="col"> </td>
                                                            <td scope="col"></td>
                                                            <td scope="col">LPS. {(parseFloat(totalDeuda)+ parseFloat(payments[0]?.amountToPay)).toFixed(2)}</td>

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
    
    )
}


export default ViewLoan