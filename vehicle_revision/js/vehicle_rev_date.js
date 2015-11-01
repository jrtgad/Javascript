function showVehicleRevisionStatus (string) {
    var template = new RegExp("^[0-9]{4}[- ]?[A-Z]{3}$|
                               ^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
                               "i"),

                    /*/^[0-9]{4}-?[A-Z]{3}$/  También vale*/

    //Recibe ?user=string&mat=string&rev=string
        numberplate = ,
        lastrevdate = ,
        today = new Date(),
        day = today.getUTCDate(),
        month = today.getUTCMonth() + 1,
        year = today.getUTCFullYear(),
        output;

    if(!template.test(mat)) {
        output = ERR_MAT;
    } else if(!checkDates()) {

    }


    return output;
}

/*function checkDate(date) {

}*/