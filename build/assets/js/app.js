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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV3IEdsaWRlKCcuZ2xpZGUnKS5tb3VudCgpXG4vLyBuZXcgR2xpZGUoJy5nbGlkZScsIHtcbi8vICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuLy8gICAgIHN0YXJ0QXQ6IDAsXG4vLyAgICAgcGVyVmlldzogM1xuLy8gfVxuXG5cbmNvbnNvbGUubG9nKCdIZWxsbycpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1zbGlkZXInKS5vbm1vdXNlb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tc2xpZGVyJykub25tb3VzZW91dCA9IGhhbmRsZXI7XG5cbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2VvdmVyJykge1xuICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMF0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzFdLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNoaWxkcmVuWzBdLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC50YXJnZXQuY2hpbGRyZW5bMV0uaGlkZGVuID0gZmFsc2U7XG4gICAgfVxufSJdfQ==
