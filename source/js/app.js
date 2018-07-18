let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    focusAt: 1,
    startAt: 1,
    gap: 0
});
glide.mount();


console.log('Hello');
document.querySelector('.portfolio-slider').onmouseover = document.querySelector('.portfolio-slider').onmouseout = handler;

function handler(event) {
    let children = event.target.children;
    let otherSlides = document.querySelectorAll('.glide__slide.portfolio-slider__item');
    children = Array.prototype.slice.call(children);
    otherSlides = Array.prototype.slice.call(otherSlides);
    if (event.type == 'mouseover') {
        // otherSlides.forEach((slide) => {
        //     console.log(slide)
        //     slide.style.width = '50px';
        // });
        children.forEach((child) => {
            child.hidden = true;
        })
    }
    if (event.type == 'mouseout') {
        children.forEach((child) => {
            child.hidden = false;
        })
    }
}