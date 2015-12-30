function daysTillNewYear() {
    var daysCount = 0,
        today = new Date(),
        dayNum = today.getDate(),
        monthNum = today.getMonth() + 1,
        year = today.getFullYear(),
        leap = (!(year % 4) && ((year % 100) || !(year % 400)));

    while (monthNum <= 12) {
        switch (monthNum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysCount += 31;
            break;
        case 2:
            daysCount += leap ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysCount += 30;
            break;
        }
        monthNum += 1;
    }
    daysCount -= dayNum;
    return daysCount;
}