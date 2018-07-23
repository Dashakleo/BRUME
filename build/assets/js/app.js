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
    if (window.innerWidth < 992) {
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

    $('.header__arrow-down').click( function() {
        $('html, body').animate({ scrollTop: $('#advantages').offset().top }, 500);
        return false;
    });




});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubGV0IHNsaWRlc1BvcnRmb2xpbyA9IFt7XHJcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8xLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8yLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxyXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0YHRgtC+0LvQvtCy0L7QuSDQsiDRgdGC0LjQu9C1IMKr0JHQvtGF0L7CuycsXHJcbiAgICBpbWc6ICcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMy5qcGcnXHJcbn0sIHtcclxuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcclxuICAgIHRpdGxlOiAn0JvQvtGE0YIg0LjQvdGC0LXRgNGM0LXRgCDQtNC70Y8g0L7RgtC10LvRjyBIaWxvZnQnLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzQuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8xLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8yLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxyXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0YHRgtC+0LvQvtCy0L7QuSDQsiDRgdGC0LjQu9C1IMKr0JHQvtGF0L7CuycsXHJcbiAgICBpbWc6ICcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMy5qcGcnXHJcbn0sIHtcclxuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcclxuICAgIHRpdGxlOiAn0JvQvtGE0YIg0LjQvdGC0LXRgNGM0LXRgCDQtNC70Y8g0L7RgtC10LvRjyBIaWxvZnQnLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzQuanBnJ1xyXG59XTtcclxuXHJcbmxldCBzbGlkZXNQb3J0Zm9sID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2xpZGVzUG9ydGZvbGlvKTtcclxubGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpb01vZGFsJyk7XHJcbmxldCBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvSW1nXCIpO1xyXG5sZXQgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRmb2xpb0Rlc2NyaXB0aW9uXCIpO1xyXG5sZXQgbW9kYWxDb250ZW50ID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xyXG5sZXQgc2xpZGVzQ291bnRlciA9IDE7XHJcblxyXG5jb25zdCBzbGlkZXNET00gPSAoc2xpZGUpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc2xpZGVQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzbGlkZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzbGlkZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoJ2dsaWRlX19zbGlkZScpO1xyXG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XHJcbiAgICBzbGlkZUVsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c2xpZGUuaW1nfSkgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvdmVyYDtcclxuXHJcbiAgICBzbGlkZVBsdXMuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9fZnVsbHNpemUnKTtcclxuICAgIHNsaWRlUGx1cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc2xpZGVQbHVzLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgbW9kYWxJbWcuc3JjID0gc2xpZGUuaW1nO1xyXG4gICAgICAgIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IHNsaWRlLnRpdGxlO1xyXG4gICAgfTtcclxuICAgIHNsaWRlRWwuYXBwZW5kQ2hpbGQoc2xpZGVQbHVzKTtcclxuXHJcbiAgICBzbGlkZVRpdGxlLmlubmVySFRNTCA9IHNsaWRlLnRpdGxlO1xyXG4gICAgc2xpZGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190aXRsZScpO1xyXG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVRpdGxlKTtcclxuXHJcblxyXG4gICAgc2xpZGVUeXBlLmlubmVySFRNTCA9IHNsaWRlLnR5cGU7XHJcbiAgICBzbGlkZVR5cGUuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9fdHlwZScpO1xyXG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVR5cGUpO1xyXG4gICAgcmV0dXJuIHNsaWRlRWw7XHJcbn07XHJcblxyXG5jb25zdCBzbGlkZXNSZW5kZXIgPSBhc3luYyAoc2xpZGVzUG9ydGZvbGlvLCBjb3VudCA9IDQpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsaWRlX190cmFjaycpO1xyXG4gICAgc2xpZGVzRWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBzbGlkZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgc2xpZGVMaXN0LmNsYXNzTGlzdC5hZGQoJ2dsaWRlX19zbGlkZXMnKTtcclxuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyJyk7XHJcblxyXG4gICAgbGV0IHNsaWRlc1BvcnRmb2wgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXNQb3J0Zm9saW8pO1xyXG4gICAgYXdhaXQgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNET00oc2xpZGUpO1xyXG4gICAgICAgIHNsaWRlTGlzdC5hcHBlbmRDaGlsZChzbGlkZUVsKTtcclxuICAgIH0pO1xyXG4gICAgc2xpZGVzRWwuYXBwZW5kQ2hpbGQoc2xpZGVMaXN0KTtcclxuXHJcbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5nbGlkZScsIHtcclxuICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICBwZXJWaWV3OiBjb3VudCxcclxuICAgICAgICBib3VuZDogdHJ1ZSxcclxuICAgICAgICBzdGFydEF0OiAwLFxyXG4gICAgICAgIGdhcDogMFxyXG4gICAgfSk7XHJcbiAgICBnbGlkZS5tb3VudCgpO1xyXG5cclxuICAgIC8v0J/RgNGP0YfQtdGCINGC0LjQvyDQuCDRgtCw0LnRgtC7INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcclxuICAgIGNvbnN0IHNsaWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1zbGlkZXInKTtcclxuICAgIHNsaWRlckVsLm9ubW91c2VvdmVyID0gc2xpZGVyRWwub25tb3VzZW91dCA9IGhhbmRsZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcihlKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcnRmb2xpby1zbGlkZXJfX2Z1bGxzaXplJykpIHtcclxuICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0YXJnZXQuY2hpbGRyZW47XHJcbiAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjaGlsZHJlbik7XHJcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICFjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcnRmb2xpby1zbGlkZXJfX2Z1bGxzaXplJykgPyAgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJyA6IGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50eXBlID09PSAnbW91c2VvdXQnKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3J0Zm9saW8tc2xpZGVyX19mdWxsc2l6ZScpID8gIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIDogY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbnNsaWRlc1JlbmRlcihzbGlkZXNQb3J0Zm9saW8pO1xyXG5cclxuLy/QnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0L/Qu9GO0YFcclxubGV0IGNsb3NlUG9ydGZvbGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xyXG5cclxuY2xvc2VQb3J0Zm9saW8ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCB8fCBldmVudC50YXJnZXQgPT09IG1vZGFsQ29udGVudCkge1xyXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxufTtcclxuXHJcbi8v0KHQvtGA0YLQuNGA0L7QstC60LBcclxuY29uc3QgcG9ydGZvbGlvQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0FsbCcpO1xyXG5jb25zdCBwb3J0Zm9saW9JbnRlcmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9JbnRlcmlvcicpO1xyXG5jb25zdCBwb3J0Zm9saW9GaW5pc2hpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvRmluaXNoaW5nJyk7XHJcbnBvcnRmb2xpb0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2wpO1xyXG59KTtcclxuXHJcbnBvcnRmb2xpb0ludGVyaW9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgc29ydGVkU2xpZGVzID0gW107XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcpIHtcclxuICAgICAgICAgICAgc29ydGVkU2xpZGVzLnB1c2goc2xpZGUpO1xyXG4gICAgICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xyXG4gICAgc2xpZGVzUmVuZGVyKHNvcnRlZFNsaWRlcywgY291bnQpO1xyXG59KTtcclxuXHJcbnBvcnRmb2xpb0ZpbmlzaGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IHNvcnRlZFNsaWRlcyA9IFtdO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcclxuICAgIHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcpIHtcclxuICAgICAgICAgICAgc29ydGVkU2xpZGVzLnB1c2goc2xpZGUpO1xyXG4gICAgICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xyXG4gICAgc2xpZGVzUmVuZGVyKHNvcnRlZFNsaWRlcywgY291bnQpO1xyXG59KTtcclxuXHJcblxyXG4vL9Cd0LDRiNC4INGD0YHQu9GD0LPQuFxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VydmljZXNUYWJzJykub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgaSwgdGFiY29udGVudCwgdGFibGlua3M7XHJcbiAgICBsZXQgdGFiTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VydmljZXNfX2xpbmsnKSkgcmV0dXJuO1xyXG4gICAgdGFiY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXNfX3RhYmNvbnRlbnRcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhYmNvbnRlbnRbaV0uaGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRhYmxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19fbGlua1wiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhYmxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2VzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgICAgIHRhYmxpbmtzW2ldLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFiTmFtZX1gKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlc19faXRlbV9hY3RpdmUnKTtcclxufTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlZmF1bHRTZXJ2aWNlJykuY2xpY2soKTtcclxuXHJcbi8vbWVudVxyXG5sZXQgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWJhcl9fbWVudS1pY29uJyk7XHJcbm1lbnVJY29uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgd2hpbGUgKHRhcmdldCAhPT0gbWVudUljb24pIHtcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWJhcl9fbWVudScpO1xyXG4gICAgbGV0IG1lbnVXaGl0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtYmFyX19sb2dvX3doaXRlJyk7XHJcbiAgICBtZW51LmhpZGRlbiA/IG1lbnUuaGlkZGVuID0gZmFsc2UgOiBtZW51LmhpZGRlbiA9IHRydWU7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIpIHtcclxuICAgICAgICBtZW51V2hpdGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnPyBtZW51V2hpdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgOiBtZW51V2hpdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy9zbGlja1xyXG4gICAgJChcIi5mZWVkYmFja1wiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgfSk7XHJcbiAgICAkKFwiLnNsaWRlcl9faW1nLWJsb2NrXCIpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8v0YHQutGA0L7Qu9C7XHJcbiAgICAkKCcubWVudV9faXRlbScpLmNsaWNrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsX2VsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUtaWNvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgaWYgKCQoc2Nyb2xsX2VsKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3AgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ1dHRvbi1oZWFkZXInKS5jbGljayggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJyNjdXN0b21lcicpLm9mZnNldCgpLnRvcCB9LCA1MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmJ1dHRvbi1zZXJ2aWNlcycpLmNsaWNrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgnI2N1c3RvbWVyJykub2Zmc2V0KCkudG9wIH0sIDUwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmhlYWRlcl9fYXJyb3ctZG93bicpLmNsaWNrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgnI2FkdmFudGFnZXMnKS5vZmZzZXQoKS50b3AgfSwgNTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuIl19
