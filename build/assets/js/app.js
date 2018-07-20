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
function serviceTab(event, tabName) {
    let i, tabcontent, tablinks;

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
    event.currentTarget.classList.add('services__link_active');
    event.currentTarget.parentNode.classList.add('services__item_active');
}

document.querySelector('#defaultService').click();

//menu
function openMenu(x) {
    let menu = document.querySelector('#top-bar__menu');
    x.classList.toggle("change");
    menu.hidden ? menu.hidden = false : menu.hidden = true
}

let menuItem = document.querySelectorAll('.menu__item');
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', (event) => {
        document.querySelector('#top-bar__menu-icon').click();
    })
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubGV0IHNsaWRlc1BvcnRmb2xpbyA9IFt7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMS5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMi5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzMuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW80LmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMS5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMi5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzMuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW80LmpwZyknXG59XTtcblxubGV0IHNsaWRlc1BvcnRmb2wgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXNQb3J0Zm9saW8pO1xuXG5jb25zdCBzbGlkZXNET00gPSAoc2xpZGUpID0+IHtcbiAgICBjb25zdCBzbGlkZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBzbGlkZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2xpZGVUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoJ2dsaWRlX19zbGlkZScpO1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXNsaWRlcl9faXRlbScpO1xuICAgIHNsaWRlRWwuc3R5bGUuYmFja2dyb3VuZCA9IGAke3NsaWRlLmltZ30gbm8tcmVwZWF0IGNlbnRlciBsZWZ0L2NvdmVyYDtcblxuICAgIHNsaWRlVGl0bGUuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XG4gICAgc2xpZGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190aXRsZScpO1xuICAgIHNsaWRlRWwuYXBwZW5kQ2hpbGQoc2xpZGVUaXRsZSk7XG5cblxuICAgIHNsaWRlVHlwZS5pbm5lckhUTUwgPSBzbGlkZS50eXBlO1xuICAgIHNsaWRlVHlwZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX190eXBlJyk7XG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVR5cGUpO1xuICAgIHJldHVybiBzbGlkZUVsO1xufTtcblxuY29uc3Qgc2xpZGVzUmVuZGVyID0gYXN5bmMgKHNsaWRlc1BvcnRmb2xpbywgY291bnQgPSA0KSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGVfX3RyYWNrJyk7XG4gICAgc2xpZGVzRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgc2xpZGVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzbGlkZUxpc3QuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlcycpO1xuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyJyk7XG5cbiAgICBsZXQgc2xpZGVzUG9ydGZvbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlc1BvcnRmb2xpbyk7XG4gICAgYXdhaXQgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZUVsID0gc2xpZGVzRE9NKHNsaWRlKTtcbiAgICAgICAgc2xpZGVMaXN0LmFwcGVuZENoaWxkKHNsaWRlRWwpO1xuICAgIH0pO1xuICAgIHNsaWRlc0VsLmFwcGVuZENoaWxkKHNsaWRlTGlzdCk7XG5cbiAgICBsZXQgZ2xpZGUgPSBuZXcgR2xpZGUoJy5nbGlkZScsIHtcbiAgICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICAgIHBlclZpZXc6IGNvdW50LFxuICAgICAgICBib3VuZDogdHJ1ZSxcbiAgICAgICAgc3RhcnRBdDogMCxcbiAgICAgICAgZ2FwOiAwXG4gICAgfSk7XG4gICAgZ2xpZGUubW91bnQoKTtcblxuICAgIC8v0J/RgNGP0YfQtdGCINGC0LjQvyDQuCDRgtCw0LnRgtC7INC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LhcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpLm9ubW91c2VvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1zbGlkZXInKS5vbm1vdXNlb3V0ID0gaGFuZGxlcjtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IG90aGVyU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdsaWRlX19zbGlkZS5wb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XG4gICAgICAgIG90aGVyU2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob3RoZXJTbGlkZXMpO1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBldmVudC50YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn07XG5zbGlkZXNSZW5kZXIoc2xpZGVzUG9ydGZvbGlvKTtcblxuXG4vL9Ch0L7RgNGC0LjRgNC+0LLQutCwXG5jb25zdCBwb3J0Zm9saW9BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9ydGZvbGlvQWxsJyk7XG5jb25zdCBwb3J0Zm9saW9JbnRlcmlvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3J0Zm9saW9JbnRlcmlvcicpO1xuY29uc3QgcG9ydGZvbGlvRmluaXNoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ZpbmlzaGluZycpO1xucG9ydGZvbGlvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2wpO1xufSk7XG5cbnBvcnRmb2xpb0ludGVyaW9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgc29ydGVkU2xpZGVzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnKSB7XG4gICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xuICAgIHNsaWRlc1JlbmRlcihzb3J0ZWRTbGlkZXMsIGNvdW50KTtcbn0pO1xuXG5wb3J0Zm9saW9GaW5pc2hpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBzb3J0ZWRTbGlkZXMgPSBbXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJykge1xuICAgICAgICAgICAgc29ydGVkU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcbiAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLCBjb3VudCk7XG59KTtcblxuXG4vL9Cd0LDRiNC4INGD0YHQu9GD0LPQuFxuZnVuY3Rpb24gc2VydmljZVRhYihldmVudCwgdGFiTmFtZSkge1xuICAgIGxldCBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcblxuICAgIHRhYmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzX190YWJjb250ZW50XCIpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhYmNvbnRlbnRbaV0uaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWJsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXNfX2xpbmtcIik7XG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhYmxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2VzX19saW5rX2FjdGl2ZScpO1xuICAgICAgICB0YWJsaW5rc1tpXS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlcnZpY2VzX19pdGVtX2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RhYk5hbWV9YCkuaGlkZGVuID0gZmFsc2U7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlc19fbGlua19hY3RpdmUnKTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc2VydmljZXNfX2l0ZW1fYWN0aXZlJyk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZhdWx0U2VydmljZScpLmNsaWNrKCk7XG5cbi8vbWVudVxuZnVuY3Rpb24gb3Blbk1lbnUoeCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUnKTtcbiAgICB4LmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgbWVudS5oaWRkZW4gPyBtZW51LmhpZGRlbiA9IGZhbHNlIDogbWVudS5oaWRkZW4gPSB0cnVlXG59XG5cbmxldCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVudUl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUtaWNvbicpLmNsaWNrKCk7XG4gICAgfSlcbn1cbiJdfQ==
