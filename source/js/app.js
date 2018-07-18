
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