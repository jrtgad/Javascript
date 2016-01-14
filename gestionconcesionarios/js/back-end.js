<<<<<<< HEAD
/*jslint
    node: true,
    browser: true,
    unparam: true
*/
"use strict";

// ESPACIO DE NOMBRES
var globals = (function (ns) {
    ns.NORTHZONE = "Norte";
    ns.SOUTHZONE = "Sur";
    ns.EASTZONE = "Este";
    ns.WESTZONE = "Oeste";
    ns.ZONE = [ns.NORTHZONE, ns.SOUTHZONE, ns.EASTZONE, ns.WESTZONE];
    ns.BASICMODEL = "Basic";
    ns.HOMINGMODEL = "Homing";
    ns.TRANSPERMODEL = "Transper";
    ns.BERLINXMODEL = "BerlinX";
    ns.MAXIMV8MODEL = "MaximV8";
    ns.MODELS = [ns.BASICMODEL, ns.HOMINGMODEL, ns.TRANSPERMODEL, ns.BERLINXMODEL, ns.MAXIMV8MODEL];
    ns.PROPERTIES = ["model", "numberPlate", "lastRevDate", "buyPrice", "sellPrice"];
    ns.MONTHS = "janfebmaraprmayjunjulaugsepoctnovdec";
    return ns;
}({}));
//({}) es un objeto vacío para no perder las variables(clausura)


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
        month = (date[2] + date[3] + date[4]).toLowerCase(),
        year = +(date[5] + date[6] + date[7] + date[8]),
        monthNumber = +(globals.MONTHS.indexOf(month.toLowerCase()) / 3),
        today = new Date(),
        lastrev = new Date(year, monthNumber, day),
        dateTemplate = new RegExp("^[0-9]{2}[A-Z]{3}[0-9]{4}$", "i"),
        validDay = (day <= 31 && day > 0),
        validMonth = (globals.MONTHS.indexOf(month) % 3),
        validYear = (year > 0);
    if (dateTemplate.test(date) && validDay && !validMonth && validYear && (today > lastrev)) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}
Dealership.prototype.validateData = function (dataInput) {
    var methods = [validateModel, validatePlate, validateDate, validatePrice, validatePrice];
    return dataInput.every(function (x, y) {
        return this[y](x);
    }, methods);
};

Dealership.prototype.buyCar = function (model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    var i;
    if (this.validateData([model, numberPlate, lastRevDate, buyPrice, sellPrice])) {
        this.stock.push(new Car(model, numberPlate.replace(/-/g, ""), lastRevDate, buyPrice, sellPrice));
        i = true;
    } else {
        i = false;
    }
    return i;
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

function sanitize(price) {
    return (price && (isNaN(price) || (price === Infinity))) ? 0 : price;
}

Dealership.prototype.sellProfits = function () {
    var result = 0;
    if (this.stock.length !== 0) {
        result = this.stock.map(function (x) {
            return sanitize(x.sellPrice) - sanitize(x.buyPrice);
        }).reduce(function (x, y) {
            return x + y;
        });
    }
    return result + " €";
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

=======
<<<<<<< HEAD
/*jslint
    node: true,
    browser: true,
    unparam: true
*/
"use strict";

// ESPACIO DE NOMBRES
var globals = (function (ns) {
    ns.NORTHZONE = "Norte";
    ns.SOUTHZONE = "Sur";
    ns.EASTZONE = "Este";
    ns.WESTZONE = "Oeste";
    ns.ZONE = [ns.NORTHZONE, ns.SOUTHZONE, ns.EASTZONE, ns.WESTZONE];
    ns.BASICMODEL = "Basic";
    ns.HOMINGMODEL = "Homing";
    ns.TRANSPERMODEL = "Transper";
    ns.BERLINXMODEL = "BerlinX";
    ns.MAXIMV8MODEL = "MaximV8";
    ns.MODELS = [ns.BASICMODEL, ns.HOMINGMODEL, ns.TRANSPERMODEL, ns.BERLINXMODEL, ns.MAXIMV8MODEL];
    ns.PROPERTIES = ["model", "numberPlate", "lastRevDate", "buyPrice", "sellPrice"];
    ns.MONTHS = "janfebmaraprmayjunjulaugsepoctnovdec";
    return ns;
}({}));
//({}) es un objeto vacío para no perder las variables(clausura)


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
        month = (date[2] + date[3] + date[4]).toLowerCase(),
        year = +(date[5] + date[6] + date[7] + date[8]),
        monthNumber = +(globals.MONTHS.indexOf(month.toLowerCase()) / 3),
        today = new Date(),
        lastrev = new Date(year, monthNumber, day),
        dateTemplate = new RegExp("^[0-9]{2}[A-Z]{3}[0-9]{4}$", "i"),
        validDay = (day <= 31 && day > 0),
        validMonth = (globals.MONTHS.indexOf(month) % 3),
        validYear = (year > 0);
    if (dateTemplate.test(date) && validDay && !validMonth && validYear && (today > lastrev)) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}
Dealership.prototype.validateData = function (dataInput) {
    var methods = [validateModel, validatePlate, validateDate, validatePrice, validatePrice];
    return dataInput.every(function (x, y) {
        return this[y](x);
    }, methods);
};

Dealership.prototype.buyCar = function (model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    var i;
    if (this.validateData([model, numberPlate, lastRevDate, buyPrice, sellPrice])) {
        this.stock.push(new Car(model, numberPlate.replace(/-/g, ""), lastRevDate, buyPrice, sellPrice));
        i = true;
    } else {
        i = false;
    }
    return i;
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

function sanitize(price) {
    return (price && (isNaN(price) || (price === Infinity))) ? 0 : price;
}

Dealership.prototype.sellProfits = function () {
    var result = 0;
    if (this.stock.length !== 0) {
        result = this.stock.map(function (x) {
            return sanitize(x.sellPrice) - sanitize(x.buyPrice);
        }).reduce(function (x, y) {
            return x + y;
        });
    }
    return result + " €";
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

=======
/*jslint
    node: true,
    browser: true,
    unparam: true
*/
"use strict";

// ESPACIO DE NOMBRES
var globals = (function (ns) {
    ns.NORTHZONE = "Norte";
    ns.SOUTHZONE = "Sur";
    ns.EASTZONE = "Este";
    ns.WESTZONE = "Oeste";
    ns.ZONE = [ns.NORTHZONE, ns.SOUTHZONE, ns.EASTZONE, ns.WESTZONE];
    ns.BASICMODEL = "Basic";
    ns.HOMINGMODEL = "Homing";
    ns.TRANSPERMODEL = "Transper";
    ns.BERLINXMODEL = "BerlinX";
    ns.MAXIMV8MODEL = "MaximV8";
    ns.MODELS = [ns.BASICMODEL, ns.HOMINGMODEL, ns.TRANSPERMODEL, ns.BERLINXMODEL, ns.MAXIMV8MODEL];
    ns.PROPERTIES = ["model", "numberPlate", "lastRevDate", "buyPrice", "sellPrice"];
    ns.MONTHS = "janfebmaraprmayjunjulaugsepoctnovdec";
    return ns;
}({}));
//({}) es un objeto vacío para no perder las variables(clausura)


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
        month = (date[2] + date[3] + date[4]).toLowerCase(),
        year = +(date[5] + date[6] + date[7] + date[8]),
        monthNumber = +(globals.MONTHS.indexOf(month.toLowerCase()) / 3),
        today = new Date(),
        lastrev = new Date(year, monthNumber, day),
        dateTemplate = new RegExp("^[0-9]{2}[A-Z]{3}[0-9]{4}$", "i"),
        validDay = (day <= 31 && day > 0),
        validMonth = (globals.MONTHS.indexOf(month) % 3),
        validYear = (year > 0);
    if (dateTemplate.test(date) && validDay && !validMonth && validYear && (today > lastrev)) {
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}
Dealership.prototype.validateData = function (dataInput) {
    var methods = [validateModel, validatePlate, validateDate, validatePrice, validatePrice];
    return dataInput.every(function (x, y) {
        return this[y](x);
    }, methods);
};

Dealership.prototype.buyCar = function (model, numberPlate, lastRevDate, buyPrice, sellPrice) {
    var i;
    if (this.validateData([model, numberPlate, lastRevDate, buyPrice, sellPrice])) {
        this.stock.push(new Car(model, numberPlate.replace(/-/g, ""), lastRevDate, buyPrice, sellPrice));
        i = true;
    } else {
        i = false;
    }
    return i;
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

function sanitize(price) {
    return (price && (isNaN(price) || (price === Infinity))) ? 0 : price;
}

Dealership.prototype.sellProfits = function () {
    var result = 0;
    if (this.stock.length !== 0) {
        result = this.stock.map(function (x) {
            return sanitize(x.sellPrice) - sanitize(x.buyPrice);
        }).reduce(function (x, y) {
            return x + y;
        });
    }
    return result + " €";
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

>>>>>>> 2a33968c69530b7b13e4b43ac5fde7501a827411
>>>>>>> 7b5ccf4274485fc2e90a9d2afcf46a3e15920030
var net = new DealersNet();