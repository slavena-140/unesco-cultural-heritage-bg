/*Скрипт*/

/*абонирайте се*/
function f3() {
    let email = prompt("Абонирайте се за нашия бюлетин, за да получавате най-новата информация по имейла си!");

    if (email == null) {
        alert("Разгледайте културното наследство на ЮНЕСКО в България!");
    } else {
        alert("Благодарим, че се абонирахте!");
    }

}

// Скрипт за адаптиране на координатите на картата
document.addEventListener("DOMContentLoaded", function () {
    const mapImage = document.querySelector(".responsive-map");
    const map = document.querySelector("map");
    const originalWidth = 6000; // Оригинална ширина на картата
    const originalHeight = 4000; // Оригинална височина на картата

    function resizeMap() {
        const currentWidth = mapImage.clientWidth;
        const scaleFactor = currentWidth / originalWidth;

        map.querySelectorAll("area").forEach((area) => {
            const coords = area.getAttribute("coords")
                    .split(",")
                    .map(coord => Math.round(coord * scaleFactor));
            area.setAttribute("coords", coords.join(","));
        });
    }

    window.addEventListener("resize", resizeMap);
    resizeMap();
});

/*слайдер*/
$(document).ready(function () {
    $('.slider').bxSlider({
        controls: false,
        speed: 1000,
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true
    });
});

/*За секциите с факти: при преминаване с мишката се променя цветът*/
function f1() {
    document.getElementById("efekt1").style.backgroundColor = "#9f624f";
    document.getElementById("efekt2").style.backgroundColor = "#9f624f";

}

function f2() {
    document.getElementById("efekt1").style.backgroundColor = "#cca98d";
    document.getElementById("efekt2").style.backgroundColor = "#cca98d";

}