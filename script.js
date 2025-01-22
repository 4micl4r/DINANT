const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 2;
    slides.style.transform = `translateX(-${index * 100}%)`;
});

next.addEventListener('click', () => {
    index = (index < 2) ? index + 1 : 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
});

let startX = 0;
let endX = 0;

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        index = (index < 2) ? index + 1 : 0;
    } else if (startX < endX - 50) {
        index = (index > 0) ? index - 1 : 2;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
});
