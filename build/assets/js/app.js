'use strict';
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
}, {
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
        if (event.type === 'mouseover') {
            children.forEach((child) => {
                child.hidden = true;
            })
        }
        if (event.type === 'mouseout') {
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
    menu.hidden ? menu.hidden = false : menu.hidden = true;
};



$(document).ready(function() {
    //slick
    $('.single-item').slick();
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmxldCBzbGlkZXNQb3J0Zm9saW8gPSBbe1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0YHRgtC+0LvQvtCy0L7QuSDQsiDRgdGC0LjQu9C1IMKr0JHQvtGF0L7CuycsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JvQvtGE0YIg0LjQvdGC0LXRgNGM0LXRgCDQtNC70Y8g0L7RgtC10LvRjyBIaWxvZnQnLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0YHRgtC+0LvQvtCy0L7QuSDQsiDRgdGC0LjQu9C1IMKr0JHQvtGF0L7CuycsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JvQvtGE0YIg0LjQvdGC0LXRgNGM0LXRgCDQtNC70Y8g0L7RgtC10LvRjyBIaWxvZnQnLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcpJ1xufV07XG5cbmxldCBzbGlkZXNQb3J0Zm9sID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2xpZGVzUG9ydGZvbGlvKTtcblxuY29uc3Qgc2xpZGVzRE9NID0gKHNsaWRlKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc2xpZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNsaWRlVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKCdnbGlkZV9fc2xpZGUnKTtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX2l0ZW0nKTtcbiAgICBzbGlkZUVsLnN0eWxlLmJhY2tncm91bmQgPSBgJHtzbGlkZS5pbWd9IG5vLXJlcGVhdCBjZW50ZXIgbGVmdC9jb3ZlcmA7XG5cbiAgICBzbGlkZVRpdGxlLmlubmVySFRNTCA9IHNsaWRlLnRpdGxlO1xuICAgIHNsaWRlVGl0bGUuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9fdGl0bGUnKTtcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVGl0bGUpO1xuXG5cbiAgICBzbGlkZVR5cGUuaW5uZXJIVE1MID0gc2xpZGUudHlwZTtcbiAgICBzbGlkZVR5cGUuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9fdHlwZScpO1xuICAgIHNsaWRlRWwuYXBwZW5kQ2hpbGQoc2xpZGVUeXBlKTtcbiAgICByZXR1cm4gc2xpZGVFbDtcbn07XG5cbmNvbnN0IHNsaWRlc1JlbmRlciA9IGFzeW5jIChzbGlkZXNQb3J0Zm9saW8sIGNvdW50ID0gNCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsaWRlX190cmFjaycpO1xuICAgIHNsaWRlc0VsLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHNsaWRlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc2xpZGVMaXN0LmNsYXNzTGlzdC5hZGQoJ2dsaWRlX19zbGlkZXMnKTtcbiAgICBzbGlkZUxpc3QuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcicpO1xuXG4gICAgbGV0IHNsaWRlc1BvcnRmb2wgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXNQb3J0Zm9saW8pO1xuICAgIGF3YWl0IHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVFbCA9IHNsaWRlc0RPTShzbGlkZSk7XG4gICAgICAgIHNsaWRlTGlzdC5hcHBlbmRDaGlsZChzbGlkZUVsKTtcbiAgICB9KTtcbiAgICBzbGlkZXNFbC5hcHBlbmRDaGlsZChzbGlkZUxpc3QpO1xuXG4gICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcuZ2xpZGUnLCB7XG4gICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICBwZXJWaWV3OiBjb3VudCxcbiAgICAgICAgYm91bmQ6IHRydWUsXG4gICAgICAgIHN0YXJ0QXQ6IDAsXG4gICAgICAgIGdhcDogMFxuICAgIH0pO1xuICAgIGdsaWRlLm1vdW50KCk7XG5cbiAgICAvL9Cf0YDRj9GH0LXRgiDRgtC40L8g0Lgg0YLQsNC50YLQuyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1zbGlkZXInKS5vbm1vdXNlb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tc2xpZGVyJykub25tb3VzZW91dCA9IGhhbmRsZXI7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBvdGhlclNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nbGlkZV9fc2xpZGUucG9ydGZvbGlvLXNsaWRlcl9faXRlbScpO1xuICAgICAgICBvdGhlclNsaWRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG90aGVyU2xpZGVzKTtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNoaWxkcmVuKTtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn07XG5zbGlkZXNSZW5kZXIoc2xpZGVzUG9ydGZvbGlvKTtcblxuXG4vL9Ch0L7RgNGC0LjRgNC+0LLQutCwXG5jb25zdCBwb3J0Zm9saW9BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvQWxsJyk7XG5jb25zdCBwb3J0Zm9saW9JbnRlcmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9JbnRlcmlvcicpO1xuY29uc3QgcG9ydGZvbGlvRmluaXNoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ZpbmlzaGluZycpO1xucG9ydGZvbGlvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2wpO1xufSk7XG5cbnBvcnRmb2xpb0ludGVyaW9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgc29ydGVkU2xpZGVzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnKSB7XG4gICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xuICAgIHNsaWRlc1JlbmRlcihzb3J0ZWRTbGlkZXMsIGNvdW50KTtcbn0pO1xuXG5wb3J0Zm9saW9GaW5pc2hpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBzb3J0ZWRTbGlkZXMgPSBbXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJykge1xuICAgICAgICAgICAgc29ydGVkU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcbiAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLCBjb3VudCk7XG59KTtcblxuXG4vL9Cd0LDRiNC4INGD0YHQu9GD0LPQuFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcnZpY2VzVGFicycpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIGxldCBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcbiAgICBsZXQgdGFiTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlcnZpY2VzX19saW5rJykpIHJldHVybjtcbiAgICB0YWJjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19fdGFiY29udGVudFwiKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YWJjb250ZW50W2ldLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHRhYmxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19fbGlua1wiKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfX2xpbmtfYWN0aXZlJyk7XG4gICAgICAgIHRhYmxpbmtzW2ldLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFiTmFtZX1gKS5oaWRkZW4gPSBmYWxzZTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlc19fbGlua19hY3RpdmUnKTtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzX19pdGVtX2FjdGl2ZScpO1xufTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZhdWx0U2VydmljZScpLmNsaWNrKCk7XG5cbi8vbWVudVxubGV0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUtaWNvbicpO1xubWVudUljb24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIHdoaWxlICh0YXJnZXQgIT09IG1lbnVJY29uKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtYmFyX19tZW51Jyk7XG4gICAgbWVudS5oaWRkZW4gPyBtZW51LmhpZGRlbiA9IGZhbHNlIDogbWVudS5oaWRkZW4gPSB0cnVlO1xufTtcblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vc2xpY2tcbiAgICAkKCcuc2luZ2xlLWl0ZW0nKS5zbGljaygpO1xuICAgICQoXCIuZmVlZGJhY2tcIikuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICB9KTtcbiAgICAkKFwiLnNsaWRlcl9faW1nLWJsb2NrXCIpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWVcbiAgICB9KTtcblxuICAgIC8v0YHQutGA0L7Qu9C7XG4gICAgJCgnLm1lbnVfX2l0ZW0nKS5jbGljayggZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzY3JvbGxfZWwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUtaWNvbicpLmNsaWNrKCk7XG4gICAgICAgIGlmICgkKHNjcm9sbF9lbCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChzY3JvbGxfZWwpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pOyJdfQ==
