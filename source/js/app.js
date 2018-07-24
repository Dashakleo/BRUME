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
            992: {
                type: 'carousel',
                perView: 1,
                focusAt: 'center',
                arrows: false,
                peek: 100,
                gap: 45
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

