const characters = {
  jin: {
    name: "Jin Sakai",
    description: "From Tsushima Island",
    image: "../characters/jin1.png"
  },
  yuna: {
    name: "Yuna",
    description: "From Tsushima Island",
    image: "../characters/yuna1.png"
  }
};

const buttons = document.querySelectorAll('.characters-list button');
const details  = document.querySelector('.character-details');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.char;
    const data = characters[key];

    details.innerHTML = `
      <div class="image-box">
        <img src="${data.image}" alt="${data.name}">
      </div>
      
      <div class="text">
        <h2>${data.name}</h2>
        <p>${data.description}</p>
      </div>
      `;
  });
});