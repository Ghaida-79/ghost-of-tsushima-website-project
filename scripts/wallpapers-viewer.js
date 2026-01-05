let images = document.querySelectorAll('.shot');
let box = document.querySelector('.box');
let boxImage = document.querySelector('.box-image');

let nextButton = document.querySelector('.next-button');
let previousButton = document.querySelector('.previous-button');
let closeButton = document.querySelector('.close-button');

let downloadButton = document.querySelector('.box-download');

let index = 0;

images.forEach((img, i) => {
  img.onclick = () => {
    index = i;
    boxImage.src = img.src;
    downloadButton.href = img.dataset.full;
    box.style.display = 'flex';
  };
});

nextButton.onclick = () => {
  index++;
  if (index == images.length) index = 0;

  boxImage.src = images[index].src;
  downloadButton.href = images[index].dataset.full;
};

previousButton.onclick = () => {
  index--;
  if (index < 0) index = images.length - 1;

  boxImage.src = images[index].src;
  downloadButton.href = images[index].dataset.full;
};

closeButton.onclick = () => {
  box.style.display = 'none';
}