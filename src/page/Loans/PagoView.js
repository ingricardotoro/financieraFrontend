import Axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { URL_API } from '../../config/config'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment'

function PagoView(props) {

    const {paymentID,setViewPago}=props
    console.log("ID="+paymentID)
    const [payment, setPayment] = useState([])

    const [modal, setModal] = useState(true);

    const toggle = () => {setModal(!modal); setViewPago(false)}

    useEffect(() => {
       
        GetPayment()
       
    }, [])


    const GetPayment = async()=>{

        const resp_payment = await Axios.get(URL_API+'/payments/findPaymentsById/'+paymentID)
        setPayment(resp_payment.data.payment)
    }

    //Funcion para ver el nombre del dia
    const dias = ['Domingo', 'Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado', 'Domingo',];
    const NombreDay = (date) => {
        let numeroDia = new Date(date).getDay();
        let nombreDia = dias[numeroDia];
        return nombreDia
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

    const DiasDeMora = (dayToPay) =>{

        let fechaFin = moment() //today
        let fechaI =moment(dayToPay);
        
        let duration =  fechaFin.diff(fechaI,'days')

        //DiasTotaldemora+=duration
        //Se aumenta un dias para que incluya el dia de hoy
        //setDiasDemora(duration)
        return duration + ' dias'
    }

    return (

        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Registro de Pago </ModalHeader>
            <ModalBody>
                 
                <div className="col-sm-12 col-md-12">
                    <div className="card card-contact borderless-card">
                        <div className="card-block table-border-style">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Fecha de Cuota</th>
                                            <td>{NombreDay(new Date(payment?.dateToPay))+" "+ FormatDate(new Date(payment.dateToPay))}</td>
                                        </tr>
                                        <tr>
                                            <th>Valor Abonado</th>
                                            <td>LPS. {(payment?.amountPayed)}</td>
                                        </tr>
                                        <tr>
                                            <th>Valor De Cuota</th>
                                            <td>LPS. {(payment?.amountToPay)}</td>
                                        </tr>
                                        <tr>
                                            <th>Abono a Capital</th>
                                            <td>LPS {payment?.amountToCapital}</td>
                                        </tr>
                                        <tr>
                                            <th>Total de Interes</th>
                                            <td>LPS {payment?.amountToInteres}</td>
                                        </tr>
                                        <tr>
                                            <th>Dias de mora</th>
                                            <td>{DiasDeMora(payment.dateToPay)} de demora</td>
                                        </tr>
                                        <tr>
                                            <th>Total de Mora</th>
                                            <td>LPS. {payment?.amountToMora}</td>
                                        </tr>
                                        <tr>
                                            <th>Descuento</th>
                                            <td>LPS. {payment?.discount}</td>
                                        </tr>
                                        <tr>
                                            <th>Otros Pagos</th>
                                            <td>LPS. {payment?.otherPay}</td>
                                        </tr>
                                    
                                        <tr>
                                            <th>Pago realizado </th>
                                            <td>{NombreDay(new Date(payment?.datePayed)) +" "+ FormatDate(new Date(payment.datePayed))}</td>
                                        </tr>
                                        <tr>
                                            <th>Método del Pago</th>
                                            <td>{payment?.methodPayed}</td>
                                        </tr>

                                       {/*  <tr>
                                            <th>Saldo Pendiente </th>
                                            <td><strong> LPS. {(parseFloat(payment?.balance)).toFixed(2)}</strong></td>
                                        </tr> */}
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
       
            </ModalBody>
            <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={toggle}>Cerrar</Button>
            </ModalFooter>
        </Modal>

 
    )
}

export default PagoView
