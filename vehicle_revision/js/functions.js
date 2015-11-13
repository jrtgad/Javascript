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

function getSystemInfo() {
    return window.navigator.userAgent;
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

function getHourOfDay(date) {
    var hour = date.getHours(),
        msg = hour < 13 ? "Buenos días" :
                hour < 20 ? "Buenas tardes" : "Buenas noches";

    return msg;
}

function revisionCompany(COMPANIES) {
    var companies = COMPANIES.split("|"),
        num = Math.floor(Math.random() * companies.length);

    return companies[num];
}

function validatePlate(mat) {
    var template =
        new RegExp("^[0-9]{4}-?[A-Z]{3}$|^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
                                 "i");

    return template.test(mat);
}

function getVars(queryString, varName) {
    var varString,
        i,
        afterVar = queryString.indexOf(varName) + varName.length + 1,
        anyAmpersand = 0;
    if (queryString.indexOf(varName) !== -1) {
        for (i = afterVar; i < queryString.length; i += 1) {
            if (queryString[i] === "&") {
                anyAmpersand += 1;
                i = queryString.length + 1;
            }
        }

        if (anyAmpersand) {
            varString = queryString.substring(afterVar, queryString.indexOf("&"));
        } else {
            varString = queryString.substring(afterVar, queryString.length);
        }
    } else {
        varString = "";
    }
    return varString;
}

function daysSinceRevision(diffInMS) {
    return Math.floor(diffInMS / MSECTODAYS);
}

function checkDate(date, today) {
    var validDate,
        lastrevdate,
        actualDate,
        day = +(date[0] + date[1]),
        month = date[2] + date[3] + date[4],
        monthNumber = (MONTH_STRING.indexOf(month) / 3),
        year = +(date[5] + date[6] + date[7] + date[8]),
        validDay = (day <= 31 && day > 0),
        validMonth = (MONTH_STRING.indexOf(month) % 3),
        validYear = (year > 0);

    if (validDay && !validMonth && validYear) {
        lastrevdate = new Date(year, monthNumber, day);
        actualDate = new Date(today);

        if (lastrevdate > actualDate) {
            validDate = -1;
        } else if (daysSinceRevision(actualDate - lastrevdate) > 365) {
            validDate = 1;
        } else {
            validDate = 2;
        }
    } else {
        validDate = -1;
    }
    return validDate;
}
