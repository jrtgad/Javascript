"use strict";

function $(id) {
    return document.getElementById(id);
}

function mountPage() {
    /** Monta la vista de la pagina, y
    monta la tabla del concesionario inicial */
    var element = document.createElement("select"),
        i = 1,
        buyButton = document.createElement("button");

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

/** Crea el formulario de compra de coches */
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

    //Options de los modelos
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

function buyCar() {
    var dataProperties = document.getElementsByClassName("inputProperties"),
        dealer = ObjectFromSelect(),

        carProperties = globals.PROPERTIES.map(function (x, y) {
            return this[y].value;
        }, dataProperties),

        plate = carProperties[1];
    /*lastRevDate = carProperties[2],
        buyPrice = carProperties[3],
        sellPrice = carProperties[4];*/

    if (dealer.validateData(carProperties) && net.validNumberPlate(plate)) {
        dealer.buyCar.apply(dealer, carProperties);
        createTable();
    } else {
        buyForm();
        alert("alaaaaaa");
    }
}

function reset() {
    /** Si existe una tabla o formulario, bórralos */
    if ($("tabla") !== null) {
        $("page").removeChild($("tabla"));
        $("page").removeChild($("sell"));
    }

    if ($("form") !== null) {
        $("page").removeChild($("form"));
    }

    if ($("FilterSelect") !== null) {
        $("page").removeChild($("FilterSelect"));
    }
}


function getData() {
    /** Monta la tabla del concesionario inicial,
        y añade los eventos de los botones */
    mountPage();
    $("selectDealer").addEventListener("change", createTable, false);
    $("buy").addEventListener("click", buyForm, false);
}

/** NO TOCAR!!!!
    SACA EL OBJETO ELEGIDO EN EL SELECT*/
function ObjectFromSelect() {
    var id = $("selectDealer").selectedIndex;
    return net.Dealers[id];
}

/** DE CADA CONCESIONARIO Y POR CADA COCHE,
    DEVUELVE UN ARRAY DE LAS PROPIEDADES */
/** Filtrar por modelo, recibe array */
function getCarProperties(dealer) {
    var resultArr;
    if (dealer.stock.length !== 0) {
        resultArr = dealer.stock.map(function (x) {
            return [x.model, x.numberPlate, x.lastRevDate, x.buyPrice, x.sellPrice];
        });
    } else {
        resultArr = [];
    }
    return resultArr;
}

/** POR CADA CHECKBOX SELECCIONADO,
    VENDE EL COCHE DEL CONCESIONARIO SELECCIONADO*/
function sellSelectedCars() {
    var dealer = ObjectFromSelect(),
        htmlCollection = document.getElementsByTagName("input"),
        numberOfCheckboxes = htmlCollection.length,
        array = Array.apply(null, Array(numberOfCheckboxes)),
        checkboxNumber = Object.keys(array);

    checkboxNumber.forEach(function (x) {
        x = +x;
        if (htmlCollection[x].checked) {
            dealer.sellCar(htmlCollection[x].id);
        }
    });

    createTable();
}

function createTable() {
    reset();

    $("buy").innerHTML = "Buy car";

    var table = document.createElement("table"),
        row,
        model = document.createElement("select"),
        th = document.createElement("th"),
        cell,
        todos = document.createElement("option"),
        keys = Object.keys(new Car()),
        checkbox,
        dealer = ObjectFromSelect(),
        sellButton = document.createElement("button"),

        // Para generar los titulos de la tabla
        titles = Object.keys(new Car()).reverse();


    todos.innerHTML = "Todos";
    todos.id = "todos";
    model.appendChild(todos);

    //Options de los modelos
    globals.MODELS.forEach(function (x) {
        var option = document.createElement("option");
        option.innerHTML = x;
        option.value = x;
        model.appendChild(option);
    });

    model.id = "FilterSelect";

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


    var carPropertiesArr = getCarProperties(dealer);

    //INTENTAR SACAR A FUNCION
    carPropertiesArr.map(function (x) {
        row = table.appendChild(document.createElement("tr"));
        cell = row.appendChild(document.createElement("td"));
        checkbox = cell.appendChild(document.createElement("input"));
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = x[1];

        x.map(function (y) {
            cell = row.appendChild(document.createElement("td"));
            cell.appendChild(document.createTextNode(y));
        });
    });

    $("page").appendChild(model);
    $("page").appendChild(table);
    $("page").appendChild(sellButton);
    $("sell").addEventListener("click", sellSelectedCars, false);
}

window.onload = getData;