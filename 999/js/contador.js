var num;
var total = 0;

do {
    num = prompt('Escriba un número entre 0 y 998:') * 1;
    if(num <= 998 && num >= 0) {
        total += num;
    }    
} while (num !== 999);

alert(total);