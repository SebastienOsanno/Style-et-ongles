
/** Premier Event listenner **/

// Je sélectionne mon icone qui va faire bouger mon image
/*const icone = document.querySelector(".icone_next");

// Je sélectionne mes images pour les faire se déplacer.
const image = document.querySelector(".carousel1");


icone.addEventListener('click', () => {
    image.style.transform = `translateX(-100%)`;
})*/

const carousel = document.querySelector('.carousel1');
const prevBtn = document.querySelector('.icone_last');
const nextBtn = document.querySelector('.icone_next');
const articles = carousel.querySelectorAll('article');

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + articles.length) % articles.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % articles.length;
  updateCarousel();
});