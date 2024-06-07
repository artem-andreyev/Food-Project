## The project is a web page dedicated to food, using modern web technologies to improve user interaction.
On this page, visitors can find a variety of recipes, cooking tips, and other useful materials related to cookery.
This project includes sliders, forms, tabs for JavaScript training.

### In order to create a slider we need to specify a few properties, describe them in detail and pass them to the main script.js:

### slider.js:

```javascript
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
  const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
}
```
### script.js:
```javascript
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
```
