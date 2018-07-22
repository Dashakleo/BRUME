'use strict';
let slidesPortfolio = [{
    type: 'Дизайн интерьера',
    title: 'Дизайн интерьера гостинной',
    img: './assets/img/portfolio1.jpg'
}, {
    type: 'Отделочная работа',
    title: 'Дизайн интерьера гостинной',
    img: './assets/img/portfolio2.jpg'
}, {
    type: 'Дизайн интерьера',
    title: 'Дизайн столовой в стиле «Бохо»',
    img: './assets/img/portfolio3.jpg'
}, {
    type: 'Дизайн интерьера',
    title: 'Лофт интерьер для отеля Hiloft',
    img: './assets/img/portfolio4.jpg'
}, {
    type: 'Дизайн интерьера',
    title: 'Дизайн интерьера гостинной',
    img: './assets/img/portfolio1.jpg'
}, {
    type: 'Отделочная работа',
    title: 'Дизайн интерьера гостинной',
    img: './assets/img/portfolio2.jpg'
}, {
    type: 'Дизайн интерьера',
    title: 'Дизайн столовой в стиле «Бохо»',
    img: './assets/img/portfolio3.jpg'
}, {
    type: 'Дизайн интерьера',
    title: 'Лофт интерьер для отеля Hiloft',
    img: './assets/img/portfolio4.jpg'
}];

let slidesPortfol = Array.prototype.slice.call(slidesPortfolio);
let modal = document.getElementById('portfolioModal');
let modalImg = document.getElementById("portfolioImg");
let captionText = document.getElementById("portfolioDescription");
let modalContent =document.querySelector('.modal-content');
let slidesCounter = 1;

const slidesDOM = (slide) => {
    const slideEl = document.createElement('li');
    const slidePlus = document.createElement('div');
    const slideTitle = document.createElement('div');
    const slideType = document.createElement('div');

    slideEl.classList.add('glide__slide');
    slideEl.classList.add('portfolio-slider__item');
    slideEl.style.background = `url(${slide.img}) no-repeat center left/cover`;

    slidePlus.classList.add('portfolio-slider__fullsize');
    slidePlus.style.display = 'none';
    slidePlus.onclick = function(){
        modal.style.display = "block";
        modalImg.src = slide.img;
        captionText.innerHTML = slide.title;
    };
    slideEl.appendChild(slidePlus);

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
    const sliderEl = document.querySelector('.portfolio-slider');
    sliderEl.onmouseover = sliderEl.onmouseout = handler;

    function handler(e) {
        let target = e.target;
       if (target.classList.contains('portfolio-slider__fullsize')) {
           target = target.parentNode;
       }
        let children = target.children;
        children = Array.prototype.slice.call(children);
        if (e.type === 'mouseover') {
            children.forEach((child) => {
                !child.classList.contains('portfolio-slider__fullsize') ?  child.style.display = 'none' : child.style.display = 'block';
            })
        }
        if (e.type === 'mouseout') {
            children.forEach((child) => {
                !child.classList.contains('portfolio-slider__fullsize') ?  child.style.display = 'block' : child.style.display = 'none';
            })
        }
    }
};
slidesRender(slidesPortfolio);

//Модальное окно при нажатии на плюс
let closePortfolio = document.getElementsByClassName("close")[0];

closePortfolio.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === modal || event.target === modalContent) {
        modal.style.display = "none";
    }
};

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
            count += 1;
        }
    });
    if (count > 4) count = 4;
    slidesRender(sortedSlides, count);
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
            count += 1;
        }
    });
    if (count > 4) count = 4;
    slidesRender(sortedSlides, count);
});


//Наши услуги
document.querySelector('#servicesTabs').onclick = function (e) {
    let i, tabcontent, tablinks;
    let tabName = e.target.name;
    if (!e.target.classList.contains('services__link')) return;
    tabcontent = document.querySelectorAll(".services__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].hidden = true;
    }
    tablinks = document.querySelectorAll(".services__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('services__link_active');
        tablinks[i].parentNode.classList.remove('services__item_active');
    }

    document.querySelector(`#${tabName}`).hidden = false;
    e.target.classList.add('services__link_active');
    e.target.parentNode.classList.add('services__item_active');
};
document.querySelector('#defaultService').click();

//menu
let menuIcon = document.querySelector('#top-bar__menu-icon');
menuIcon.onclick = function (e) {
    let target = e.target;
    while (target !== menuIcon) {
        target = target.parentNode;
    }
    target.classList.toggle("change");
    let menu = document.querySelector('#top-bar__menu');
    let menuWhite = document.querySelector('.top-bar__logo_white');
    menu.hidden ? menu.hidden = false : menu.hidden = true;
    if (document.querySelector("body").style.width < 980) {
        menuWhite.style.display === 'none'? menuWhite.style.display = 'block' : menuWhite.style.display = 'none'
    }
};


$(document).ready(function() {
    //slick
    $(".feedback").slick({
        dots: true,
        speed: 500,
        slidesToShow: 1
    });
    $(".slider__img-block").slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });

    //скролл
    $('.menu__item').click( function() {
        let scroll_el = $(this).attr('href');
        document.querySelector('#top-bar__menu-icon').click();
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    $('.button-header').click( function() {
        $('html, body').animate({ scrollTop: $('#customer').offset().top }, 500);
        return false;
    });
    $('.button-services').click( function() {
        $('html, body').animate({ scrollTop: $('#customer').offset().top }, 500);
        return false;
    });




});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5sZXQgc2xpZGVzUG9ydGZvbGlvID0gW3tcclxuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxyXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXHJcbiAgICBpbWc6ICcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcnXHJcbn0sIHtcclxuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxyXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXHJcbiAgICBpbWc6ICcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcnXHJcbn1dO1xyXG5cclxubGV0IHNsaWRlc1BvcnRmb2wgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXNQb3J0Zm9saW8pO1xyXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvTW9kYWwnKTtcclxubGV0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW9JbWdcIik7XHJcbmxldCBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvRGVzY3JpcHRpb25cIik7XHJcbmxldCBtb2RhbENvbnRlbnQgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XHJcbmxldCBzbGlkZXNDb3VudGVyID0gMTtcclxuXHJcbmNvbnN0IHNsaWRlc0RPTSA9IChzbGlkZSkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzbGlkZVBsdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHNsaWRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHNsaWRlVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlJyk7XHJcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX2l0ZW0nKTtcclxuICAgIHNsaWRlRWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzbGlkZS5pbWd9KSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY292ZXJgO1xyXG5cclxuICAgIHNsaWRlUGx1cy5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX19mdWxsc2l6ZScpO1xyXG4gICAgc2xpZGVQbHVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzbGlkZVBsdXMub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBtb2RhbEltZy5zcmMgPSBzbGlkZS5pbWc7XHJcbiAgICAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XHJcbiAgICB9O1xyXG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVBsdXMpO1xyXG5cclxuICAgIHNsaWRlVGl0bGUuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XHJcbiAgICBzbGlkZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3RpdGxlJyk7XHJcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVGl0bGUpO1xyXG5cclxuXHJcbiAgICBzbGlkZVR5cGUuaW5uZXJIVE1MID0gc2xpZGUudHlwZTtcclxuICAgIHNsaWRlVHlwZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190eXBlJyk7XHJcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVHlwZSk7XHJcbiAgICByZXR1cm4gc2xpZGVFbDtcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlc1JlbmRlciA9IGFzeW5jIChzbGlkZXNQb3J0Zm9saW8sIGNvdW50ID0gNCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGVfX3RyYWNrJyk7XHJcbiAgICBzbGlkZXNFbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHNsaWRlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBzbGlkZUxpc3QuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlcycpO1xyXG4gICAgc2xpZGVMaXN0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXInKTtcclxuXHJcbiAgICBsZXQgc2xpZGVzUG9ydGZvbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlc1BvcnRmb2xpbyk7XHJcbiAgICBhd2FpdCBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVFbCA9IHNsaWRlc0RPTShzbGlkZSk7XHJcbiAgICAgICAgc2xpZGVMaXN0LmFwcGVuZENoaWxkKHNsaWRlRWwpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZXNFbC5hcHBlbmRDaGlsZChzbGlkZUxpc3QpO1xyXG5cclxuICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmdsaWRlJywge1xyXG4gICAgICAgIHR5cGU6ICdzbGlkZXInLFxyXG4gICAgICAgIHBlclZpZXc6IGNvdW50LFxyXG4gICAgICAgIGJvdW5kOiB0cnVlLFxyXG4gICAgICAgIHN0YXJ0QXQ6IDAsXHJcbiAgICAgICAgZ2FwOiAwXHJcbiAgICB9KTtcclxuICAgIGdsaWRlLm1vdW50KCk7XHJcblxyXG4gICAgLy/Qn9GA0Y/Rh9C10YIg0YLQuNC/INC4INGC0LDQudGC0Lsg0L/RgNC4INC90LDQstC10LTQtdC90LjQuFxyXG4gICAgY29uc3Qgc2xpZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpO1xyXG4gICAgc2xpZGVyRWwub25tb3VzZW92ZXIgPSBzbGlkZXJFbC5vbm1vdXNlb3V0ID0gaGFuZGxlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9ydGZvbGlvLXNsaWRlcl9fZnVsbHNpemUnKSkge1xyXG4gICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgfVxyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZHJlbjtcclxuICAgICAgICBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNoaWxkcmVuKTtcclxuICAgICAgICBpZiAoZS50eXBlID09PSAnbW91c2VvdmVyJykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncG9ydGZvbGlvLXNsaWRlcl9fZnVsbHNpemUnKSA/ICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZW91dCcpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICFjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcnRmb2xpby1zbGlkZXJfX2Z1bGxzaXplJykgPyAgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgOiBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2xpbyk7XHJcblxyXG4vL9Cc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQv9C70Y7RgVxyXG5sZXQgY2xvc2VQb3J0Zm9saW8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG5jbG9zZVBvcnRmb2xpby5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn07XHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsIHx8IGV2ZW50LnRhcmdldCA9PT0gbW9kYWxDb250ZW50KSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy/QodC+0YDRgtC40YDQvtCy0LrQsFxyXG5jb25zdCBwb3J0Zm9saW9BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvQWxsJyk7XHJcbmNvbnN0IHBvcnRmb2xpb0ludGVyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ludGVyaW9yJyk7XHJcbmNvbnN0IHBvcnRmb2xpb0ZpbmlzaGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9GaW5pc2hpbmcnKTtcclxucG9ydGZvbGlvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBzbGlkZXNSZW5kZXIoc2xpZGVzUG9ydGZvbCk7XHJcbn0pO1xyXG5cclxucG9ydGZvbGlvSW50ZXJpb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBzb3J0ZWRTbGlkZXMgPSBbXTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNsaWRlLnR5cGUgPT09ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJykge1xyXG4gICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoY291bnQgPiA0KSBjb3VudCA9IDQ7XHJcbiAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLCBjb3VudCk7XHJcbn0pO1xyXG5cclxucG9ydGZvbGlvRmluaXNoaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgc29ydGVkU2xpZGVzID0gW107XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJykge1xyXG4gICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoY291bnQgPiA0KSBjb3VudCA9IDQ7XHJcbiAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLCBjb3VudCk7XHJcbn0pO1xyXG5cclxuXHJcbi8v0J3QsNGI0Lgg0YPRgdC70YPQs9C4XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXJ2aWNlc1RhYnMnKS5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcclxuICAgIGxldCB0YWJOYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZXJ2aWNlc19fbGluaycpKSByZXR1cm47XHJcbiAgICB0YWJjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19fdGFiY29udGVudFwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFiY29udGVudFtpXS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGFibGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX19saW5rXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICAgICAgdGFibGlua3NbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlc19faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWJOYW1lfWApLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VydmljZXNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzX19pdGVtX2FjdGl2ZScpO1xyXG59O1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVmYXVsdFNlcnZpY2UnKS5jbGljaygpO1xyXG5cclxuLy9tZW51XHJcbmxldCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtYmFyX19tZW51LWljb24nKTtcclxubWVudUljb24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB3aGlsZSAodGFyZ2V0ICE9PSBtZW51SWNvbikge1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtYmFyX19tZW51Jyk7XHJcbiAgICBsZXQgbWVudVdoaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1iYXJfX2xvZ29fd2hpdGUnKTtcclxuICAgIG1lbnUuaGlkZGVuID8gbWVudS5oaWRkZW4gPSBmYWxzZSA6IG1lbnUuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS53aWR0aCA8IDk4MCkge1xyXG4gICAgICAgIG1lbnVXaGl0ZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc/IG1lbnVXaGl0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA6IG1lbnVXaGl0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvL3NsaWNrXHJcbiAgICAkKFwiLmZlZWRiYWNrXCIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICB9KTtcclxuICAgICQoXCIuc2xpZGVyX19pbWctYmxvY2tcIikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/RgdC60YDQvtC70LtcclxuICAgICQoJy5tZW51X19pdGVtJykuY2xpY2soIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxfZWwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWJhcl9fbWVudS1pY29uJykuY2xpY2soKTtcclxuICAgICAgICBpZiAoJChzY3JvbGxfZWwpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChzY3JvbGxfZWwpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnV0dG9uLWhlYWRlcicpLmNsaWNrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgnI2N1c3RvbWVyJykub2Zmc2V0KCkudG9wIH0sIDUwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuYnV0dG9uLXNlcnZpY2VzJykuY2xpY2soIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCcjY3VzdG9tZXInKS5vZmZzZXQoKS50b3AgfSwgNTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuIl19
