let slideIndex = 0;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 756}px)`;
    });
}

showSlide(slideIndex);





// const controls = document.querySelectorAll('.control')

// let currentItem  = 0;

// const itens = document.querySelectorAll('.item')
// const guias = document.querySelectorAll('.guia')
// const maxItens = itens.length

// controls.forEach(control => {
//     control.addEventListener('click', () => {
//         const isLeft = control.classList.contains('arrow-left')
//         if (isLeft){
//             currentItem -= 1
//         } else {
//             currentItem += 1
//         }

//         if (currentItem > maxItens - 1) {
//             currentItem = 0
//         } else if(currentItem < 0) {
//             currentItem = maxItens - 1
//         }

//         guias.forEach(guia => {
//             guia.classList.remove('current-guia')
//         })
//         itens.forEach(item => {
//             item.classList.remove('current-item')
//         })
//         itens[currentItem].scrollIntoView({
//             inline: "center",
//             behavior: "smooth"
//         })
//         console.log(`currentItem: ${currentItem}`)
//         itens[currentItem].classList.add('current-item')
//         guias[currentItem].classList.add('current-guia')
//     })
// })