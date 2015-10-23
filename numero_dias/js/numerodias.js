function calculateDaysSinceEpoch(date) {
    var contDays = 0,
        day = (date[0] + date[1]) * 1,
        monthLetters = date[2] + date[3] + date[4],
        year = 1 * (date[5] + date[6] + date[7] + date[8]),
        monthNumber,
        maxdays,
        output,
        bis = (!(year % 4) && ((year % 100) || !(year % 400))),
        FIRSTDAY = 1,
        FIRSTMONTH = 1,
        FIRSTYEAR = 1970,
        FORMATO = "Por favor, introducir la fecha en el formato solicitado",
        NOVALIDA = "La fecha introducida no es válida";

        switch (monthLetters) {
    case "jan":
        monthNumber = 1;
        maxdays = 31;
        break;
    case "feb":
        monthNumber = 2;
        maxdays = bis ? 29 : 28;
        break;
    case "mar":
        monthNumber = 3;
        maxdays = 31;
        break;
    case "abr":
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

    if ((monthNumber === 0) || (year <= 0) || (day < 1 || day > 31)) {
        output = FORMATO;
    } else {
        if ((year < 1970) || (day > maxdays)) {
            output = NOVALIDA;
        } else {
            debugger;
            if (FIRSTYEAR === year && FIRSTMONTH === monthNumber) {
                contDays += day - FIRSTDAY;
            } else {
                while ((FIRSTYEAR <= year) && (FIRSTMONTH < monthNumber)) {
                debugger;
                    switch (FIRSTMONTH) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        maxdays = 31;
                        break;

                    case 2:
                        maxdays = bis ? 29 : 28;
                        break;

                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        maxdays = 30;
                        break;

                    default:
                        monthNumber = 0;
                        break;
                    }
                    contDays += maxdays;

                    if ((FIRSTMONTH + 1) === 13) {
                        FIRSTYEAR += 1;
                        FIRSTMONTH = 1;
                    } else {
                        FIRSTMONTH += 1;
                    }
                    
                    while ((FIRSTYEAR <= year) || (FIRSTMONTH < monthNumber)) {
                        switch (FIRSTMONTH) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            maxdays = 31;
                            break;

                        case 2:
                            maxdays = bis ? 29 : 28;
                            break;

                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            maxdays = 30;
                            break;

                        default:
                            monthNumber = 0;
                            break;
                        }

                        contDays += maxdays - FIRSTDAY;

                        if ((FIRSTMONTH + 1) === 13) {
                            FIRSTYEAR += 1;
                            FIRSTMONTH = 1;
                        } else {
                            FIRSTMONTH += 1;
                        }
                    }
                    contDays += day;
                }
            }
            output = contDays;
        }
    }
    return output;
}