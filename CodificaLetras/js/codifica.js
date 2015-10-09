function checkValueOfWord(word) {
    var i = 0,
    value = "";

    while (word[i]) {
        switch (word[i]) {
            case "a": case "A" : value += "01 "; break;
            case "b": case "B" : value += "02 "; break;
            case "c": case "C" : value += "03 "; break;
            case "d": case "D" : value += "04 "; break;
            case "e": case "E" : value += "05 "; break;
            case "f": case "F" : value += "06 "; break;
            case "g": case "G" : value += "07 "; break;
            case "h": case "H" : value += "08 "; break;
            case "i": case "I" : value += "09 "; break;
            case "j": case "J" : value += "10 "; break;
            case "k": case "K" : value += "11 "; break;
            case "l": case "L" : value += "12 "; break;
            case "m": case "M" : value += "13 "; break;
            case "n": case "N" : value += "14 "; break;
            case "ñ": case "Ñ" : value += "15 "; break;
            case "o": case "O" : value += "16 "; break;
            case "p": case "P" : value += "17 "; break;
            case "q": case "Q" : value += "18 "; break;
            case "r": case "R" : value += "19 "; break;
            case "s": case "S" : value += "20 "; break;
            case "t": case "T" : value += "21 "; break;
            case "u": case "U" : value += "22 "; break;
            case "v": case "V" : value += "23 "; break;
            case "w": case "W" : value += "24 "; break;
            case "x": case "X" : value += "25 "; break;
            case "y": case "Y" : value += "26 "; break;
            case "z": case "Z" : value += "27 "; break;
            case " ": case "\n": case "\t" : value += ""; break;
            default : value += "! "; break;
        }

    i += 1;
    }
    return value;
}

function joao(word) {
    var i = 0, value = "";

    while (!!word[i]) {
        if (word[i] === ABC[i]) {
            value += (i + 1) + " ";
        }
    }
    return value;
}