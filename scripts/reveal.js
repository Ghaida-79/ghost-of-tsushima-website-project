const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach((element, index) => {
    if (element.getBoundingClientRect().top < window.innerHeight - 80) {
      element.style.transitionDelay = `${index * 0.01}s`;
      element.classList.add('show');
    }
  });
});

window.addEventListener('load', () => {
  document.querySelector('.hero-title-reveal')?.classList.add('show');
});