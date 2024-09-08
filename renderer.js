const { ipcRenderer } = require('electron');

document.getElementById('minimize-btn').addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
});

document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('close-window');
});

document.addEventListener('dragstart', event => {
    if (event.target.tagName === 'IMG') event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider__item');
    let currentSlide = 0;
    const slideCount = slides.length;

    function goToSlide(n) {
        slider.style.transform = `translateX(${-n * 100}%)`;
        currentSlide = n;
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slideCount);
    }

    setInterval(nextSlide, 5000);
});