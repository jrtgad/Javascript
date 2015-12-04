"use strict";

//ESPACIO DE NOMBRES
var globals = function (ns) {
    ns.ZONE = "Norte|Sur|Este|Oeste";
    ns.MODELS = "Basic|Homing|Transper|BerlinX|MaximV8";
    return ns;
}({});
//({}) es un objeto vacío para no perder las variables(clausura)

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

Dealership.prototype.buyCar = function (model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    this.cars.push(new Car(model, numberPlate, lastRevDate, buyPrice, sellPrice));
};

Dealership.prototype.findNumberPlate = function (plate) {
    return this.cars.some(function (eachCar) {
        return eachCar.numberPlate === plate;
    })
};

DealerShip.prototype.sellProfits = function (cars) {
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

function DealersNet() {
    this.Dealers = globals.ZONE.split("|").map(function (x) {
        return new Dealership(x);
    });
}
DealersNet.prototype.validNumberPlate = function (plate) {
    return this.Dealers.some(function (Dealership) {
        return Dealership.findNumberPlate(plate);
    });
};