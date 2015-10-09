var prompt, window, hour, min, sec, alert;
var seg = +prompt("Escriba un número de segundos:");

hour = parseInt((seg / 3600), 10);
sec = seg % 3600;
min = parseInt(sec / 60, 10);
sec = sec % 60;

alert(seg + " segundo(s) = " + hour + " hora(s) : " + min + " minuto(s) : " + sec + " segundo(s)");