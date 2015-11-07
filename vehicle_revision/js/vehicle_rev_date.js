function showVehicleRevisionStatus(queryString) {
    var numberplate = getVars(queryString, "numberplate"),
        lastrevdate = getVars(queryString, "lastrevdate"),
        today = new Date(),
        greetings,
        revisionMsg = "",
        osBrowser = "";

    if (!validatePlate(numberplate)) {
        greetings = ERR_MAT;
    } else if (checkDate(lastrevdate, today) === -1 || lastrevdate === "") {
        greetings = ERR_DATE_MAT;
    } else if (checkDate(lastrevdate, today) === 1) {
        greetings = getHourOfDay(today);
        revisionMsg = REVISION.replace("EEEE", revisionCompany(STRING_COMPANIES));
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