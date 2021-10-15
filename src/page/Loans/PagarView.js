import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { URL_API } from '../../config/config';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

function PagarView(props) {
  let history = useHistory();

  const { paymentID, setViewPagar, frecuency, idLoan, idRequest, tasa } = props;
  const [payment, setPayment] = useState([]);
  const [descuento, setDescuento] = useState(0);
  const [otherPay, setOtherPay] = useState(0);
  const [valorRequerido, setValorRequerido] = useState(0);

  const [totalDeuda, setTotalDeuda] = useState(0);
  const [diasDemora, setDiasDemora] = useState(0);
  const [totalMora, setTotalMora] = useState(0);
  const [amountPayed, setAmountPayed] = useState(0);
  const [methodPayed, setMethodPayed] = useState('Efectivo');

  const [modal, setModal] = useState(true);
  const paymentIDString = paymentID;

  const toggle = () => {
    setModal(!modal);
    setViewPagar(false);
  };

  useEffect(() => {
    GetPayment();
  }, []);

  const GetPayment = async () => {
    const resp_payment = await Axios.get(
      URL_API + '/payments/findPaymentsById/' + paymentID
    );

    setPayment(resp_payment.data.payment);
    DiasDeMora(resp_payment.data.payment.dateToPay);
    CalcularMora(
      resp_payment.data.payment.dateToPay,
      resp_payment.data.payment.amountToPay
    );
  };

  //Funcion para ver el nombre del dia
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  const NombreDay = (date) => {
    let numeroDia = new Date(date).getDay();
    let nombreDia = dias[numeroDia];
    return nombreDia;
  };

  const FormatDate = (fecha) => {
    let fechaI = new Date(fecha);
    let day = fechaI.getDate();
    let month = fechaI.getMonth() + 1;
    let year = fechaI.getFullYear();
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    let dateF = '';

    switch (parseInt(month)) {
      case 1:
        month = 'Ene';
        break;
      case 2:
        month = 'Feb';
        break;
      case 3:
        month = 'Mar';
        break;
      case 4:
        month = 'Abr';
        break;
      case 5:
        month = 'May';
        break;
      case 6:
        month = 'Jun';
        break;
      case 7:
        month = 'Jul';
        break;
      case 8:
        month = 'Ago';
        break;
      case 9:
        month = 'Sep';
        break;
      case 10:
        month = 'Oct';
        break;
      case 11:
        month = 'Nov';
        break;
      case 12:
        month = 'Dic';
        break;
      default:
        month = '---';
        break;
    }
    dateF = day + '-' + month + '-' + year;
    return dateF;
  };

  const handleInputSelect = ({ target }) => {
    setMethodPayed(target.value);
  };

  const DiasDeMora = (dayToPay) => {
    let fechaFin = moment(); //today
    let fechaI = moment(dayToPay);

    let duration = fechaFin.diff(fechaI, 'days');

    //DiasTotaldemora+=duration
    //Se aumenta un dias para que incluya el dia de hoy
    setDiasDemora(duration + 1);
    //return duration + ' dias'
  };

  const CalcularMora = (dayToPay, cuota) => {
    let moradiaria = 0;

    let fechaFin = moment(); //today
    let fechaI = moment(dayToPay);
    let duration = fechaFin.diff(fechaI, 'days');
    duration = parseInt(duration) + 1;

    console.log('Duracion=' + duration);

    let mora = 0.0;
    if (duration > parseInt(frecuency)) {
      mora = (cuota * 0.03).toFixed(2);
      moradiaria = (parseFloat(mora) / parseInt(frecuency)).toFixed(2);
    }

    let moraDeCuotaString = (parseFloat(moradiaria) * duration).toFixed(2);
    let moraDeCuota = parseFloat(moraDeCuotaString);
    //totalMora+= parseFloat(moradiaria) * (duration)

    //totalDeuda = parseFloat(cuota) + parseFloat(moraDeCuota)
    setTotalDeuda(parseFloat(cuota) + parseFloat(moraDeCuota));
    setTotalMora(moraDeCuota);
    //Arraymora.push({cuota,moraDeCuota,duration,fechaI})

    //return parseFloat(moradiaria) * (duration)
  };

  const handleDescuento = ({ target }) => {
    let des = 0;

    if (target.value !== '') {
      des = parseFloat(target.value);
    } else {
      des = 0;
    }
    setDescuento(des);
    updateRequerido('desc', des);
  };

  const handleOtherPay = ({ target }) => {
    let other = 0;

    if (target.value !== '') {
      other = parseFloat(target.value);
    } else {
      other = 0;
    }
    setOtherPay(other);
    updateRequerido('other', other);
  };

  const updateRequerido = (action, value) => {
    //console.log(action + "---" +parseFloat(totalDeuda) + "---"+parseFloat(otherPay)+"---"+parseFloat(descuento))

    let valor = 0;
    if (action === 'other') {
      valor =
        parseFloat(totalDeuda) + parseFloat(value) - parseFloat(descuento);
    }
    if (action === 'desc') {
      valor = parseFloat(totalDeuda) + parseFloat(otherPay) - parseFloat(value);
    }
    //if(action ==="init"){valor = parseFloat(totalDeuda) + parseFloat(otherPay) - parseFloat(descuento)}

    setValorRequerido(valor);
  };

  const handleAmountPayed = ({ target }) => {
    let val = 0;

    if (target.value !== '') {
      val = parseFloat(target.value);
    } else {
      val = 0;
    }
    setAmountPayed(val);
    // updateRequerido("desc",des)
  };

  const Pagar = async () => {
    if (parseFloat(amountPayed) !== 0) {
      //en el caso de pagar exactamente lo que debe de pagar
      //if(parseFloat(amountPayed).toFixed(2) >=  ((parseFloat(totalDeuda) + parseFloat(otherPay) - parseFloat(descuento)).toFixed(2))){

      //let intereses = (parseFloat(payment.amountToPay) * (parseFloat(tasa)/100)).toFixed(2)
      //let capital = (parseFloat(amountPayed) - parseFloat(intereses) - parseFloat(totalMora)).toFixed(2)

      let dataPayment = {
        /*amountToCapital:capital,
                    amountToInteres:intereses,*/
        amountPayed: parseFloat(amountPayed).toFixed(2),
        amountToMora: parseFloat(totalMora).toFixed(2),
        otherPay: parseFloat(otherPay).toFixed(2),
        discount: parseFloat(descuento).toFixed(2),
        methodPayed: methodPayed,
        frecuency: frecuency,
      };

      console.log('paymentIDString=' + paymentIDString);

      try {
        console.log('1');
        await Axios.put(
          URL_API + '/payments/updateState/' + paymentIDString,
          dataPayment
        );
        setModal(!modal);
        setViewPagar(false);

        history.push(history.location.pathname);
      } catch (error) {
        console.log(error);
      }
      //}
    } else {
      alert('Ingresar un Valor a Pagar');
    }
  };

  const today = moment();

  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Registro de Pago </ModalHeader>
      <ModalBody>
        <div className="col-sm-12 col-md-12">
          <div className="card card-contact borderless-card">
            <div className="card-block table-border-style">
              <div className="table-responsive">
                <table className="table table-hover">
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-6"
                      style={{ textAlign: 'center' }}
                    >
                      <h3 className="input-group-text">Valor Requerido</h3>

                      <div style={{ textAlign: 'center' }}>
                        <h3 htmlFor="">
                          LPS.{' '}
                          {(
                            parseFloat(totalDeuda) +
                            parseFloat(otherPay) -
                            parseFloat(descuento) -
                            parseFloat(payment.amountPayed)
                          ).toFixed(2)}
                        </h3>
                      </div>

                      <hr />

                      <div className="d-flex m-auto" style={{ width: '90%' }}>
                        <div className="input-group input-group-lg">
                          <input
                            value={amountPayed}
                            name="amountPayed"
                            onChange={handleAmountPayed}
                            type="number"
                            min="0"
                            className="form-control"
                            placeholder="Cantidad a Pagar"
                            style={{ border: '3px solid green' }}
                          />
                        </div>
                      </div>
                      <label>Tipo de Pago</label>
                      <div className="d-flex m-auto" style={{ width: '80%' }}>
                        <select
                          value={methodPayed}
                          onChange={handleInputSelect}
                          name="methodPayed"
                          id="methodPayed"
                          className="form-control m-t-5"
                        >
                          <option selected value="Efectivo">
                            Pago en Efectivo
                          </option>
                          <option value="Targeta">Pago con Targeta</option>
                          <option value="Deposito">Pago con Deposito</option>
                          <option value="Cheque">Pago con Cheque</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 ">
                      {/*  <label >Valor a Pagar</label> */}
                      <div
                        className="input-group input-group-lg"
                        style={{ width: '90%' }}
                      >
                        <button
                          onClick={() => Pagar()}
                          style={{ width: '100%' }}
                          className="btn btn-lg btn-success"
                        >
                          PAGAR
                        </button>
                      </div>

                      <label>Otro Pago</label>
                      <div
                        className="input-group input-group-lg"
                        style={{ width: '90%' }}
                      >
                        <input
                          value={otherPay}
                          name="otherpay"
                          onChange={handleOtherPay}
                          type="number"
                          min="0"
                          className="form-control"
                          placeholder="Registrar Otro pago"
                        />
                      </div>

                      <label>Descuento</label>
                      <div
                        className="input-group input-group-lg"
                        style={{ width: '90%' }}
                      >
                        <input
                          value={descuento}
                          name="discount"
                          onChange={handleDescuento}
                          type="number"
                          min="0"
                          className="form-control"
                          placeholder="Valor de Descuento"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <div className="table-responsive ">
                      <table className="table ">
                        <thead>
                          <th scope="col">Estado</th>
                          <th scope="col">Cuota</th>
                          <th scope="col">Dias</th>
                          <th scope="col">Mora</th>
                          <th scope="col">Otros</th>
                          <th scope="col">Desc.</th>
                          <th scope="col">Abono</th>
                          <th>Total</th>
                        </thead>
                        <tbody>
                          {new Date(payment.dateToPay).getTime() < today ? ( //pago retrasado
                            <tr>
                              <td scope="col" style={{ color: 'red' }}>
                                Pago Atrasado{' '}
                                <p>
                                  del {NombreDay(new Date(payment?.dateToPay))}
                                </p>
                                <p> {FormatDate(payment?.dateToPay)} </p>
                              </td>

                              <td scope="col">
                                LPS.{' '}
                                {parseFloat(payment?.amountToPay).toFixed(2)}{' '}
                              </td>

                              {/*    <td scope="col" > <p>{ DiasDeMora(payment?.dateToPay)} </p> <p> { " de retraso"}</p>  </td>
                                            
                                                    <td scope="col">LPS. {(CalcularMora(payment?.dateToPay,payment?.amountToPay)).toFixed(2)} </td> */}
                              <td scope="col">
                                {' '}
                                <p>{diasDemora} </p> <p> {' de retraso'}</p>{' '}
                              </td>

                              <td scope="col">LPS. {totalMora.toFixed(2)} </td>

                              <td scope="col">LPS. {otherPay} </td>

                              <td scope="col">LPS. {descuento} </td>

                              <td scope="col">
                                LPS.{' '}
                                {parseFloat(payment?.amountPayed).toFixed(2)}{' '}
                              </td>

                              {payment?.amountPayed > 0 ? (
                                <td scope="col">
                                  LPS.{' '}
                                  {(
                                    parseFloat(totalDeuda) +
                                    parseFloat(otherPay) -
                                    parseFloat(descuento) -
                                    parseFloat(payment?.amountPayed).toFixed(2)
                                  ).toFixed(2)}
                                </td>
                              ) : (
                                <td scope="col">
                                  LPS.{' '}
                                  {(
                                    parseFloat(totalDeuda) +
                                    parseFloat(otherPay) -
                                    parseFloat(descuento)
                                  ).toFixed(2)}
                                </td>
                              )}
                            </tr>
                          ) : (
                            //proximo pago sin atraso

                            <tr>
                              <td scope="col" style={{ color: 'green' }}>
                                Próximo Pago{' '}
                                {NombreDay(new Date(payment?.dateToPay))}{' '}
                                <p>{FormatDate(payment?.dateToPay)} </p>
                              </td>

                              <td scope="col">
                                LPS.{' '}
                                {parseFloat(payment?.amountToPay).toFixed(2)}{' '}
                              </td>

                              <td scope="col"> {'0 dias de retraso'} </td>

                              <td scope="col">LPS. 0 </td>

                              <td scope="col">LPS. {otherPay} </td>

                              <td scope="col">LPS. {descuento}</td>

                              {payment?.amountPayed > 0 ? (
                                <td scope="col">
                                  LPS.{' '}
                                  {(
                                    parseFloat(totalDeuda) +
                                    parseFloat(otherPay) -
                                    parseFloat(descuento) -
                                    parseFloat(payment?.amountPayed)
                                  ).toFixed(2)}
                                </td>
                              ) : (
                                <td scope="col">
                                  LPS.{' '}
                                  {(
                                    parseFloat(totalDeuda) +
                                    parseFloat(otherPay) -
                                    parseFloat(descuento)
                                  ).toFixed(2)}
                                </td>
                              )}
                            </tr>
                          )}

                          {
                            <tr>
                              <td>#</td>
                              <td>
                                <strong>Total a Pagar</strong>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>
                                <strong>
                                  LPS.{' '}
                                  {(
                                    parseFloat(totalDeuda) +
                                    parseFloat(otherPay) -
                                    parseFloat(descuento) -
                                    parseFloat(payment?.amountPayed)
                                  ).toFixed(2)}
                                </strong>
                              </td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
        <Button color="secondary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default PagarView;
