/*jslint
    node: true,
    browser: true,
    unparam: true
*/

// ESPACIO DE NOMBRES
var globals = function (ns) {
    ns.ZONE = ["Norte", "Sur", "Este", "Oeste"];
    ns.MODELS = ["Basic", "Homing", "Transper", "BerlinX", "MaximV8"];
    ns.PROPERTIES = ["model", "numberPlate", "lastRevDate", "buyPrice", "sellPrice"];
    ns.MONTHS = "janfebmaraprmayjunjulaugsepoctnovdec";
    return ns;
}({});
//({}) es un objeto vacío para no perder las variables(clausura)

"use strict";

function validatePlate(mat) {
    var template =
        new RegExp("^[0-9]{4}-?[A-Z]{3}$|^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
            "i");
    return template.test(mat);
}

function Car(model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    this.model = model;
    this.numberPlate = numberPlate;
    this.lastRevDate = lastRevDate;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
}

function Dealership(zone) {
    this.zone = zone;
    this.stock = [];
}

Dealership.prototype.validateData = function (dataInput) {

    /** COMPROBAR validNumberPlate */

    var methods = [validateModel, validatePlate, validateDate, validatePrice, validatePrice];
    return dataInput.every(function (x, y) {
        return this[y](x);
    }, methods);
}

function validateModel(model) {
    return globals.MODELS.some(function (x) {
        return model === x;
    });
}

function validatePrice(price) {
    return price > 0;
}

function validateDate(date) {
    var valid,
        day = +(date[0] + date[1]),
        month = date[2] + date[3] + date[4],
        month = month.toLowerCase(),
        year = +(date[5] + date[6] + date[7] + date[8]),
        monthNumber = +(globals.MONTHS.indexOf(month.toLowerCase()) / 3),
        today = new Date(),
        lastrev = new Date(year, monthNumber, day),
        dateTemplate = new RegExp("^[0-9]{2}[A-Z]{3}[0-9]{4}$", "i"),
        validDay = (day <= 31 && day > 0),
        validMonth = (globals.MONTHS.indexOf(month) % 3),
        validYear = (year > 0);
    if (dateTemplate.test(date) &&
        validDay &&
        !validMonth &&
        validYear &&
        (today > lastrev)) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}

Dealership.prototype.buyCar = function (model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    this.stock.push(new Car(model, numberPlate.replace(/-/g, ""), lastRevDate, buyPrice, sellPrice));
};

Dealership.prototype.sellCar = function (numberPlate) {
    this.stock = this.stock.filter(function (x) {
        if (x.numberPlate !== numberPlate) {
            return x;
        }
    });
};

Dealership.prototype.findNumberPlate = function (plate) {
    return this.stock.some(function (eachCar) {
        return eachCar.numberPlate === plate;
    });
};


/**
 * PREGUNTAR SI TIENE QUE RECIBIR ARRAY
 */

Dealership.prototype.sellProfits = function () {
    if (this.stock.length !== 0) {
        return this.stock.map(function (x) {
            return x.sellPrice - x.buyPrice;
        }).reduce(function (x, y) {
            return x + y;
        }) + " €";
    } else {
        return "No hay coches en stock";
    }
};

function DealersNet() {
    this.Dealers = globals.ZONE.map(function (x) {
        return new Dealership(x);
    });
}

DealersNet.prototype.validNumberPlate = function (plate) {
    return this.Dealers.some(function (Dealership) {
        return Dealership.findNumberPlate(plate);
    });
};

var net = new DealersNet();