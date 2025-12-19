const images = document.querySelectorAll('.shot');
const box = document.querySelector('.box');
const boxImage = document.querySelector('.box-image');

const nextButton = document.querySelector('.next-button');
const prevousButton = document.querySelector('.prevous-button');
const closeButton = document.querySelector('.close-button');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    boxImage.src = img.src;
    box.style.display = 'flex';
  });
});

nextButton.onclick = () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex =0;
  }

  boxImage.src = images[currentIndex].src;
};