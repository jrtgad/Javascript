/*function needRevision(revDate, actualDate) {
    var revMsg;

    return revMsg;
}*/

function getBrowser(info) {
    var browser;

    if (info.indexOf("OPR") !== -1) {
        browser = "Opera";
    } else if (info.indexOf("Firefox") !== -1) {
        browser = "Firefox";
    } else if (info.indexOf("Chromium") !== -1) {
        browser = "Chromium";
    } else if (info.indexOf("Edge") !== -1) {
        browser = "Microsoft Edge";
    }

    return browser;
}

function getOs(info) {
    var os;

    if (info.indexOf("Linux") !== -1) {
        os = "Linux";
    } else if (info.indexOf("Microsoft") !== -1) {
        os = "Microsoft";
    } else if (info.indexOf("Mac") !== -1) {
        os = "IOS";
    } else if (info.indexOf("Android") !== -1) {
        os = "Android";
    }

    return os;
}

function getGreeting(hour) {
    var msg = hour < 13 ? "Buenos días"   :
                hour < 18 ? "Buenas tardes" : "Buenas noches";
/*                  ^COMO IF??????^                 */

    return msg;
}

function revisionCompany(COMPANIES) {
    var companies = COMPANIES.split("|"),
        num = Math.floor(Math.random() * companies.length);

    return companies[num].trim();
}

function validatePlate(mat) {
    var template =
        new RegExp("^[0-9]{4}[- ]?[A-Z]{3}$|^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
                                 "i");
                                    /*/^[0-9]{4}-?[A-Z]{3}$/  También vale*/

    return template.test(mat);
}

function getVars(queryString, var1, var2) {
    var value1 = queryString.subString(queryString.indexOf(var1) + 4,
                                    queryString.indexOf("&")), /* || queryString.length*/

        value2 = queryString.subString(queryString.indexOf(var2) + 4,
                                    queryString.length);       /* || queryString.indexOf("&")*/

    return [value1.trim(), value2.trim()];
}

function checkDate(date) {
    var day = date[0] + date[1],
        month = date[2] + date[3] + date[4],
        year = date[5] + date[6] + date[7] + date[8],
        validDay = (day <= 31 || day > 0),
        validMonth = (MONTHS.indexOf(month.toLowerCase())) % 3,
        validYear = year > 0,

        /*.getTime() Recoge los ms de una fecha*/

    /*if (validDay && validMonth && validYear) {

    }*/

    return differenceOfDays;
}