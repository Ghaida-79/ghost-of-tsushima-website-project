const characters = [{
  image: 'characters/jin.png',
  name: 'Jin Sakai',
  description: "The last surviving samurai of Clan Sakai. As Tsushima falls to the Mongols, Jin adopts unconventional tactics and becomes known as the Ghost."
}, {
  image: 'characters/shimura.png',
  name: 'Lord Shimura',
  description: "Jin Sakai's uncle and the Jito of Tsushima. He embodies traditional samurai honor and struggles with Jin's transformation."
}, {
  image: 'characters/khan.png',
  name: 'Khotun Khan',
  description: "The ruthless Mongol general leading the invasion of Tsushima. Intelligent and manipulative, he seeks to break the samurai's code."
}, {
  image: 'characters/yuna.png',
  name: 'Yuna',
  description: "A skilled thief and survivor who helps Jin escape captivity. She encourages him to abandon tradition and do whatever it takes to save Tsushima."
}, {
  image: 'characters/ryuzo.png',
  name: 'Ryuzo',
  description: "Leader of the Straw Hat Ronin and Jin's former friend. Torn between survival and honor, his choices lead him down a tragic path."
}, {
  image: 'characters/masako.png',
  name: 'Lady Masako Adachi',
  description: "A fierce samurai widow driven by revenge. Her journey explores grief, loyalty, and the cost of endless hatred."
}, {
  image: 'characters/ishikawa.png',
  name: 'Sensei Ishikawa',
  description: "A legendary archer and former samurai mentor. He is strict, disciplined, and haunted by the mistakes of his past."
}, {
  image: 'characters/norio.png',
  name: 'Norio',
  description: "A warrior monk of Cedar Temple. He fights to protect the innocent while battling rage and despair within himself."
}, {
  image: 'characters/kenji.png',
  name: 'Kenji the Merchant',
  description: "A clever but unreliable sake trader who survives through lies and luck. Despite his cowardly nature, he occasionally helps Jin."
}, {
  image: 'characters/gyozen.png',
  name: 'Gyozen the Storyteller',
  description: "A mysterious monk who narrates legendary tales of Tsushima. He guides warriors through mythic stories and the Legends mode."
}, {
  image: 'characters/guardian.png',
  name: 'Samurai Guardian',
  description: "A devoted samurai tasked with protecting sacred lands and villages. He represents honor, duty, and the traditional code of the samurai."
}, {
  image: 'characters/guardian.png',
  name: 'Samurai Guardian',
  description: "A devoted samurai tasked with protecting sacred lands and villages. He represents honor, duty, and the traditional code of the samurai."
}, {
  image: 'characters/raider.png',
  name: 'Mongol Raider',
  description: "A brutal invader who terrorizes villages across Tsushima. Raiders represent the chaos and cruelty of the Mongol invasion."
}];

let charactersHTML = '';

characters.forEach((character) => {
  charactersHTML += `
    <div class="character-row">
      <img src="${character.image}" alt="${character.name}">
      <div class="info">
        <h2>${character.name}</h2>
        <p>${character.description}</p>
      </div>
    </div>
  `;
});

document.querySelector('.js-characters-list-view').innerHTML = charactersHTML;