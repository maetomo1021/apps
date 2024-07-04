
function Money1() {
    var elements = document.getElementsByClassName("dot");
    for (var i = 0; i < elements.length; i++) {
        var textContent = elements[i].textContent;
        var numericValue = parseFloat(textContent.replace(/,/g, ''));
        var formattedValue = numericValue.toLocaleString();
        elements[i].innerHTML = formattedValue;
    }
}



