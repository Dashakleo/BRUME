// new Glide('.glide').mount()
// new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3
// }


console.log('Hello');
document.querySelector('.portfolio-slider').onmouseover = document.querySelector('.portfolio-slider').onmouseout = handler;

function handler(event) {
    if (event.type == 'mouseover') {
        event.target.children[0].hidden = true;
        event.target.children[1].hidden = true;
    }
    if (event.type == 'mouseout') {
        event.target.children[0].hidden = false;
        event.target.children[1].hidden = false;
    }
}