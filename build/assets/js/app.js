let glide = new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    focusAt: 1,
    startAt: 1,
    gap: 0
});
glide.mount();


console.log('Hello');
document.querySelector('.portfolio-slider').onmouseover = document.querySelector('.portfolio-slider').onmouseout = handler;

function handler(event) {
    let children = event.target.children;
    let otherSlides = document.querySelectorAll('.glide__slide.portfolio-slider__item');
    children = Array.prototype.slice.call(children);
    otherSlides = Array.prototype.slice.call(otherSlides);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGdsaWRlID0gbmV3IEdsaWRlKCcuZ2xpZGUnLCB7XG4gICAgdHlwZTogJ2Nhcm91c2VsJyxcbiAgICBwZXJWaWV3OiA0LFxuICAgIGZvY3VzQXQ6IDEsXG4gICAgc3RhcnRBdDogMSxcbiAgICBnYXA6IDBcbn0pO1xuZ2xpZGUubW91bnQoKTtcblxuXG5jb25zb2xlLmxvZygnSGVsbG8nKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tc2xpZGVyJykub25tb3VzZW92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXNsaWRlcicpLm9ubW91c2VvdXQgPSBoYW5kbGVyO1xuXG5mdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgbGV0IGNoaWxkcmVuID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuO1xuICAgIGxldCBvdGhlclNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nbGlkZV9fc2xpZGUucG9ydGZvbGlvLXNsaWRlcl9faXRlbScpO1xuICAgIGNoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2hpbGRyZW4pO1xuICAgIG90aGVyU2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob3RoZXJTbGlkZXMpO1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW92ZXInKSB7XG4gICAgICAgIC8vIG90aGVyU2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzbGlkZSlcbiAgICAgICAgLy8gICAgIHNsaWRlLnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW91dCcpIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=
