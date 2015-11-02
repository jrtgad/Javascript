function showVehicleRevisionStatus(queryString) {
    //Recibe ?mat=queryString&rev=queryString
    var vars = getVars(queryString, "mat", "rev"),
        numberplate = vars[0].trim(),
        lastrevdate = vars[1].trim(),
        today = new Date(),
        greeting = getGreeting(today),
        osBrowser = getBrowser(INFO_SYSTEM) + ", " + getOs(INFO_SYSTEM),
        revisionMsg;


    if (!validatePlate(numberplate)) {
        revisionMsg = ERR_MAT;
    } else if (!checkDate(lastrevdate)) {
        revisionMsg = ERR_DATE_MAT;
    } else if (needRevision(lastrevdate, today)) {
        revisionCompany(COMPANIES);
    } else {
        revisionMsg = NO_REV;
    }

    /*revisionMsg = !validatePlate(numberplate) ? ERR_MAT :
                  !checkDate(lastrevdate) ? ERR_DATE_MAT :
                  needRevision(lastrevdate, today) ? revisionCompany() : NO_REV;*/

return [greeting, revisionMsg, osBrowser];
}