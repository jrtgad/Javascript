function calculateDaysSinceEpoch(date) {
    var contDays = 0,
        day = (date[0] + date[1]) * 1,
        monthLetters = date[2] + date[3] + date[4],
        year = 1 * (date[5] + date[6] + date[7] + date[8]),
        firstDay = 1,
        firstMonth = 1,
        firstYear = 1970,
        monthNumber,
        maxdays,
        output,
        FORMATO = "Por favor, introducir la fecha en el formato solicitado",
        NOVALIDA = "La fecha introducida no es válida";

    switch (monthLetters) {
    case "jan":
        monthNumber = 1;
        maxdays = 31;
        break;
    case "feb":
        monthNumber = 2;
        if (year % 4 && (year % 400 || !(year % 100))) {
            maxdays = 28;
        } else {
            maxdays = 29;
        }
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

    if (monthNumber === 0 || year <= 0 || (day < 1 || day > 31)) {
        output = FORMATO;
    } else {
        if (year < 1970 || day > maxdays) {
            output = NOVALIDA;
        } else {
            while ((firstYear <= year) && (firstMonth <= monthNumber) && (firstDay < day)) {
                

                switch (firstMonth) {
                case 1:
                    maxdays = 31;
                    break;
                case 2:
                    if (firstYear % 4 && (firstYear % 400 || !(firstYear % 100))) {
                        maxdays = 28;
                    } else {
                        maxdays = 29;
                    }
                    break;
                case 3:
                    maxdays = 31;
                    break;
                case 4:
                    maxdays = 30;
                    break;
                case 5:
                    maxdays = 31;
                    break;
                case 6:
                    maxdays = 30;
                    break;
                case 7:
                    maxdays = 31;
                    break;
                case 8:
                    maxdays = 31;
                    break;
                case 9:
                    maxdays = 30;
                    break;
                case 10:
                    maxdays = 31;
                    break;
                case 11:
                    maxdays = 30;
                    break;
                case 12:
                    maxdays = 31;
                    break;
                default:
                    monthNumber = 0;
                    break;
                }
                contDays += maxdays;
                firstMonth += 1;
                while (firstMonth === 13) {
                    firstYear += 1;
                    firstMonth = 1;
                }
                while (firstYear === year && firstMonth === monthNumber) {
                    contDays += day - firstDay;
                }
            }
            output = contDays;
        }
    }
    return output;
}