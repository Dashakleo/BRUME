
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
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio3.jpg)'
}, {
    type: 'Дизайн интерьера',
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio4.jpg)'
},{
    type: 'Отделочная работа',
    title: 'Дизайн интерьера гостинной',
    img: 'url(./assets/img/portfolio2.jpg)'
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
        type: 'carousel',
        perView: count,
        startAt: 0,
        gap: 0
    });
    glide.mount();

    document.querySelector('.portfolio-slider').onmouseover = document.querySelector('.portfolio-slider').onmouseout = handler;
    function handler(event) {
        let otherSlides = document.querySelectorAll('.glide__slide.portfolio-slider__item');
        otherSlides = Array.prototype.slice.call(otherSlides);
        let children = event.target.children;
        children = Array.prototype.slice.call(children);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IHNsaWRlc1BvcnRmb2xpbyA9IFt7XG4gICAgdHlwZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMS5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQntGC0LTQtdC70L7Rh9C90LDRjyDRgNCw0LHQvtGC0LAnLFxuICAgIHRpdGxlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgIGltZzogJ3VybCguL2Fzc2V0cy9pbWcvcG9ydGZvbGlvMi5qcGcpJ1xufSwge1xuICAgIHR5cGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzMuanBnKSdcbn0sIHtcbiAgICB0eXBlOiAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcsXG4gICAgdGl0bGU6ICfQlNC40LfQsNC50L0g0LjQvdGC0LXRgNGM0LXRgNCwINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgaW1nOiAndXJsKC4vYXNzZXRzL2ltZy9wb3J0Zm9saW80LmpwZyknXG59LHtcbiAgICB0eXBlOiAn0J7RgtC00LXQu9C+0YfQvdCw0Y8g0YDQsNCx0L7RgtCwJyxcbiAgICB0aXRsZTogJ9CU0LjQt9Cw0LnQvSDQuNC90YLQtdGA0YzQtdGA0LAg0LPQvtGB0YLQuNC90L3QvtC5JyxcbiAgICBpbWc6ICd1cmwoLi9hc3NldHMvaW1nL3BvcnRmb2xpbzIuanBnKSdcbn1dO1xuXG5sZXQgc2xpZGVzUG9ydGZvbCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNsaWRlc1BvcnRmb2xpbyk7XG5cbmNvbnN0IHNsaWRlc0RPTSA9IChzbGlkZSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHNsaWRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzbGlkZVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZCgnZ2xpZGVfX3NsaWRlJyk7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XG4gICAgc2xpZGVFbC5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7c2xpZGUuaW1nfSBuby1yZXBlYXQgY2VudGVyIGxlZnQvY292ZXJgO1xuXG4gICAgc2xpZGVUaXRsZS5pbm5lckhUTUwgPSBzbGlkZS50aXRsZTtcbiAgICBzbGlkZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3RpdGxlJyk7XG4gICAgc2xpZGVFbC5hcHBlbmRDaGlsZChzbGlkZVRpdGxlKTtcblxuXG4gICAgc2xpZGVUeXBlLmlubmVySFRNTCA9IHNsaWRlLnR5cGU7XG4gICAgc2xpZGVUeXBlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXJfX3R5cGUnKTtcbiAgICBzbGlkZUVsLmFwcGVuZENoaWxkKHNsaWRlVHlwZSk7XG4gICAgcmV0dXJuIHNsaWRlRWw7XG59O1xuXG5jb25zdCBzbGlkZXNSZW5kZXIgPSBhc3luYyAoc2xpZGVzUG9ydGZvbGlvLCBjb3VudCA9IDQpID0+IHtcbiAgICBjb25zdCBzbGlkZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbGlkZV9fdHJhY2snKTtcbiAgICBzbGlkZXNFbC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBzbGlkZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNsaWRlTGlzdC5jbGFzc0xpc3QuYWRkKCdnbGlkZV9fc2xpZGVzJyk7XG4gICAgc2xpZGVMaXN0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1zbGlkZXInKTtcblxuICAgIGxldCBzbGlkZXNQb3J0Zm9sID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2xpZGVzUG9ydGZvbGlvKTtcbiAgICBhd2FpdCBzbGlkZXNQb3J0Zm9sLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlRWwgPSBzbGlkZXNET00oc2xpZGUpO1xuICAgICAgICBzbGlkZUxpc3QuYXBwZW5kQ2hpbGQoc2xpZGVFbCk7XG4gICAgfSk7XG4gICAgc2xpZGVzRWwuYXBwZW5kQ2hpbGQoc2xpZGVMaXN0KTtcblxuICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmdsaWRlJywge1xuICAgICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuICAgICAgICBwZXJWaWV3OiBjb3VudCxcbiAgICAgICAgc3RhcnRBdDogMCxcbiAgICAgICAgZ2FwOiAwXG4gICAgfSk7XG4gICAgZ2xpZGUubW91bnQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tc2xpZGVyJykub25tb3VzZW92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpLm9ubW91c2VvdXQgPSBoYW5kbGVyO1xuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IG90aGVyU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdsaWRlX19zbGlkZS5wb3J0Zm9saW8tc2xpZGVyX19pdGVtJyk7XG4gICAgICAgIG90aGVyU2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob3RoZXJTbGlkZXMpO1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBldmVudC50YXJnZXQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdmVyJykge1xuICAgICAgICAgICAgLy8gb3RoZXJTbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzbGlkZSlcbiAgICAgICAgICAgIC8vICAgICBzbGlkZS5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdXQnKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn07XG5zbGlkZXNSZW5kZXIoc2xpZGVzUG9ydGZvbGlvKTtcblxuXG4vL9Ch0L7RgNGC0LjRgNC+0LLQutCwXG4gY29uc3QgcG9ydGZvbGlvQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0FsbCcpO1xuIGNvbnN0IHBvcnRmb2xpb0ludGVyaW9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ludGVyaW9yJyk7XG4gY29uc3QgcG9ydGZvbGlvRmluaXNoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcnRmb2xpb0ZpbmlzaGluZycpO1xucG9ydGZvbGlvQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUmVuZGVyKHNsaWRlc1BvcnRmb2wpO1xufSk7XG5cbiBwb3J0Zm9saW9JbnRlcmlvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgbGV0IHNvcnRlZFNsaWRlcyA9IFtdO1xuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpby10YWJzX19saW5rX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmUnKTtcbiAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgIHNsaWRlc1BvcnRmb2wuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgIGlmIChzbGlkZS50eXBlID09PSAn0JTQuNC30LDQudC9INC40L3RgtC10YDRjNC10YDQsCcpIHtcbiAgICAgICAgICAgICBzb3J0ZWRTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICAgICAgICAgY291bnQgKz0xO1xuICAgICAgICAgfVxuICAgICB9KTtcbiAgICAgaWYgKGNvdW50ID4gNCkgY291bnQgPSA0O1xuICAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLGNvdW50KTtcbiB9KTtcblxucG9ydGZvbGlvRmluaXNoaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgc29ydGVkU2xpZGVzID0gW107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3J0Zm9saW8tdGFic19fbGlua19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXRhYnNfX2xpbmtfYWN0aXZlJyk7XG4gICAgc2xpZGVzUG9ydGZvbC5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gJ9Ce0YLQtNC10LvQvtGH0L3QsNGPINGA0LDQsdC+0YLQsCcpIHtcbiAgICAgICAgICAgIHNvcnRlZFNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgICAgIGNvdW50ICs9MTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb3VudCA+IDQpIGNvdW50ID0gNDtcbiAgICBzbGlkZXNSZW5kZXIoc29ydGVkU2xpZGVzLGNvdW50KTtcbn0pOyJdfQ==
