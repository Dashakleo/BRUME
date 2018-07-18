let slidesPortfolio = [{
    type: 'Дизайн интерьера',
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio1.jpg)'
}, {
    type: 'Отделочная работа',
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio2.jpg)'
}, {
    type: 'Дизайн интерьера',
    title: 'Дизайн столовой в стиле «Бохо»',
    img: 'url(./assets/img/portfolio3.jpg)'
}, {
    type: 'Дизайн интерьера',
    title: 'Лофт интерьер для отеля Hiloft',
    img: 'url(./assets/img/portfolio4.jpg)'
},{
    type: 'Дизайн интерьера',
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio1.jpg)'
}, {
    type: 'Отделочная работа',
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio2.jpg)'
}, {
    type: 'Дизайн интерьера',
    title: 'Дизайн столовой в стиле «Бохо»',
    img: 'url(./assets/img/portfolio3.jpg)'
}, {
    type: 'Дизайн интерьера',
    title: 'Лофт интерьер для отеля Hiloft',
    img: 'url(./assets/img/portfolio4.jpg)'
}];

let slidesPortfol = Array.prototype.slice.call(slidesPortfolio);

const slidesDOM = (slide) => {
    const slideEl = document.createElement('li');
    const slideTitle = document.createElement('div');
    const slideType = document.createElement('div');

    slideEl.classList.add('glide__slide');
    slideEl.classList.add('portfolio-slider__item');
    slideEl.style.background = `${slide.img} no-repeat center left/cover`;

    slideTitle.innerHTML = slide.title;
    slideTitle.classList.add('portfolio-slider__title');
    slideEl.appendChild(slideTitle);


    slideType.innerHTML = slide.type;
    slideType.classList.add('portfolio-slider__type');
    slideEl.appendChild(slideType);
    return slideEl;
};

const slidesRender = async (slidesPortfolio, count = 4) => {
    const slidesEl = document.querySelector('.glide__track');
    slidesEl.innerHTML = '';
    const slideList = document.createElement('ul');
    slideList.classList.add('glide__slides');
    slideList.classList.add('portfolio-slider');

    let slidesPortfol = Array.prototype.slice.call(slidesPortfolio);
    await slidesPortfol.forEach((slide) => {
        const slideEl = slidesDOM(slide);
        slideList.appendChild(slideEl);
    });
    slidesEl.appendChild(slideList);

    let glide = new Glide('.glide', {
        type: 'slider',
        perView: count,
        bound: true,
        startAt: 0,
        gap: 0
    });
    glide.mount();

    //Прячет тип и тайтл при наведении
    document.querySelector('.portfolio-slider').onmouseover = document.querySelector('.portfolio-slider').onmouseout = handler;
    function handler(event) {
        let otherSlides = document.querySelectorAll('.glide__slide.portfolio-slider__item');
        otherSlides = Array.prototype.slice.call(otherSlides);
        let children = event.target.children;
        children = Array.prototype.slice.call(children);
        if (event.type == 'mouseover') {
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
};
slidesRender(slidesPortfolio);


//Сортировка
 const portfolioAll = document.querySelector('#portfolioAll');
 const portfolioInterior = document.querySelector('#portfolioInterior');
 const portfolioFinishing = document.querySelector('#portfolioFinishing');
portfolioAll.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(".portfolio-tabs__link_active").classList.remove('portfolio-tabs__link_active');
    e.target.classList.add('portfolio-tabs__link_active');
    slidesRender(slidesPortfol);
});

 portfolioInterior.addEventListener('click', (e) => {
     e.preventDefault();
     let count = 0;
     let sortedSlides = [];
     document.querySelector(".portfolio-tabs__link_active").classList.remove('portfolio-tabs__link_active');
     e.target.classList.add('portfolio-tabs__link_active');
     slidesPortfol.forEach((slide) => {
         if (slide.type === 'Дизайн интерьера') {
             sortedSlides.push(slide);
             count +=1;
         }
     });
     if (count > 4) count = 4;
     slidesRender(sortedSlides,count);
 });

portfolioFinishing.addEventListener('click', (e) => {
    e.preventDefault();
    let count = 0;
    let sortedSlides = [];
    document.querySelector(".portfolio-tabs__link_active").classList.remove('portfolio-tabs__link_active');
    e.target.classList.add('portfolio-tabs__link_active');
    slidesPortfol.forEach((slide) => {
        if (slide.type === 'Отделочная работа') {
            sortedSlides.push(slide);
            count +=1;
        }
    });
    if (count > 4) count = 4;
    slidesRender(sortedSlides,count);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzbGlkZXNQb3J0Zm9saW8gPSBbe1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0YHRgtC+0LvQvtCy0L7QuSDQsiDRgdGC0LjQu9C1IMKr0JHQvtGF0L7CuycsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JvQvtGE0YIg0LjQvdGC0LXRgNGM0LXRgCDQtNC70Y8g0L7RgtC10LvRjyBIaWxvZnQnLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcpJ1xufSx7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMS5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMi5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzMuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW80LmpwZyknXG59XTtcblxubGV0IHNsaWRlc1BvcnRmb2wgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXNQb3J0Zm9saW8pO1xuXG5jb25zdCBzbGlkZXNET00gPSAoc2xpZGUpID0+IHtcbiAgICBjb25zdCBzbGlkZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBzbGlkZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2xpZGVUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoJ2dsaWRlX19zbGlkZScpO1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9faXRlbScpO1xuICAgIHNsaWRlRWwuc3R5bGUuYmFja2dyb3VuZCA9IGAke3NsaWRlLmltZ30gbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvdmVyYDtcblxuICAgIHNsaWRlVGl0bGUuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XG4gICAgc2xpZGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190aXRsZScpO1xuICAgIHNsaWRlRWwuYXBwZW5kQ2hpbGQoc2xpZGVUaXRsZSk7XG5cblxuICAgIHNsaWRlVHlwZS5pbm5lckhUTUwgPSBzbGlkZS50eXBlO1xuICAgIHNsaWRlVHlwZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190eXBlJyk7XG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVR5cGUpO1xuICAgIHJldHVybiBzbGlkZUVsO1xufTtcblxuY29uc3Qgc2xpZGVzUmVuZGVyID0gYXN5bmMgKHNsaWRlc1BvcnRmb2xpbywgY291bnQgPSA0KSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGVfX3RyYWNrJyk7XG4gICAgc2xpZGVzRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgc2xpZGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzbGlkZUxpc3QuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlcycpO1xuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyJyk7XG5cbiAgICBsZXQgc2xpZGVzUG9ydGZvbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlc1BvcnRmb2xpbyk7XG4gICAgYXdhaXQgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZUVsID0gc2xpZGVzRE9NKHNsaWRlKTtcbiAgICAgICAgc2xpZGVMaXN0LmFwcGVuZENoaWxkKHNsaWRlRWwpO1xuICAgIH0pO1xuICAgIHNsaWRlc0VsLmFwcGVuZENoaWxkKHNsaWRlTGlzdCk7XG5cbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5nbGlkZScsIHtcbiAgICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICAgIHBlclZpZXc6IGNvdW50LFxuICAgICAgICBib3VuZDogdHJ1ZSxcbiAgICAgICAgc3RhcnRBdDogMCxcbiAgICAgICAgZ2FwOiAwXG4gICAgfSk7XG4gICAgZ2xpZGUubW91bnQoKTtcblxuICAgIC8v0J/RgNGP0YfQtdGCINGC0LjQvyDQuCDRgtCw0LnRgtC7INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpLm9ubW91c2VvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1zbGlkZXInKS5vbm1vdXNlb3V0ID0gaGFuZGxlcjtcbiAgICBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBvdGhlclNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nbGlkZV9fc2xpZGUucG9ydGZvbGlvLXNsaWRlcl9faXRlbScpO1xuICAgICAgICBvdGhlclNsaWRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG90aGVyU2xpZGVzKTtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlb3V0Jykge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59O1xuc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2xpbyk7XG5cblxuLy/QodC+0YDRgtC40YDQvtCy0LrQsFxuIGNvbnN0IHBvcnRmb2xpb0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9BbGwnKTtcbiBjb25zdCBwb3J0Zm9saW9JbnRlcmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9JbnRlcmlvcicpO1xuIGNvbnN0IHBvcnRmb2xpb0ZpbmlzaGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9GaW5pc2hpbmcnKTtcbnBvcnRmb2xpb0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgIHNsaWRlc1JlbmRlcihzbGlkZXNQb3J0Zm9sKTtcbn0pO1xuXG4gcG9ydGZvbGlvSW50ZXJpb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgIGxldCBjb3VudCA9IDA7XG4gICAgIGxldCBzb3J0ZWRTbGlkZXMgPSBbXTtcbiAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgICBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnKSB7XG4gICAgICAgICAgICAgc29ydGVkU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICAgICAgIGNvdW50ICs9MTtcbiAgICAgICAgIH1cbiAgICAgfSk7XG4gICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcbiAgICAgc2xpZGVzUmVuZGVyKHNvcnRlZFNsaWRlcyxjb3VudCk7XG4gfSk7XG5cbnBvcnRmb2xpb0ZpbmlzaGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHNvcnRlZFNsaWRlcyA9IFtdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgIHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKHNsaWRlLnR5cGUgPT09ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnKSB7XG4gICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgICAgICBjb3VudCArPTE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY291bnQgPiA0KSBjb3VudCA9IDQ7XG4gICAgc2xpZGVzUmVuZGVyKHNvcnRlZFNsaWRlcyxjb3VudCk7XG59KTsiXX0=
