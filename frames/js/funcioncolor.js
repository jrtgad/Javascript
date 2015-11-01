function cambiaColor() {
    /*Cambiado nombre del valor del select marco */
    var marc = window.parent.frame1.formColor.marco.value;
    var color = window.parent.frame1.formColor.color.value;

    window.parent.frames[marc].document.bgColor = color;
}