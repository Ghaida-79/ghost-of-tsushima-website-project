const wallpapers = [{
  preview: 'wallpapers/previews/wallpaper1.jpg',
  full: 'wallpapers/full/wallpaper1.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper2.jpg',
  full: 'wallpapers/full/wallpaper2.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper3.jpg',
  full: 'wallpapers/full/wallpaper3.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper4.jpg',
  full: 'wallpapers/full/wallpaper4.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper5.jpg',
  full: 'wallpapers/full/wallpaper5.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper6.jpg',
  full: 'wallpapers/full/wallpaper6.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper7.jpg',
  full: 'wallpapers/full/wallpaper7.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper8.jpg',
  full: 'wallpapers/full/wallpaper8.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper9.jpg',
  full: 'wallpapers/full/wallpaper9.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper10.jpg',
  full: 'wallpapers/full/wallpaper10.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper11.jpg',
  full: 'wallpapers/full/wallpaper11.jpg'
}, {
  preview: 'wallpapers/previews/wallpaper12.jpg',
  full: 'wallpapers/full/wallpaper12.jpg'
}
];

let wallpapersHTML = '';

wallpapers.forEach((wallpaper, index) => {
  wallpapersHTML += `
  <div class="">
    <img 
      src="${wallpaper.preview}"
      data-full="${wallpaper.full}"
      class="shot"
      loading="lazy"
      alt="Wallpaper ${index + 1}"
    >
  </div>
    
  `;
});

document.querySelector('.js-wallpapers-grid').innerHTML = wallpapersHTML;