const slideshowButtons = document.querySelectorAll(".slideshow__button");
const slideshowSlide = document.querySelector(".slideshow__slide");
const slideshowImages = document.querySelectorAll(".slideshow__image");
const selectionButtons = Array.from(document.querySelector(".detail__selection-container").children);
const colorSelection = document.querySelector(".detail__color");
const testimonyButtons = document.querySelectorAll(".testimony__button");
const testimonySlide = document.querySelector(".testimony__slide-container");

function slideSelector(e) {
    const imageWidth = slideshowImages[0].width.toString();
    
    if (e.target.name === "slideshow-button-left") {
        slideshowSlide.style.left = `${imageWidth}px`;
    } else if (e.target.name === "slideshow-button-middle") {
        slideshowSlide.style.left = "0px";
    } else if (e.target.name === "slideshow-button-right") {
        slideshowSlide.style.left = `-${imageWidth}px`;
    }
}

function slideReset() {
    const imageWidth = slideshowImages[0].width.toString();
    slideshowSlide.style.left = "0px";
}

function colorSelector(e) {
    const color = e.target.attributes.name.value.toString().split('-')[2];
    colorSelection.innerHTML = `COLOR: ${color.toUpperCase()}`;
}

function testimonySelector(e) {
    const direction = e.target.attributes.name.value.toString().split('-')[2];
    testimonySlide.classList.remove(testimonySlide.classList[1]);
    testimonySlide.classList.add("testimony__slide-container--" + `${direction}`);
}

function swapSlide() {
    if (testimonySlide.classList[1] === "testimony__slide-container--left") {
        testimonySlide.classList.remove(testimonySlide.classList[1]);
        testimonySlide.classList.add("testimony__slide-container--right");
    } else {
        testimonySlide.classList.remove(testimonySlide.classList[1]);
        testimonySlide.classList.add("testimony__slide-container--left");
    }
}

setInterval(swapSlide, 6000);

slideshowButtons.forEach(button => {
    button.addEventListener('click', slideSelector);
});

selectionButtons.forEach(button => {
    button.addEventListener('click', colorSelector);
});

testimonyButtons.forEach(button => {
    button.addEventListener('click', testimonySelector);
});

window.addEventListener('resize', slideReset);