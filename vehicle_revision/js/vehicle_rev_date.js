function showVehicleRevisionStatus(queryString) {
    //Recibe ?mat=queryString&rev=queryString
    var vars        = getVars(queryString),
        numberplate = vars[0],
        lastrevdate = vars[1],
        today       = new Date(),
        actualDay   = today.getUTCDate(),
        actualMonth = today.getUTCMonth() + 1,
        actualYear  = today.getUTCFullYear(),
        actualHour  = today.getHours(),
        greeting    = checkGreeting(actualHour),
        revisionMsg,
        osBrowser;

    !validatePlate(numberplate) ? revisionMsg = ERR_MAT :
    !checkDate(lastrevdate)     ? revisionMsg = ERR_DATE_MAT :
                                  revisionMsg = revision();

    osBrowser += getBrowser(window.navigator.userAgent);
    osBrowser += getOs(window.navigator.userAgent);

    return [greeting, revisionMsg, osBrowser];
}

function getBrowser(info) {
    var browser;

    if (info.indexOf("OPR") !== -1) {
        browser = "Opera, ";
    } else if (info.indexOf("Firefox") !== -1) {
        browser = "Firefox, ";
    } else if (info.indexOf("Chromium") !== -1) {
        browser = "Chromium, ";
    } else if (info.indexOf("Edge") !== -1) {
        browser = "Microsoft Edge, ";
    }

    return browser;
}

function getOs(info) {
    var os;

    if (info.indexOf("Linux") !== -1) {
        os = "Linux, ";
    } else if (info.indexOf("Microsoft") !== -1) {
        os = "Microsoft, ";
    } else if (info.indexOf("Mac") !== -1) {
        os = "IOS, ";
    } else if (info.indexOf("Android") !== -1) {
        os = "Android, ";
    }

    return os;
}

function checkGreeting(hour) {
    var msg = hour < 13 ? "Buenos días"   : 
              hour < 18 ? "Buenas tardes" : "Buenas noches";

    return msg;
}

function revision() {
    var num = Math.floor(Math.random() * 4),
        companies = trim(COMPANIES.split("|"));
    return companies[num];
}

function validatePlate(mat) {
    var template = new RegExp("^[0-9]{4}[- ]?[A-Z]{3}$|^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
                                 "i");
                                            /*/^[0-9]{4}-?[A-Z]{3}$/  También vale*/
    return template.test(mat);
}

function getVars(queryString) {
  var value1 = queryString.subString(queryString.indexOf("mat=") + 4,
                                    queryString.indexOf("&")),

      value2 = queryString.subString(queryString.indexOf("rev=") + 4,
                                    queryString.length);

  return [value1, value2];
}

function checkDate(date) {
    var day = date[0] + date[1],
        month = monthStringToNumber(date[2] + date[3] + date[4]),
        year = date[5] + date[6] + date[7] + date[8],
        valid;

    !month[0] ? valid = false : day > month[1] ? valid = false : valid = true;

    return valid;
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
    }
    return [monthNumber, maxdays];
}
