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

let menuItem = document.querySelectorAll('.menu__item');
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', (event) => {
        document.querySelector('#top-bar__menu-icon').click();
    })
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5sZXQgc2xpZGVzUG9ydGZvbGlvID0gW3tcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8xLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8yLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INGB0YLQvtC70L7QstC+0Lkg0LIg0YHRgtC40LvQtSDCq9CR0L7RhdC+wrsnLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMy5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9Cb0L7RhNGCINC40L3RgtC10YDRjNC10YAg0LTQu9GPINC+0YLQtdC70Y8gSGlsb2Z0JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzQuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8xLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8yLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INGB0YLQvtC70L7QstC+0Lkg0LIg0YHRgtC40LvQtSDCq9CR0L7RhdC+wrsnLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMy5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9Cb0L7RhNGCINC40L3RgtC10YDRjNC10YAg0LTQu9GPINC+0YLQtdC70Y8gSGlsb2Z0JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzQuanBnKSdcbn1dO1xuXG5sZXQgc2xpZGVzUG9ydGZvbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlc1BvcnRmb2xpbyk7XG5cbmNvbnN0IHNsaWRlc0RPTSA9IChzbGlkZSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHNsaWRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbGlkZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlJyk7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XG4gICAgc2xpZGVFbC5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7c2xpZGUuaW1nfSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY292ZXJgO1xuXG4gICAgc2xpZGVUaXRsZS5pbm5lckhUTUwgPSBzbGlkZS50aXRsZTtcbiAgICBzbGlkZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3RpdGxlJyk7XG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVRpdGxlKTtcblxuXG4gICAgc2xpZGVUeXBlLmlubmVySFRNTCA9IHNsaWRlLnR5cGU7XG4gICAgc2xpZGVUeXBlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3R5cGUnKTtcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVHlwZSk7XG4gICAgcmV0dXJuIHNsaWRlRWw7XG59O1xuXG5jb25zdCBzbGlkZXNSZW5kZXIgPSBhc3luYyAoc2xpZGVzUG9ydGZvbGlvLCBjb3VudCA9IDQpID0+IHtcbiAgICBjb25zdCBzbGlkZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZV9fdHJhY2snKTtcbiAgICBzbGlkZXNFbC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBzbGlkZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdnbGlkZV9fc2xpZGVzJyk7XG4gICAgc2xpZGVMaXN0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXInKTtcblxuICAgIGxldCBzbGlkZXNQb3J0Zm9sID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2xpZGVzUG9ydGZvbGlvKTtcbiAgICBhd2FpdCBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNET00oc2xpZGUpO1xuICAgICAgICBzbGlkZUxpc3QuYXBwZW5kQ2hpbGQoc2xpZGVFbCk7XG4gICAgfSk7XG4gICAgc2xpZGVzRWwuYXBwZW5kQ2hpbGQoc2xpZGVMaXN0KTtcblxuICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmdsaWRlJywge1xuICAgICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgICAgcGVyVmlldzogY291bnQsXG4gICAgICAgIGJvdW5kOiB0cnVlLFxuICAgICAgICBzdGFydEF0OiAwLFxuICAgICAgICBnYXA6IDBcbiAgICB9KTtcbiAgICBnbGlkZS5tb3VudCgpO1xuXG4gICAgLy/Qn9GA0Y/Rh9C10YIg0YLQuNC/INC4INGC0LDQudGC0Lsg0L/RgNC4INC90LDQstC10LTQtdC90LjQuFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tc2xpZGVyJykub25tb3VzZW92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpLm9ubW91c2VvdXQgPSBoYW5kbGVyO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgICBsZXQgb3RoZXJTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2xpZGVfX3NsaWRlLnBvcnRmb2xpby1zbGlkZXJfX2l0ZW0nKTtcbiAgICAgICAgb3RoZXJTbGlkZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChvdGhlclNsaWRlcyk7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGV2ZW50LnRhcmdldC5jaGlsZHJlbjtcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjaGlsZHJlbik7XG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufTtcbnNsaWRlc1JlbmRlcihzbGlkZXNQb3J0Zm9saW8pO1xuXG5cbi8v0KHQvtGA0YLQuNGA0L7QstC60LBcbmNvbnN0IHBvcnRmb2xpb0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9BbGwnKTtcbmNvbnN0IHBvcnRmb2xpb0ludGVyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ludGVyaW9yJyk7XG5jb25zdCBwb3J0Zm9saW9GaW5pc2hpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvRmluaXNoaW5nJyk7XG5wb3J0Zm9saW9BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBzbGlkZXNSZW5kZXIoc2xpZGVzUG9ydGZvbCk7XG59KTtcblxucG9ydGZvbGlvSW50ZXJpb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBzb3J0ZWRTbGlkZXMgPSBbXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcpIHtcbiAgICAgICAgICAgIHNvcnRlZFNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY291bnQgPiA0KSBjb3VudCA9IDQ7XG4gICAgc2xpZGVzUmVuZGVyKHNvcnRlZFNsaWRlcywgY291bnQpO1xufSk7XG5cbnBvcnRmb2xpb0ZpbmlzaGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHNvcnRlZFNsaWRlcyA9IFtdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xuICAgIHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKHNsaWRlLnR5cGUgPT09ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnKSB7XG4gICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xuICAgIHNsaWRlc1JlbmRlcihzb3J0ZWRTbGlkZXMsIGNvdW50KTtcbn0pO1xuXG5cbi8v0J3QsNGI0Lgg0YPRgdC70YPQs9C4XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VydmljZXNUYWJzJykub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xuICAgIGxldCB0YWJOYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VydmljZXNfX2xpbmsnKSkgcmV0dXJuO1xuICAgIHRhYmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX190YWJjb250ZW50XCIpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhYmNvbnRlbnRbaV0uaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgdGFibGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX19saW5rXCIpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YWJsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlc19fbGlua19hY3RpdmUnKTtcbiAgICAgICAgdGFibGlua3NbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlc19faXRlbV9hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWJOYW1lfWApLmhpZGRlbiA9IGZhbHNlO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzX19saW5rX2FjdGl2ZScpO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc2VydmljZXNfX2l0ZW1fYWN0aXZlJyk7XG59O1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlZmF1bHRTZXJ2aWNlJykuY2xpY2soKTtcblxuLy9tZW51XG5sZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWJhcl9fbWVudS1pY29uJyk7XG5tZW51SWNvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgd2hpbGUgKHRhcmdldCAhPT0gbWVudUljb24pIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUnKTtcbiAgICBtZW51LmhpZGRlbiA/IG1lbnUuaGlkZGVuID0gZmFsc2UgOiBtZW51LmhpZGRlbiA9IHRydWU7XG59O1xuXG5sZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbS5sZW5ndGg7IGkrKykge1xuICAgIG1lbnVJdGVtW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtYmFyX19tZW51LWljb24nKS5jbGljaygpO1xuICAgIH0pXG59XG4iXX0=
