function notNeedRevision(revDate, actualDate) {
    var revMsg;
    
    return revMsg;
}

function getBrowser(info) {
    var browser;

    if (info.indexOf("OPR") !== -1) {
        browser = "Opera";
    } else if (info.indexOf("Firefox") !== -1) {
        browser = "Mozilla Firefox";
    } else if (info.indexOf("Chromium") !== -1) {
        browser = "Chromium";
    } else if (info.indexOf("Edge") !== -1) {
        browser = "Microsoft Edge";
    } else if (info.indexOf("Chrome") !== -1) {
        browser = "Google Chrome";
    }

    return browser;
}

function getOs(info) {
    var os;

    if (info.indexOf("Linux") !== -1) {
        os = "Linux";
    } else if (info.indexOf("Windows") !== -1) {
        os = "Windows";
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

function getVars(queryString, varString) {
    var varString = queryString.subString(queryString.indexOf(varString) + varString.length + 1,
                                    queryString.indexOf("&")), 

    return varString.trim();
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
}