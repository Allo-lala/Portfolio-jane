//name transition
const nameElement = document.getElementById('typed-name');
const nameText = 'l am Jane Mukisa, Theeblacmodel'; //     name

function typeText(element, text, delay) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }

    type();
}

// Call the typing function with your name and a delay between characters (in milliseconds)
typeText(nameElement, nameText, 100);


// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});  