/*jslint
    node: true,
    browser: true,
    unparam: true,
*/

/*global
    globals,
    net,
    Car,
    car,
    stock
*/

"use strict";

function $(id) {
    return document.getElementById(id);
}

function ObjectFromSelect() {
    var id = $("selectDealer").selectedIndex;
    return net.Dealers[id];
}

function reset() {
    if ($("tabla") !== null) {
        $("page").removeChild($("tabla"));
        $("page").removeChild($("sell"));
    }

    if ($("form") !== null) {
        $("page").removeChild($("form"));
    }

    if ($("error") !== null) {
        $("page").removeChild($("error"));
    }

    if ($("divProfits") !== null) {
        $("page").removeChild($("divProfits"));
    }

    if ($("parprofits") !== null) {
        $("page").removeChild($("parprofits"));
    }

    if ($("FilterSelect") !== null) {
        $("page").removeChild($("FilterSelect"));
    }
}

function buyCar() {
    var dataProperties = document.getElementsByClassName("inputProperties"),
        dealer = ObjectFromSelect(),
        err,
        carProperties = globals.PROPERTIES.map(function (x, y) {
            return this[y].value;
        }, dataProperties),
        plate = carProperties[1].replace(/-/g, "");
    if (dealer.validateData(carProperties) && !net.validNumberPlate(plate)) {
        dealer.buyCar.apply(dealer, carProperties);
        createTable();
    } else {
        err = document.createElement("p");
        err.id = "error";
        err.appendChild(document.createTextNode("Datos incorrectos"));
        buyForm();
        $("page").appendChild(err);
    }
}

function createTable() {
    reset();

    $("buy").innerHTML = "Buy car";
    var table = document.createElement("table"),
        row,
        cell,
        keys = Object.keys(new Car()),
        sellButton = document.createElement("button");
    sellButton.id = "sell";
    sellButton.innerHTML = "Sell car";
    table.id = "tabla";
    row = table.appendChild(document.createElement("tr"));
    cell = row.appendChild(document.createElement("th"));
    cell.appendChild(document.createTextNode("selected"));

    keys.forEach(function (x) {
        cell = row.appendChild(document.createElement("th"));
        cell.appendChild(document.createTextNode(x));
    });

    getSimulateProfitsButton();
    $("page").appendChild(table);
    getModelSelect();
    $("page").appendChild(sellButton);
    filterCars();
    $("sell").addEventListener("click", sellSelectedCars, false);
}

function getSimulateProfitsButton() {
    var profitsButton = document.createElement("button"),
        divProfits = document.createElement("div"),
        profitsPar = document.createElement("p");
    divProfits.id = "divProfits";
    profitsPar.id = "parprofits";
    profitsButton.id = "buttonprofits";
    profitsButton.value = "Simular  venta de stock";
    profitsButton.innerHTML = "Simular  venta de stock";

    divProfits.appendChild(profitsButton);
    divProfits.appendChild(profitsPar);
    $("page").appendChild(divProfits);
    profitsButton.addEventListener("click", simulateSoldCars, false);
}

function insertData(propertiesArray) {
    var checkbox,
        row,
        cell;

    while ($("tabla").children[1] !== undefined) {
        $("tabla").removeChild($("tabla").children[1]);
    }

    propertiesArray.map(function (x) {
        row = $("tabla").appendChild(document.createElement("tr"));
        cell = row.appendChild(document.createElement("td"));
        checkbox = cell.appendChild(document.createElement("input"));
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = x[1];

        x.map(function (y) {
            cell = row.appendChild(document.createElement("td"));
            cell.appendChild(document.createTextNode(y));
        });
    });
}

function getCarProperties(dealer, model) {
    var resultArr = dealer.stock.map(function (x) {
        if (model === "Todos") {
            return [x.model, x.numberPlate, x.lastRevDate, x.buyPrice, x.sellPrice];
        } else {
            if (model === x.model) {
                return [x.model, x.numberPlate, x.lastRevDate, x.buyPrice, x.sellPrice];
            }
        }
    }).filter(function (x) {
        return x !== undefined;
    });
    insertData(resultArr);
}

function sellSelectedCars() {
    var dealer = ObjectFromSelect(),
        htmlCollection = document.getElementsByTagName("input"),
        array = Array.apply(null, Array(htmlCollection.length)),
        checkboxNumber = Object.keys(array);

    checkboxNumber.forEach(function (x) {
        x = +x;
        if (htmlCollection[x].checked) {
            dealer.sellCar(htmlCollection[x].id);
        }
    });

    createTable();
}

function filterCars() {
    var dealer = ObjectFromSelect(),
        filteredModel = $("FilterSelect").value;
    getCarProperties(dealer, filteredModel);
}

function getModelSelect() {
    var model = document.createElement("select"),
        todos = document.createElement("option");
    model.id = "FilterSelect";
    todos.innerHTML = "Todos";
    todos.id = "todos";
    model.appendChild(todos);

    globals.MODELS.forEach(function (x) {
        var option = document.createElement("option");
        option.innerHTML = x;
        option.value = x;
        model.appendChild(option);
    });

    $("page").appendChild(model);
    $("FilterSelect").addEventListener("change", filterCars, false);
}

function simulateSoldCars() {
    var dealer = ObjectFromSelect();
    $("parprofits").innerHTML = dealer.sellProfits();
}

function buyForm() {
    reset();

    $("buy").innerHTML = "Clean";

    var form = document.createElement("form"),
        titles = Object.keys(new Car()),
        model = document.createElement("select"),
        button = document.createElement("button");

    model.id = "FilterSelect";
    model.setAttribute("class", "inputProperties");

    button.id = "buyFormButton";
    button.innerHTML = "Buy";

    form.id = "form";

    form.appendChild(model);

    globals.MODELS.forEach(function (x) {
        var option = document.createElement("option");
        option.innerHTML = x;
        option.value = x;
        model.appendChild(option);
    });

    titles.forEach(function (x) {
        var y = document.createElement("input");
        y.setAttribute("type", "text");
        y.id = x;
        y.setAttribute("class", "inputProperties");
        y.setAttribute("placeholder", x);
        form.appendChild(y);
    });

    form.appendChild(button);
    $("page").appendChild(form);
    $("form").removeChild($("model"));
    $("buyFormButton").addEventListener("click", buyCar, false);
}

function mountPage() {
    var element = document.createElement("select"),
        buyButton = document.createElement("button"),
        i = 1;

    buyButton.id = "buy";
    buyButton.innerHTML = "Buy car";

    element.id = "selectDealer";

    globals.ZONE.forEach(function (x) {
        var option = document.createElement("option");
        option.value = x;
        option.id = i;
        option.innerHTML = x;
        element.appendChild(option);
        i += 1;
    });

    $("page").appendChild(element);
    $("page").appendChild(buyButton);

    createTable();
}

function getData() {
    mountPage();
    $("selectDealer").addEventListener("change", createTable, false);
    $("buy").addEventListener("click", buyForm, false);
}

window.onload = getData;