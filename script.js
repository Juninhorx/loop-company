let slideIndex = 0;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

const imagemWidth = document.querySelector('.slide').clientWidth
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * imagemWidth}px)`;
    });
}

showSlide(slideIndex);