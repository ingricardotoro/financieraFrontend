export const calcularAmortizacionNC = (CapitalInicial, Tasa, TipoTasa, Quotas, TipoInteres, Frequency, DateStart, loanId) => {

    console.log("F2=", DateStart)
    let cuotasArray = []
    let Capitalfinal = 0.0
    let InteresSemanal = 0.0
    let AbonoCapital = 0.0
    let SaldoFinal = 0.0
    let TotaldeInteres = 0.0
    let TotalAbonoCapital = 0.0,
        TotaldeCuotas = 0.0,
        TotaldeInteres2 = 0.0
    let Close = 0.0 //Para guardar el valor a prestar mas el costo de cierre
    let tasa = 0.0
    let SaldoInicial = 0.0
    let periodos = 0,
        contador = 0,
        days = 7
        //let fecha = new Date (Date(DateStart));  
    let fecha = Date.parse(DateStart) + 1;
    fecha = new Date(fecha);
    fecha.setDate(fecha.getDate() + 1)

    console.log("F3=", fecha)

    //Obtenemos el valor de la tasa mensual
    if (TipoTasa === 'Mensual') {
        tasa = parseInt(Tasa) / 100
    } else if (TipoTasa === 'Anual') {
        tasa = (parseInt(Tasa) / 12) / 100
    }

    //Obtenemos el Valor del Costo de Cierre
    if (parseFloat(CapitalInicial) >= 5000) {
        Close = +parseFloat(CapitalInicial) * 0.04
    } else {
        Close = 200
    }

    //Calculo de los Periodos, redondeamos al entero mas alto, 10/4  = 3,  13/4  =4
    if (Frequency === 'Mensual') {
        periodos = parseInt(Quotas)
        days = 30
    } else if (Frequency === 'Quincenal') {
        periodos = Math.ceil(parseInt(Quotas) / 2)
        days = 14
    } else if (Frequency === 'Semanal') {
        periodos = Math.ceil(parseInt(Quotas) / 4)
        days = 7
    }

    if (Frequency === 'Semanal') { contador = 4 }
    if (Frequency === 'Quincenal') { contador = 2 }
    if (Frequency === 'Mensual') { contador = 1 }

    let quotaRows = [] // arreglo de objetos

    //Calculo del interes Compuesto mediante numero de cuotas
    if (TipoInteres === 'Compuesto') {

        CapitalInicial = parseFloat(CapitalInicial) + (parseFloat(Close)) //3200 //este valor ira cambiando
            //let CapitalInicial1=parseFloat(CapitalInicial) + (parseFloat(Close))//3200 se usa este valor al finalnuevamente
            //Calculo de Interes Total Compuesto
        TotaldeInteres = (CapitalInicial * (Math.pow((1 + tasa), periodos) - 1)) //F4
            //Calculo del valor de la cuota
        let quotaValue = ((parseFloat(CapitalInicial) + parseFloat(TotaldeInteres)) / Quotas) //f4

        SaldoInicial = CapitalInicial //3200
        SaldoFinal = CapitalInicial //3200 Solo para que el while de inicio debe ser distinto de 0

        let cont = 0

        while (SaldoFinal !== 0) {

            Capitalfinal = (parseFloat(CapitalInicial) + parseFloat(CapitalInicial * tasa)) //3520 f2
            InteresSemanal = ((CapitalInicial * tasa) / contador) //80 f2
            AbonoCapital = (parseFloat(quotaValue) - parseFloat(InteresSemanal)) //f3

            for (let i = 0; i < contador; i++) {

                if (SaldoInicial !== 0) {

                    //Localizamos la penultima fila para prepara el valor de cuota de pago de la ultima fila
                    if (parseFloat(SaldoFinal) + parseFloat(InteresSemanal) < quotaValue) {

                        AbonoCapital = SaldoFinal
                        quotaValue = AbonoCapital + InteresSemanal
                    }

                    TotaldeInteres2 += parseFloat(InteresSemanal)
                    TotaldeCuotas += parseFloat(quotaValue)
                    TotalAbonoCapital += parseFloat(AbonoCapital)

                    SaldoFinal = ((SaldoInicial) - (AbonoCapital)) //f3

                    //fecha.setDate(fecha.getDate()+days)
                    //fecha.toLocaleDateString()
                    //Lo guardamos en el arreglo de objetos
                    //console.log("F=", DateStart)

                    quotaRows[cont] = {
                        cont: cont + 1,
                        SaldoInicial: SaldoInicial, //3200
                        InteresSemanal: InteresSemanal, //80
                        quotaValue: quotaValue, //354
                        AbonoCapital: AbonoCapital, //274
                        SaldoFinal: SaldoFinal,
                        fecha: fecha.setDate(fecha.getDate() + days)
                    }

                    console.log("FX=", fecha)
                        //Para la tabla de amortizacion de Prestamo
                    cuotasArray[cont] = {
                        loanId: loanId,
                        code: cont + 1,
                        dateToPay: fecha.setDate(fecha.getDate()),
                        amountToPay: parseFloat((quotaValue).toFixed(2)),
                        amountToCapital: parseFloat((AbonoCapital).toFixed(2)),
                        amountToInteres: parseFloat((InteresSemanal).toFixed(2)),
                    }

                    SaldoInicial = SaldoFinal
                    cont += 1

                    CapitalInicial = Capitalfinal
                }

            }
        }
    }
    //console.log(cuotasArray)
    return cuotasArray

}