document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const hoveredDiv = document.getElementById("hovered-div");

    container.addEventListener("mouseover", function () {
        hoveredDiv.style.opacity = "1";
    });

    container.addEventListener("mouseout", function () {
        hoveredDiv.style.opacity = "0";
    });
})