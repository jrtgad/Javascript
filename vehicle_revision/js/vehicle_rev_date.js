function showVehicleRevisionStatus(queryString) {
    //Recibe ?mat=queryString&rev=queryString
    var numberplate = getVars(queryString, "numberplate"),
        lastrevdate = getVars(queryString, "lastrevdate"),
        today = new Date(),
        greetings,
        revisionMsg,
        osBrowser;

    if (!validatePlate(numberplate)) {
        greetings = ERR_MAT;
        revisionMsg = "";
        osBrowser = "";
    } else if (!checkDate(lastrevdate, today)) {
        greetings = ERR_DATE_MAT;
        revisionMsg = "";
        osBrowser = "";
    } else if (checkDate(lastrevdate, today) === 1) {
        greetings = getHourOfDay(today);
        revisionMsg = NO_REV;
        osBrowser = getOs(INFO_SYSTEM) + ", " + getBrowser(INFO_SYSTEM);
    } else {
        revisionCompany(COMPANIES);
    }

    return [greetings, revisionMsg, osBrowser];
}