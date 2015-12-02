"use strict";

//ESPACIO DE NOMBRES
var globals = function (ns) {
	ns.ZONE = "Norte|Sur|Este|Oeste";
	ns.MODELS = "Basic|Homing|Transper|BerlinX|MaximV8";
	return ns;

	//{} es un objeto vacío para no perder las variables(clausura)
}({});

var MARCAS = "",


	red   = new Concesionario("Norte"),
	sur   = new Concesionario("Sur"),
	este  = new Concesionario("Este"),
	oeste = new Concesionario("Oeste"),

function Concesionario(name) {
	this.name = name;
	this.cars = [];
}

Concesionario.prototype.buyCar = function(car) {
	if (!carRegistered) {
		this.cars = this.cars.push(new Car(model, numberPlate, lastRevDate, buyPrice, sellPrice));
	} else {
		
	}
	
};

Concesionario.prototype.sellCar = function(car) {
	if (carRegistered) {
		this.stock = Array.prototype.reduce(this.stock)
	}
};

function Car(model, numberPlate, lastRevDate, buyPrice, sellPrice) {
	this.model 		 = model;
	this.numberPlate = numberPlate;
	this.lastRevDate = lastRevDate;
	this.buyPrice 	 = buyPrice;
	this.sellPrice 	 = sellPrice;
}
Car.prototype.calculateBenefits = function(Car) {
	return this.sellPrice - this.buyPrice;
}