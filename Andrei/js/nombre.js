var WEEK_DAYS_ES = "domingo lunes martes miércoles jueves viernes sábado",
    MONTHS_ES = "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre",
    NEXTLINE = "\n",
    SO = (navigator.oscpu).split(";"),
    SBROWSER, SUSRAG = navigator.userAgent;

function completa(nombre, apellido) {
    var fecha = new Date(),
        parrafo = "Hola " + nombre + NEXTLINE,

        //Calcular los dias restantes del año
        anioFinal = new Date(fecha.getFullYear(), 11, 31),
        msADias = 1000 * 60 * 60 * 24,

        apellidosLength = 0,
        apellidos = apellido.split(" "),
        
    i = 0;
    while (apellidos[i]) {
        apellidosLength += apellidos[i].length;
        i += 1;
    }

        /*for (var i = 0; i <= apellidos.lastIndex; i++) {
            apellidosLength += apellidos[$i].length;
        }*/

        diaSem = fecha.getUTCDay(),
        diaMes = fecha.getUTCDate(),
        mes = fecha.getUTCMonth(),
        hora = fecha.toLocaleTimeString(),
        anio = fecha.getUTCFullYear(),
        dias = WEEK_DAYS_ES.split(" "),
        meses = MONTHS_ES.split(" "),
        diasRestantes = Math.ceil((anioFinal.getTime() - fecha.getTime()) / msADias);

    parrafo += "Hoy es " + dias[diaSem] + ", " + diaMes + " de " + meses[mes];
    parrafo += " de " + anio + " y son las " + hora + " horas, por lo tanto faltan " + diasRestantes;
    parrafo += " para finalizar el año" + NEXTLINE + "Tus apellidos tienen un total de ";
    parrafo += apellidosLength + " letras";

    if (SUSRAG.indexOf("Chrome") > -1) {
        SBROWSER = "Google Chrome";
    } else if (SUSRAG.indexOf("Safari") > -1) {
        SBROWSER = "Apple Safari";
    } else if (SUSRAG.indexOf("Opera") > -1) {
        SBROWSER = "Opera";
    } else if (SUSRAG.indexOf("Firefox") > -1) {
        SBROWSER = "Mozilla Firefox";
    } else if (SUSRAG.indexOf("MSIE") > -1) {
        SBROWSER = "Microsoft Internet Explorer";
    }

    parrafo += NEXTLINE + "Utilizas el navegador " + SBROWSER;
    parrafo += " en su versión " + navigator.appCodeName + " con el SO " + SO[0];
    parrafo += NEXTLINE + "Está trabajando ";
    parrafo += navigator.onLine ? "con" : "sin";
    parrafo += " conexión.";

    return parrafo;
}