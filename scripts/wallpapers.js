const wallpapers = [
  'wallpapers/wallpaper1.jpg',
  'wallpapers/wallpaper2.jpg',
  'wallpapers/wallpaper3.jpg',
  'wallpapers/wallpaper4.jpg',
  'wallpapers/wallpaper5.jpg',
  'wallpapers/wallpaper6.jpg',
  'wallpapers/wallpaper7.jpg',
  'wallpapers/wallpaper8.jpg'
];

let wallpapersHTML = '';

wallpapers.forEach((wallpaper, index) => {
  wallpapersHTML += `
    <img 
      src="${wallpaper}"
      class="shot"
      loading="lazy"
      alt="Wallpaper ${index + 1}">
  `;
});

document.querySelector('.js-wallpapers-grid').innerHTML = wallpapersHTML;