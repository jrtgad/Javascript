function showVehicleRevisionStatus(queryString) {
    //Recibe ?mat=queryString&rev=queryString
    var vars = 
        numberplate = getVars(queryString, "numberplate"),
        lastrevdate = getVars(queryString, "lastrevdate"),
        today = new Date(),
        output;

    if (!validatePlate(numberplate)) {
        greeting = ERR_MAT;        
    } else if (!checkDate(lastrevdate)) {
        greeting = ERR_DATE_MAT;
    } else if (notNeedRevision(lastrevdate, today)) {
        revisionMsg = NO_REV;
    } else {
        revisionCompany(COMPANIES);
    }

return [greeting, revisionMsg, osBrowser];
}