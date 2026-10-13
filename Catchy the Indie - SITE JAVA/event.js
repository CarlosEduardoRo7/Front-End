const banner = document.querySelector('.banner') 

const imagens = [
  "banner.jpg",
  "promocao1.jpg",
  "promocao2.jpg",
  "promocao3.jpg"
];

let i = 0;

function trocarImagem() {
  i = (i + 1) % imagens.length;
  document.getElementById("banner").src = imagens[i];
}

setInterval(trocarImagem, 3000);