require("es6-promise").polyfill(); // Ручное добавление полифиллов (необходимо скачать заранее(в этом случае es6-promise))
import "nodelist-foreach-polyfill"; // Этот пакет существует в node_modules (так можно импортировать)

// import "slick-slider"; // Импорт слайдера (нужно скачать с npm(слайдер можно найти в интернете))

import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import {openModal} from "./modules/modal";

window.addEventListener("DOMContentLoaded", function() {

    const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 50000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal("[data-modal]", ".modal", modalTimerId);
    timer(".timer", "2024-12-12");
    cards();
    calc();
    forms("form", modalTimerId);
    slider({
        container: ".offer__slider",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        slide: ".offer__slide",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    });
});