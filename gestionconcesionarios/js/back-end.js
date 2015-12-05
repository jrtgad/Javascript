"use strict";
//ESPACIO DE NOMBRES
var globals = function (ns) {
    ns.ZONE = ["North", "South", "East", "West"];
    ns.MODELS = ["Basic", "Homing", "Transper", "BerlinX", "MaximV8"];
    return ns;
}({});
//({}) es un objeto vacío para no perder las variables(clausura)

/** Validación matrícula */
function validatePlate(mat) {
    var template =
        new RegExp("^[0-9]{4}-?[A-Z]{3}$|^[A-Z]{1,2}-?[0-9]{4}-?[A-Z]{1,2}$",
            "i");
    return template.test(mat);
}

function Car(model = null, numberPlate = null, lastRevDate = null, buyPrice = null, sellPrice = null) {
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

/** Compra el coche si los datos son correctos */
Dealership.prototype.buyCar = function (model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    if (validatePlate(numberPlate)) {
        if (Dealers.validNumberPlate(numberPlate)) {
            this.cars.push(new Car(model, numberPlate, lastRevDate, buyPrice, sellPrice));
        }
    }
};
Dealership.prototype.findNumberPlate = function (plate) {
    return this.cars.some(function (eachCar) {
        return eachCar.numberPlate === plate;
    })
};
Dealership.prototype.sellProfits = function (cars) {
    return cars.map(function (x) {
        //Calcula, por separado, el beneficio que da cada coche
        return x.sellPrice - x.buyPrice;

        //Una vez tenemos todos los beneficios, los va sumando
        //hasta quedarse con un número solo
        //(Coge de 2 en 2 sumándolos)
    }).reduce(function (x, y) {
        return x + y;
    });
};
var net = new DealersNet();

/** Monta el objeto de red con todos los concesionarios */
function DealersNet() {
    this.Dealers = globals.ZONE.map(function (x) {
        return new Dealership(x);
    });
}

/** Mira si la matricula introducida existe ya en otro concesionario */
DealersNet.prototype.validNumberPlate = function (plate) {
    return this.Dealers.some(function (Dealership) {
        return Dealership.findNumberPlate(plate);
    });
};