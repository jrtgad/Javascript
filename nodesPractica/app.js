//document.writeln("");
var doctype = document.implementation.createDocumentType('html', '', '');
document.insertBefore(doctype, document.firstChild);


function addCharset() {
    var meta = document.createElement("meta");
    meta.setAttribute("charset", "utf-8");
    document.head.insertBefore(meta, document.head.firstChild);
}

addCharset();
window.onload = function () {
    "use strict";

    var ns = (function (ns) {
        ns.BODY = document.body;
        ns.INPUTS = ["valor", "clase"];
        ns.ADD_BUTTON = document.createElement("input");
        ns.PLACEHOLDER = "Introduzca ";
        ns.TITLE = "Manipulación de documentos a través del DOM";
        ns.NO_INDEX_SELECTED = document.createElement("h3");
        ns.NO_INDEX_SELECTED.innerHTML = "No hay ninguna clase seleccionada";
        ns.CLASSES = [];

        ns.insertToClassArray = function (element) {
            ns.CLASSES.push(element);
        }

        ns.selectFirst = function (element) {
            return document.querySelector(element);
        }

        ns.selectAll = function (element) {
            return document.querySelectorAll(element);
        }

        return ns;
    }({}));

    function setTitle() {
        var h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode(ns.TITLE));
        document.body.appendChild(h1);
    }

    function insertIntoList() {
        var valueInput = document.forms[0].children[0].value,
            classInput = document.forms[0].children[1].value,
            ul = document.getElementsByTagName("ul")[0],
            li = document.createElement("li");
        if (valueInput !== "" && classInput !== "") {
            li.appendChild(document.createTextNode(valueInput));
            li.className = classInput;
            ul.appendChild(li);
            appendOption(li, ns.selectFirst("select"));
        }

        ns.insertToClassArray(classInput);
        document.forms[0].reset();
    }

    function createClassForm() {
        var form = document.createElement("form");

        ns.INPUTS.forEach(function (x) {
            var element = document.createElement("input");
            element.placeholder = ns.PLACEHOLDER + x;
            form.appendChild(element);
        });
        ns.ADD_BUTTON.setAttribute("type", "button");
        ns.ADD_BUTTON.value = "Añadir";
        ns.ADD_BUTTON.addEventListener("click", insertIntoList, false);

        form.appendChild(ns.ADD_BUTTON);
        ns.BODY.appendChild(form);
        createSelectAndList();
    }

    function deleteSelectedOption() {
        var select = document.getElementsByTagName("select")[0],
            selected = select.selectedIndex;
        if (selected !== -1) {
            ns.selectFirst("." + select.children[selected].value).remove();
            select.removeChild(select.children[selected]);
            changeBackgroundOfListItem();
        } else {
            ns.selectFirst("form").appendChild(ns.NO_INDEX_SELECTED);
        }
    }

    function createDeleteButton() {
        var deleteBtn = document.createElement("input");
        deleteBtn.setAttribute("type", "button");
        deleteBtn.value = "Eliminar";
        ns.selectFirst("div").appendChild(deleteBtn);
        ns.selectFirst("div").lastChild.addEventListener("click", deleteSelectedOption, false);
    }



    //FORMA 1
    function removeDeleteClassError() {
        ns.selectFirst("h3") ? ns.selectFirst("h3").remove() : 0;
    }

    //FORMA 2 - DESHABILITAR BOTON

    function createSelectAndList() {
        var select = document.createElement("select"),
            h2 = document.createElement("h2"),
            div = document.createElement("div");
        h2.appendChild(document.createTextNode("Lista de elementos"));
        div.appendChild(h2);
        div.appendChild(document.createElement("ul"));
        div.appendChild(select);
        ns.BODY.appendChild(div)
        createDeleteButton();
    }

    function appendOption(element, parent) {
        var options = document.getElementsByTagName("select")[0].children;
        var option = document.createElement("option");
        option.innerHTML = element.className;
        parent.appendChild(option);
    }

    function changeBackgroundOfListItem() {
        var listItems = Array.prototype.slice.call(ns.selectAll("li")),
            selected = ns.selectFirst("select").selectedIndex,
            item = ns.selectFirst("select").children[selected].value;
        listItems.forEach(function (x) {
            x.style.backgroundColor = "white";
        });
        ns.selectFirst("li." + item).style.backgroundColor = "yellow";
    }

    setTitle();
    createClassForm();
    ns.selectFirst("form").addEventListener("click", removeDeleteClassError, false);
    ns.selectFirst("select").addEventListener("change", removeDeleteClassError, false);
    ns.selectFirst("select").addEventListener("change", changeBackgroundOfListItem, false);
};