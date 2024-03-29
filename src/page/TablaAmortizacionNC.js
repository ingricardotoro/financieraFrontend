import React from 'react'
import { Fragment } from 'react'

//Tabla de amortizacion por numero de cuotas
function TablaAmortizacionNC(props) {

    let {CapitalInicial,Tasa,TipoTasa,Quotas,TipoInteres, Frequency, DateStart} = props
    //let CapitalInicial = 0.0 
    let Capitalfinal=0.0
    let InteresSemanal = 0.0
    let AbonoCapital = 0.0
    let SaldoFinal = 0.0 
    let TotaldeInteres =0.0
    let TotalAbonoCapital=0.0, TotaldeCuotas=0.0,TotaldeInteres2=0.0
    let Close=0.0 //Para guardar el valor a prestar mas el costo de cierre
    let tasa=0.0
    let SaldoInicial=0.0
    let periodos=0, contador=0, days=7
    //let fecha = new Date (Date(DateStart));  
    let fecha = Date.parse(DateStart)+1;
	fecha = new Date(fecha);
    fecha.setDate(fecha.getDate()+1)

    //Obtenemos el valor de la tasa mensual
    if(TipoTasa==='Mensual'){
        tasa=parseInt(Tasa)/100
    }else if(TipoTasa==='Anual'){
        tasa=(parseInt(Tasa)/12)/100
    }

    //Obtenemos el Valor del Costo de Cierre
    if(parseFloat(CapitalInicial)>=5000){
        Close=+parseFloat(CapitalInicial)*0.04
    }else{
        Close=200
    }

    //Calculo de los Periodos, redondeamos al entero mas alto, 10/4  = 3,  13/4  =4
    if(Frequency==='Mensual'){ 
        periodos=parseInt(Quotas) 
        days=30
    }else if(Frequency==='Quincenal'){
        periodos=Math.ceil(parseInt(Quotas) /2)
        days=14
    }else if(Frequency==='Semanal'){
        periodos=Math.ceil(parseInt(Quotas) /4)
        days=7
    } 

    if(Frequency==='Semanal'){contador=4}
    if(Frequency==='Quincenal'){contador=2}
    if(Frequency==='Mensual'){contador=1}

    let quotaRows=[] // arreglo de objetos

    //Calculo del interes Compuesto mediante numero de cuotas
    if(TipoInteres === 'Compuesto'){

            CapitalInicial=parseFloat(CapitalInicial) + (parseFloat(Close))//3200 //este valor ira cambiando
            //let CapitalInicial1=parseFloat(CapitalInicial) + (parseFloat(Close))//3200 se usa este valor al finalnuevamente
            //Calculo de Interes Total Compuesto
            TotaldeInteres = (CapitalInicial*(Math.pow((1+tasa),periodos)-1))//F4
            //Calculo del valor de la cuota
            let quotaValue = ((parseFloat(CapitalInicial) + parseFloat(TotaldeInteres) ) / Quotas)//f4

            SaldoInicial=CapitalInicial //3200
            SaldoFinal=CapitalInicial //3200 Solo para que el while de inicio debe ser distinto de 0

            let cont=0

            while (SaldoFinal!==0) {  

                Capitalfinal = (parseFloat(CapitalInicial) + parseFloat(CapitalInicial*tasa)) //3520 f2
                InteresSemanal=((CapitalInicial*tasa)/contador) //80 f2
                AbonoCapital = (parseFloat(quotaValue) - parseFloat(InteresSemanal))//f3
                
                for (let i = 0; i < contador; i++) {

                    if(SaldoInicial!==0){
                    
                        //Localizamos la penultima fila para prepara el valor de cuota de pago de la ultima fila
                        if(parseFloat(SaldoFinal)+parseFloat(InteresSemanal) < quotaValue){
                          
                            AbonoCapital = SaldoFinal
                            quotaValue = AbonoCapital + InteresSemanal
                        }

                        TotaldeInteres2+=parseFloat(InteresSemanal)
                        TotaldeCuotas+=parseFloat(quotaValue)
                        TotalAbonoCapital+=parseFloat(AbonoCapital)
                        
                        SaldoFinal = ((SaldoInicial) -(AbonoCapital))//f3
                        
                        //fecha.setDate(fecha.getDate()+days)
                        //fecha.toLocaleDateString()
                        //Lo guardamos en el arreglo de objetos
                        if(cont === 0){
                            quotaRows[cont] = {
                                cont:cont+1,
                                SaldoInicial:SaldoInicial,//3200
                                InteresSemanal:InteresSemanal,//80
                                quotaValue:quotaValue,//354
                                AbonoCapital:AbonoCapital,//274
                                SaldoFinal:SaldoFinal,
                                fecha:fecha.setDate(fecha.getDate())
                            } 
                        }else{

                            quotaRows[cont] = {
                                cont:cont+1,
                                SaldoInicial:SaldoInicial,//3200
                                InteresSemanal:InteresSemanal,//80
                                quotaValue:quotaValue,//354
                                AbonoCapital:AbonoCapital,//274
                                SaldoFinal:SaldoFinal,
                                fecha:fecha.setDate(fecha.getDate()+days)
                            } 
                        }

                        SaldoInicial= SaldoFinal
                        cont+=1 
                    
                        CapitalInicial = Capitalfinal
                    }

                }
            }

    }


    const formatter = new Intl.NumberFormat('es-HN', {
        style: 'currency',
        currency: 'LPS',
        minimumFractionDigits: 2
      })

      const dias = ['domingo', 'lunes', 'martes','miércoles','jueves','viernes','sábado', 'domingo',];
      //funcion para obtener el nombre del
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

        return dateF  = day + '-' + month + '-' + year;    
    }

    return (
        <Fragment>
        <p>Tabla de Amortización por Número de Cuotas</p>
        <table className="table table-bordered table-hover">
            <thead className="table-ligth" >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fechas</th>
                    <th scope="col">Saldo Inicial</th>
                    <th scope="col">Cuota</th>
                    <th scope="col">Interes</th>
                    <th scope="col">Abono Capital</th>
                    <th scope="col">Saldo Final</th>
                </tr>
            </thead>
            <tbody>
               {
                   quotaRows.map((cuota,i)=>(
                    <tr key={i}>
                        <th scope="row">{cuota.cont} </th>
                        <td>{NombreDay(fecha) +" "+ FormatDate(new Date(cuota.fecha))}</td>
                        <td>{formatter.format((cuota.SaldoInicial).toFixed(2))}</td>
                        <td>{formatter.format(((cuota.quotaValue).toFixed(2)))}</td>
                        <td>{formatter.format(((cuota.InteresSemanal).toFixed(2)))}</td>
                        <td>{formatter.format(((cuota.AbonoCapital).toFixed(2)))}</td>
                        <td>{formatter.format(((cuota.SaldoFinal).toFixed(2)))}</td>
                    </tr>
                   ))
               }
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row"> </th>
                    <td></td>
                    <th>{formatter.format(((TotaldeCuotas).toFixed(2)))}</th   >
                    <th>{formatter.format(((TotaldeInteres2).toFixed(2)))}</th >
                    <th>{formatter.format(((TotalAbonoCapital).toFixed(2)))}</th   >
                    <td></td>
                </tr>
            </tfoot>
        </table>
        
        </Fragment>

    )
}

export default TablaAmortizacionNC
