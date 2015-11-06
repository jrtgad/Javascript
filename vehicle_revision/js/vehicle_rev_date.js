function showVehicleRevisionStatus(queryString) {
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
    } else if (checkDate(lastrevdate, today) === -1) {
        greetings = ERR_DATE_MAT;
        revisionMsg = "";
        osBrowser = "";
    } else if (checkDate(lastrevdate, today) === 1) {
        greetings = getHourOfDay(today);
        revisionMsg = revisionCompany(COMPANIES);
        osBrowser = getOs(getSystemInfo()) + ", " +
                        getBrowser(getSystemInfo());
    } else {
        greetings = getHourOfDay(today);
        revisionMsg = NO_REVISION;
        osBrowser = getOs(getSystemInfo()) + ", " +
                        getBrowser(getSystemInfo());
    }

    return [greetings, revisionMsg, osBrowser];
}