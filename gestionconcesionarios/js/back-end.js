"use strict";
function Concesionario(name) {
	this.name = name;
	this.cars = [];
}

Concesionario.prototype.addToStock = function(car) {
	/*if (!carRegistered) {
		this.stock = this.stock.push(car);
	} else {
		
	}*/
	
};

Concesionario.prototype.quitFromStock = function(car) {
		
};

function Car(model, numberPlate, lastRevDate, buyPrice, sellPrice) {
	this.model 		 = model;
	this.numberPlate = numberPlate;
	this.lastRevDate = lastRevDate;
	this.buyPrice 	 = buyPrice;
	this.sellPrice 	 = sellPrice;
}