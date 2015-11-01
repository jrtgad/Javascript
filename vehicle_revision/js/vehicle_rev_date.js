function showVehicleRevisionStatus(string) {
    //Recibe ?mat=string&rev=string
  var vars = getVars(string),
        numberplate = vars[0],
        lastrevdate = vars[1],
        today = new Date(),
        Actualday = today.getUTCDate(),
        Actualmonth = today.getUTCMonth() + 1,
        Actualyear = today.getUTCFullYear(),
        output;

            !validatePlate(numberplate) ? output = ERR_MAT :
            !checkDates(lastrevdate) ? output = ERR_MAT :

    return output;
}

function validatePlate(mat) {
  var template = new RegExp("^[0-9]{4}[- ]?[A-Z]{3}$| ^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
                             "i");
   /*/^[0-9]{4}-?[A-Z]{3}$/  También vale*/
  return template.test(mat);
}

function getVars(stringVars) {
  var value1 = stringVars.subString(stringVars.indexOf("mat=") + 4, stringVars.indexOf("&")),
      value2 = stringVars.subString(stringVars.indexOf("rev=") + 4, stringVars.length);

  return [value1, value2];
}

function checkDate(date) {

}

function monthStringToNumber(month) {
  switch (monthLetters) {
    case "jan":
        monthNumber = 1;
        maxdays = 31;
        break;
    case "feb":
        monthNumber = 2;
        maxdays = leap ? 29 : 28;
        break;
    case "mar":
        monthNumber = 3;
        maxdays = 31;
        break;
    case "apr":
        monthNumber = 4;
        maxdays = 30;
        break;
    case "may":
        monthNumber = 5;
        maxdays = 31;
        break;
    case "jun":
        monthNumber = 6;
        maxdays = 30;
        break;
    case "jul":
        monthNumber = 7;
        maxdays = 31;
        break;
    case "aug":
        monthNumber = 8;
        maxdays = 31;
        break;
    case "sep":
        monthNumber = 9;
        maxdays = 30;
        break;
    case "oct":
        monthNumber = 10;
        maxdays = 31;
        break;
    case "nov":
        monthNumber = 11;
        maxdays = 30;
        break;
    case "dec":
        monthNumber = 12;
        maxdays = 31;
        break;
    default:
        monthNumber = 0;
        break;
    }
    return [monthNumber, maxdays];
}
