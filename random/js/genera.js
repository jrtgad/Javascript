function generate(num1, num2) {
    var menor = num1 < num2 ? num1 : num2,
        posibles = (menor === num1) ? num2 - num1 : num1 - num2,
        num = Math.floor((Math.random() * (posibles + 1)) + menor);

    return num;
}