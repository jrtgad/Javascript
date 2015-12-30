function dateToday() {
    var today = new Date(),
        dayNum = today.getDate(),
        day = today.getDay(),
        monthNum = today.getMonth() + 1,
        year = today.getFullYear(),
        hour = today.getHours(),
        minutes = today.getMinutes();

    switch(day) {
    case 0:
        dayOfWeek = "domingo";
        break;
    case 1:
        dayOfWeek = "lunes";
        break;
    case 2:
        dayOfWeek = "martes";
        break;
    case 3:
        dayOfWeek = "miércoles";
        break;
    case 4:
        dayOfWeek = "jueves";
        break;
    case 5:
        dayOfWeek = "viernes";
        break;
    case 6:
        dayOfWeek = "sábado";
        break;
    }

    switch(monthNum) {
    case 0:
        monthOfYear = "enero"
        break;
    case 1:
        monthOfYear = "febrero"
        break;
    case 2:
        monthOfYear = "marzo";
        break;
    case 3:
        monthOfYear = "abril";
        break;
    case 4:
        monthOfYear = "mayo";
        break;
    case 5:
        monthOfYear = "junio";
        break;
    case 6:
        monthOfYear = "julio";
        break;
    case 7:
        monthOfYear = "agosto";
        break;
    case 8:
        monthOfYear = "septiembre";
        break;
    case 9:
        monthOfYear = "octubre";
        break;
    case 10:
        monthOfYear = "noviembre";
        break;
    case 11:
        monthOfYear = "diciembre";
        break;
    }

    return "Hoy es " + dayOfWeek + ", " + 
    dayNum + " de " + monthOfYear + " de " +
    year + " y son las " +
    hour + ":" + minutes;
}