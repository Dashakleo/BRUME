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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNsaWRlc1BvcnRmb2xpbyA9IFt7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMS5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMi5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDRgdGC0L7Qu9C+0LLQvtC5INCyINGB0YLQuNC70LUgwqvQkdC+0YXQvsK7JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzMuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQm9C+0YTRgiDQuNC90YLQtdGA0YzQtdGAINC00LvRjyDQvtGC0LXQu9GPIEhpbG9mdCcsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW80LmpwZyknXG59LHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8xLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW8yLmpwZyknXG59LCB7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INGB0YLQvtC70L7QstC+0Lkg0LIg0YHRgtC40LvQtSDCq9CR0L7RhdC+wrsnLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMy5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9Cb0L7RhNGCINC40L3RgtC10YDRjNC10YAg0LTQu9GPINC+0YLQtdC70Y8gSGlsb2Z0JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzQuanBnKSdcbn1dO1xuXG5sZXQgc2xpZGVzUG9ydGZvbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlc1BvcnRmb2xpbyk7XG5cbmNvbnN0IHNsaWRlc0RPTSA9IChzbGlkZSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHNsaWRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbGlkZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlJyk7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XG4gICAgc2xpZGVFbC5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7c2xpZGUuaW1nfSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY292ZXJgO1xuXG4gICAgc2xpZGVUaXRsZS5pbm5lckhUTUwgPSBzbGlkZS50aXRsZTtcbiAgICBzbGlkZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3RpdGxlJyk7XG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVRpdGxlKTtcblxuXG4gICAgc2xpZGVUeXBlLmlubmVySFRNTCA9IHNsaWRlLnR5cGU7XG4gICAgc2xpZGVUeXBlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3R5cGUnKTtcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVHlwZSk7XG4gICAgcmV0dXJuIHNsaWRlRWw7XG59O1xuXG5jb25zdCBzbGlkZXNSZW5kZXIgPSBhc3luYyAoc2xpZGVzUG9ydGZvbGlvLCBjb3VudCA9IDQpID0+IHtcbiAgICBjb25zdCBzbGlkZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZV9fdHJhY2snKTtcbiAgICBzbGlkZXNFbC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBzbGlkZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdnbGlkZV9fc2xpZGVzJyk7XG4gICAgc2xpZGVMaXN0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXInKTtcblxuICAgIGxldCBzbGlkZXNQb3J0Zm9sID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2xpZGVzUG9ydGZvbGlvKTtcbiAgICBhd2FpdCBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNET00oc2xpZGUpO1xuICAgICAgICBzbGlkZUxpc3QuYXBwZW5kQ2hpbGQoc2xpZGVFbCk7XG4gICAgfSk7XG4gICAgc2xpZGVzRWwuYXBwZW5kQ2hpbGQoc2xpZGVMaXN0KTtcblxuICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmdsaWRlJywge1xuICAgICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgICAgcGVyVmlldzogY291bnQsXG4gICAgICAgIGJvdW5kOiB0cnVlLFxuICAgICAgICBzdGFydEF0OiAwLFxuICAgICAgICBnYXA6IDBcbiAgICB9KTtcbiAgICBnbGlkZS5tb3VudCgpO1xuXG4gICAgLy/Qn9GA0Y/Rh9C10YIg0YLQuNC/INC4INGC0LDQudGC0Lsg0L/RgNC4INC90LDQstC10LTQtdC90LjQuFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tc2xpZGVyJykub25tb3VzZW92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpLm9ubW91c2VvdXQgPSBoYW5kbGVyO1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IG90aGVyU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdsaWRlX19zbGlkZS5wb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XG4gICAgICAgIG90aGVyU2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob3RoZXJTbGlkZXMpO1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBldmVudC50YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn07XG5zbGlkZXNSZW5kZXIoc2xpZGVzUG9ydGZvbGlvKTtcblxuXG4vL9Ch0L7RgNGC0LjRgNC+0LLQutCwXG4gY29uc3QgcG9ydGZvbGlvQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0FsbCcpO1xuIGNvbnN0IHBvcnRmb2xpb0ludGVyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ludGVyaW9yJyk7XG4gY29uc3QgcG9ydGZvbGlvRmluaXNoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ZpbmlzaGluZycpO1xucG9ydGZvbGlvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2wpO1xufSk7XG5cbiBwb3J0Zm9saW9JbnRlcmlvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgbGV0IHNvcnRlZFNsaWRlcyA9IFtdO1xuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgIHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcpIHtcbiAgICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgICAgICAgY291bnQgKz0xO1xuICAgICAgICAgfVxuICAgICB9KTtcbiAgICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xuICAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLGNvdW50KTtcbiB9KTtcblxucG9ydGZvbGlvRmluaXNoaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgc29ydGVkU2xpZGVzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcpIHtcbiAgICAgICAgICAgIHNvcnRlZFNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgICAgIGNvdW50ICs9MTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcbiAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLGNvdW50KTtcbn0pO1xuXG5cbi8v0J3QsNGI0Lgg0YPRgdC70YPQs9C4XG5mdW5jdGlvbiBzZXJ2aWNlVGFiKGV2ZW50LCB0YWJOYW1lKSB7XG4gICAgbGV0IGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xuXG4gICAgdGFiY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXNfX3RhYmNvbnRlbnRcIik7XG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFiY29udGVudFtpXS5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHRhYmxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlc19fbGlua1wiKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFibGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfX2xpbmtfYWN0aXZlJyk7XG4gICAgICAgIHRhYmxpbmtzW2ldLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfX2l0ZW1fYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFiTmFtZX1gKS5oaWRkZW4gPSBmYWxzZTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzX19saW5rX2FjdGl2ZScpO1xuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzZXJ2aWNlc19faXRlbV9hY3RpdmUnKTtcbn1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZhdWx0U2VydmljZScpLmNsaWNrKCk7XG5cbi8vbWVudVxuZnVuY3Rpb24gb3Blbk1lbnUoeCkge1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUnKTtcbiAgICB4LmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XG4gICAgbWVudS5oaWRkZW4gPyBtZW51LmhpZGRlbiA9IGZhbHNlIDogbWVudS5oaWRkZW4gPSB0cnVlXG59XG5cbmxldCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVudUl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1iYXJfX21lbnUtaWNvbicpLmNsaWNrKCk7XG4gICAgfSlcbn1cbiJdfQ==
