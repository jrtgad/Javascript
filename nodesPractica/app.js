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
        ns.SELECT = document.getElementsByTagName("select")[0];
        ns.PLACEHOLDER = "Introduzca ";
        ns.TITLE = "Manipulación de documentos a través del DOM";
        ns.NO_INDEX_SELECTED = "No hay ninguna clase seleccionada";
        ns.INPUT_WITHOUT_VALUE = "Tiene que rellenar ambos campos";
        ns.CLASSES = [];

        ns.insertToClassArray = function (element) {
            ns.CLASSES.push(element);
        }

        ns.selectFirst = function (tag) {
            return document.querySelector(tag);
        }

        ns.selectAll = function (tag) {
            //Array.from();
            //$$() DEVUELVE ARRAY
            return Array.prototype.slice.call(document.querySelectorAll(tag));
        }
        ns.createError = function (msg) {
            var h3 = document.createElement("h3");
            h3.innerHTML = msg;
            ns.selectFirst("form").appendChild(h3);
        }

        return ns;
    }({}));

    function setTitle() {
        var h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode(ns.TITLE));
        document.body.appendChild(h1);
    }

    function removeDeleteClassError() {
        ns.selectFirst("h3") ? ns.selectFirst("h3").remove() : 0;
    }

    function insertIntoList() {
        var valueInput = document.forms[0].children[0].value,
            classInput = document.forms[0].children[1].value,
            ul = document.getElementsByTagName("ul")[0],
            li = document.createElement("li");
        if (valueInput !== "" || classInput !== "") {
            li.appendChild(document.createTextNode(valueInput));
            li.className = classInput;
            li.width = "auto";
            ul.appendChild(li);
            appendOption(li, ns.selectFirst("select"));
            ns.insertToClassArray(classInput);
        } else {
            ns.createError(ns.INPUT_WITHOUT_VALUE);
        }
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

    function deleteOption() {
        ns.selectFirst("." + ns.SELECT.children[selected].value).remove();
        select.removeChild(select.children[selected]);
        changeBackgroundOfListItem();
    }

    function deleteSelectedOption() {
        var selected = ns.selectFirst("select").selectedIndex;
        selected !== -1 ? deleteOption(selected) : ns.createError(ns.NO_INDEX_SELECTED);
    }

    function createDeleteButton() {
        var deleteBtn = document.createElement("input");
        deleteBtn.setAttribute("type", "button");
        deleteBtn.value = "Eliminar";
        ns.selectFirst("div").appendChild(deleteBtn);
        ns.selectFirst("div").lastChild.addEventListener("click", deleteSelectedOption, false);
    }

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
        var listItems = ns.selectAll("li"),
            selected = ns.selectFirst("select").selectedIndex,
            addedClass = ns.selectFirst("select").children[selected].value;
        listItems.forEach(function (x) {
            x.style.backgroundColor = "white";
        });
        ns.selectFirst("li." + addedClass).style.backgroundColor = "yellow";
    }

    setTitle();
    createClassForm();
    ns.selectFirst("form").addEventListener("click", removeDeleteClassError, false);
    ns.selectFirst("select").addEventListener("change", removeDeleteClassError, false);
    ns.selectFirst("select").addEventListener("change", changeBackgroundOfListItem, false);
};