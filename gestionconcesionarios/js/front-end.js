"use strict";

function $(id) {
    return document.getElementById(id);
}

function mountPage() {
    /** Monta la vista de la pagina, y
        monta la tabla del concesionario inicial */
    var element = document.createElement("select"),
        buyButton = document.createElement("button");

    buyButton.id = "buy";
    buyButton.innerHTML = "Buy car";

    element.id = "selectDealer";

    globals.ZONE.forEach(function (x) {
        var option = document.createElement("option");
        option.value = x;
        option.innerHTML = x;
        element.appendChild(option);
    });

    $("page").appendChild(element);
    $("page").appendChild(buyButton);

    createTable();
}

/** Crea una fila para cada coche del concesionario elegido */
function createRows(obj, table) {

    /** REVISAR!!! No se como funciona, o si esta incluyendo las
    propiedades de cada coche
    Antes estaba en create Table */

    var check,
        row,
        cell;
    obj.map(function (x) {
        //Para cada coche de la tabla,
        //que genere esto para poder elegirlos
        check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        //table.appendChild(check);

        row = table.insertRow(0);
        cell = row.insertCell(0);
        cell.innerHTML = x[0];
        cell[0].appendChild(check);
    })

    //saca cada objeto de stock del concesionario
    //elegido en el select
    //dealer.stock.map(function(x){return x.stock;});
}

/** Crea el formulario de compra de coches */
function buyForm() {

    /** Si existe una tabla, quitala y genera el formulario */
    if ($("tabla") !== null) {
        $("page").removeChild($("tabla"));
        $("page").removeChild($("sell"));
        buyForm();
    } else {
        if ($("form") !== null) {
            $("page").removeChild($("form"));
            buyForm();
        } else {
            var form = document.createElement("form"),
                titles = Object.keys(new Car()),
                model = document.createElement("select"),
                button = document.createElement("button");

            model.id = "modelSelect";

            button.id = "buyFormButton";
            button.innerHTML = "Buy";
            //button.click = net.buyCar();


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
                y.setAttribute("placeholder", x);
                form.appendChild(y);
            });

            form.appendChild(button);
            $("page").appendChild(form);
            $("form").removeChild($("model"));
        }
    }
}

function getData() {
    /** Monta la tabla del concesionario inicial,
        y añade los eventos de los botones */
    mountPage();
    $("selectDealer").addEventListener("change", createTable);
    $("buy").addEventListener("click", buyForm);

    /*$("sell").addEventListener("click", sellCars);*/
}

function createTable() {
    /** Si existe una tabla, quitala y genera los coches
        del concesionario elegido en el select */
    if ($("tabla") !== null) {
        $("page").removeChild($("tabla"));
        $("page").removeChild($("sell"));
        createTable();
    } else {
        if ($("form") !== null) {
            $("page").removeChild($("form"));
            createTable();
        } else {
            var table = document.createElement("table"),
                check,
                row,
                cell,
                sellButton = document.createElement("button"),

                // Para generar los titulos de la tabla
                titles = Object.keys(new Car()).reverse(),

                //Recupero objeto del select
                dealer = net.Dealers.find(function (x) {
                    return x.zone = $("selectDealer").value;
                });


            sellButton.id = "sell";
            sellButton.innerHTML = "Sell car";



            row = table.insertRow(0);
            row.insertCell(0).innerHTML = "select";


            table.id = "tabla";


            titles.forEach(function (x) {
                return cell = row.insertCell(1).innerHTML = x;
            });



            //Mando el array de coches del concesionario
            //para imprimir los datos
            createRows(dealer.stock.map(function (x) {
                return x.stock;
            }), table);

            $("page").appendChild(table);
            $("page").appendChild(sellButton);
        }
    }
}

window.onload = getData;