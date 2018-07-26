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
let modalContent = document.querySelector('.modal-content');
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
    slidePlus.onclick = function () {
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
        gap: 0,
        breakpoints: {
            // 1800: {
            //     peek: 0,
            //     gap: 0
            // },
            992: {
                type: 'carousel',
                perView: 1,
                focusAt: 'center',
                arrows: false,
                peek: 100,
                gap: 45
            },
            768: {
                type: 'carousel',
                perView: 1,
                peek:0,
                gap: 15,
                arrows: false
            }
        }
    });
    glide.mount();

    //Прячет тип и тайтл при наведении
    const sliderEl = document.querySelector('.portfolio-slider');
    sliderEl.onmouseover = sliderEl.onmouseout = handler;


    function handler(e) {
        let target = e.target;
        if (target === document.querySelector('.glide__slides')) return;
        if (target.classList.contains('portfolio-slider__fullsize')) {
            target = target.parentNode;
        }
        let children = target.children;
        children = Array.prototype.slice.call(children);
        if (window.innerWidth > 992) {
            if (e.type === 'mouseover') {
                children.forEach((child) => {
                    !child.classList.contains('portfolio-slider__fullsize') ? child.style.display = 'none' : child.style.display = 'block';
                })
            }
            if (e.type === 'mouseout') {
                children.forEach((child) => {
                    !child.classList.contains('portfolio-slider__fullsize') ? child.style.display = 'block' : child.style.display = 'none';
                })
            }
        } else {
            let plusChild = children.find((child) => {
                return child.classList.contains('portfolio-slider__fullsize')
            });
            if (e.type === 'mouseover') {
                plusChild.style.display = 'none' ? plusChild.style.display = 'block' : plusChild.style.display = 'none'
            }
            if (e.type === 'mouseout') {
                plusChild.style.display = 'none' ? plusChild.style.display = 'none' : plusChild.style.display = 'block'
            }
        }
    }
};
slidesRender(slidesPortfolio);
//Модальное окно при нажатии на плюс
let closePortfolio = document.getElementsByClassName("close")[0];

closePortfolio.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
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
        menuWhite.style.display === 'none' ? menuWhite.style.display = 'block' : menuWhite.style.display = 'none'
    }
};


$(document).ready(function () {
    //slick
    $(".feedback").slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false
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
    $('.menu__item').click(function () {
        let scroll_el = $(this).attr('href');
        document.querySelector('#top-bar__menu-icon').click();
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });

    $('.button-header').click(function () {
        $('html, body').animate({scrollTop: $('#customer').offset().top}, 500);
        return false;
    });
    $('.button-services').click(function () {
        $('html, body').animate({scrollTop: $('#customer').offset().top}, 500);
        return false;
    });

    $('.header__arrow-down').click(function () {
        $('html, body').animate({scrollTop: $('#advantages').offset().top}, 500);
        return false;
    });


});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5sZXQgc2xpZGVzUG9ydGZvbGlvID0gW3tcclxuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxyXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXHJcbiAgICBpbWc6ICcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcnXHJcbn0sIHtcclxuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzEuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcclxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxyXG4gICAgaW1nOiAnLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnJ1xyXG59LCB7XHJcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXHJcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcclxuICAgIGltZzogJy4vYXNzZXRzL2ltZy9wb3J0Zm9saW8zLmpwZydcclxufSwge1xyXG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxyXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXHJcbiAgICBpbWc6ICcuL2Fzc2V0cy9pbWcvcG9ydGZvbGlvNC5qcGcnXHJcbn1dO1xyXG5cclxubGV0IHNsaWRlc1BvcnRmb2wgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXNQb3J0Zm9saW8pO1xyXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvTW9kYWwnKTtcclxubGV0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW9JbWdcIik7XHJcbmxldCBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvRGVzY3JpcHRpb25cIik7XHJcbmxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xyXG5sZXQgc2xpZGVzQ291bnRlciA9IDE7XHJcblxyXG5jb25zdCBzbGlkZXNET00gPSAoc2xpZGUpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc2xpZGVQbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzbGlkZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzbGlkZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoJ2dsaWRlX19zbGlkZScpO1xyXG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XHJcbiAgICBzbGlkZUVsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c2xpZGUuaW1nfSkgbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvdmVyYDtcclxuXHJcbiAgICBzbGlkZVBsdXMuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9fZnVsbHNpemUnKTtcclxuICAgIHNsaWRlUGx1cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc2xpZGVQbHVzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBtb2RhbEltZy5zcmMgPSBzbGlkZS5pbWc7XHJcbiAgICAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XHJcbiAgICB9O1xyXG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVBsdXMpO1xyXG5cclxuICAgIHNsaWRlVGl0bGUuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XHJcbiAgICBzbGlkZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3RpdGxlJyk7XHJcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVGl0bGUpO1xyXG5cclxuXHJcbiAgICBzbGlkZVR5cGUuaW5uZXJIVE1MID0gc2xpZGUudHlwZTtcclxuICAgIHNsaWRlVHlwZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190eXBlJyk7XHJcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVHlwZSk7XHJcbiAgICByZXR1cm4gc2xpZGVFbDtcclxufTtcclxuY29uc3Qgc2xpZGVzUmVuZGVyID0gYXN5bmMgKHNsaWRlc1BvcnRmb2xpbywgY291bnQgPSA0KSA9PiB7XHJcbiAgICBjb25zdCBzbGlkZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZV9fdHJhY2snKTtcclxuICAgIHNsaWRlc0VsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3Qgc2xpZGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdnbGlkZV9fc2xpZGVzJyk7XHJcbiAgICBzbGlkZUxpc3QuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcicpO1xyXG5cclxuICAgIGxldCBzbGlkZXNQb3J0Zm9sID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2xpZGVzUG9ydGZvbGlvKTtcclxuICAgIGF3YWl0IHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgICAgICBjb25zdCBzbGlkZUVsID0gc2xpZGVzRE9NKHNsaWRlKTtcclxuICAgICAgICBzbGlkZUxpc3QuYXBwZW5kQ2hpbGQoc2xpZGVFbCk7XHJcbiAgICB9KTtcclxuICAgIHNsaWRlc0VsLmFwcGVuZENoaWxkKHNsaWRlTGlzdCk7XHJcbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5nbGlkZScsIHtcclxuICAgICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgICBwZXJWaWV3OiBjb3VudCxcclxuICAgICAgICBib3VuZDogdHJ1ZSxcclxuICAgICAgICBzdGFydEF0OiAwLFxyXG4gICAgICAgIGdhcDogMCxcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAvLyAxODAwOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBwZWVrOiAwLFxyXG4gICAgICAgICAgICAvLyAgICAgZ2FwOiAwXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcclxuICAgICAgICAgICAgICAgIHBlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICBmb2N1c0F0OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwZWVrOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBnYXA6IDQ1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Nhcm91c2VsJyxcclxuICAgICAgICAgICAgICAgIHBlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICBwZWVrOjAsXHJcbiAgICAgICAgICAgICAgICBnYXA6IDE1LFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBnbGlkZS5tb3VudCgpO1xyXG5cclxuICAgIC8v0J/RgNGP0YfQtdGCINGC0LjQvyDQuCDRgtCw0LnRgtC7INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcclxuICAgIGNvbnN0IHNsaWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1zbGlkZXInKTtcclxuICAgIHNsaWRlckVsLm9ubW91c2VvdmVyID0gc2xpZGVyRWwub25tb3VzZW91dCA9IGhhbmRsZXI7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGVfX3NsaWRlcycpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcnRmb2xpby1zbGlkZXJfX2Z1bGxzaXplJykpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZHJlbjtcclxuICAgICAgICBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNoaWxkcmVuKTtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcclxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncG9ydGZvbGlvLXNsaWRlcl9fZnVsbHNpemUnKSA/IGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3J0Zm9saW8tc2xpZGVyX19mdWxsc2l6ZScpID8gY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdibG9jaycgOiBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwbHVzQ2hpbGQgPSBjaGlsZHJlbi5maW5kKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucygncG9ydGZvbGlvLXNsaWRlcl9fZnVsbHNpemUnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlb3ZlcicpIHtcclxuICAgICAgICAgICAgICAgIHBsdXNDaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnID8gcGx1c0NoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIDogcGx1c0NoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS50eXBlID09PSAnbW91c2VvdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVzQ2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJyA/IHBsdXNDaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogcGx1c0NoaWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbnNsaWRlc1JlbmRlcihzbGlkZXNQb3J0Zm9saW8pO1xyXG4vL9Cc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQv9C70Y7RgVxyXG5sZXQgY2xvc2VQb3J0Zm9saW8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG5jbG9zZVBvcnRmb2xpby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwgfHwgZXZlbnQudGFyZ2V0ID09PSBtb2RhbENvbnRlbnQpIHtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL9Ch0L7RgNGC0LjRgNC+0LLQutCwXHJcbmNvbnN0IHBvcnRmb2xpb0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9BbGwnKTtcclxuY29uc3QgcG9ydGZvbGlvSW50ZXJpb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvSW50ZXJpb3InKTtcclxuY29uc3QgcG9ydGZvbGlvRmluaXNoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ZpbmlzaGluZycpO1xyXG5wb3J0Zm9saW9BbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcclxuICAgIHNsaWRlc1JlbmRlcihzbGlkZXNQb3J0Zm9sKTtcclxufSk7XHJcblxyXG5wb3J0Zm9saW9JbnRlcmlvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IHNvcnRlZFNsaWRlcyA9IFtdO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcclxuICAgIHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnKSB7XHJcbiAgICAgICAgICAgIHNvcnRlZFNsaWRlcy5wdXNoKHNsaWRlKTtcclxuICAgICAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcclxuICAgIHNsaWRlc1JlbmRlcihzb3J0ZWRTbGlkZXMsIGNvdW50KTtcclxufSk7XHJcblxyXG5wb3J0Zm9saW9GaW5pc2hpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBzb3J0ZWRTbGlkZXMgPSBbXTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZScpO1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XHJcbiAgICBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNsaWRlLnR5cGUgPT09ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnKSB7XHJcbiAgICAgICAgICAgIHNvcnRlZFNsaWRlcy5wdXNoKHNsaWRlKTtcclxuICAgICAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcclxuICAgIHNsaWRlc1JlbmRlcihzb3J0ZWRTbGlkZXMsIGNvdW50KTtcclxufSk7XHJcblxyXG5cclxuLy/QndCw0YjQuCDRg9GB0LvRg9Cz0LhcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcnZpY2VzVGFicycpLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xyXG4gICAgbGV0IHRhYk5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlcnZpY2VzX19saW5rJykpIHJldHVybjtcclxuICAgIHRhYmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX190YWJjb250ZW50XCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YWJjb250ZW50W2ldLmhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0YWJsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXNfX2xpbmtcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YWJsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZXJ2aWNlc19fbGlua19hY3RpdmUnKTtcclxuICAgICAgICB0YWJsaW5rc1tpXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2VzX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhYk5hbWV9YCkuaGlkZGVuID0gZmFsc2U7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlc19fbGlua19hY3RpdmUnKTtcclxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc2VydmljZXNfX2l0ZW1fYWN0aXZlJyk7XHJcbn07XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZhdWx0U2VydmljZScpLmNsaWNrKCk7XHJcblxyXG4vL21lbnVcclxubGV0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUtaWNvbicpO1xyXG5tZW51SWNvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHdoaWxlICh0YXJnZXQgIT09IG1lbnVJY29uKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUnKTtcclxuICAgIGxldCBtZW51V2hpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWJhcl9fbG9nb193aGl0ZScpO1xyXG4gICAgbWVudS5oaWRkZW4gPyBtZW51LmhpZGRlbiA9IGZhbHNlIDogbWVudS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSB7XHJcbiAgICAgICAgbWVudVdoaXRlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/IG1lbnVXaGl0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA6IG1lbnVXaGl0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9zbGlja1xyXG4gICAgJChcIi5mZWVkYmFja1wiKS5zbGljayh7XHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgICQoXCIuc2xpZGVyX19pbWctYmxvY2tcIikuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/RgdC60YDQvtC70LtcclxuICAgICQoJy5tZW51X19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxfZWwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWJhcl9fbWVudS1pY29uJykuY2xpY2soKTtcclxuICAgICAgICBpZiAoJChzY3JvbGxfZWwpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKHNjcm9sbF9lbCkub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ1dHRvbi1oZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2N1c3RvbWVyJykub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgICQoJy5idXR0b24tc2VydmljZXMnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnI2N1c3RvbWVyJykub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuaGVhZGVyX19hcnJvdy1kb3duJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJyNhZHZhbnRhZ2VzJykub2Zmc2V0KCkudG9wfSwgNTAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbiJdfQ==
