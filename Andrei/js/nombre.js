var WEEK_DAYS_ES = "domingo lunes martes miércoles jueves viernes sábado",
MONTHS_ES =  "enero febrero marzo abril mayo junio julio agosto  +
septiembre octubre noviembre diciembre" ;

function completa(nombre,apellido) {
    var fecha = new Date(),
    //Calcular los dias restantes del año
    anioFinal=new Date(fecha.getFullYear(), 11, 31),
    anioFinal.setFullYear(anioFinal.getFullYear()),
    primerDia=1000*60*60*24,
    diasRestantes = Math.ceil((anioFinal.getTime()-fecha.getTime())/(primerDia)),

    diaSem = fecha.getUTCDay(),
    diaMes = fecha.getUTCDate(),
    mes = fecha.getUTCMonth(),
    hora = fecha.toLocaleTimeString(),
    anio = fecha.getUTCFullYear(),
    dias = DIAS_SEMANA.split(" "),
    meses = MONTHS_ES.split(" "),
    parrafo = "Hola " + nombre + "\n",
    parrafo += "Hoy es " + dias[diaSem] + ", " + diaMes + " de " + meses[mes] +
    " de " + anio + " y son las " + hora + " horas, por lo tanto faltan " +diasRestantes;
    return parrafo;

}