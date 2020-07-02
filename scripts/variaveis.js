let fita;
let jogo;
let statusGame = 1;
let chaoY = 40;
let contPulos = 0;
let pontuacao;
let vida;
let imagemVida;
let botaoGerenciador;

let cenas;
let cenaAtual = 'telaInicial';
let telaInicial;
let imagemTelaInicial;
let fonteTelaInicial;
let cenario;
let imagemCenario;
let imagemGameOver;

let personagem;
let imagemPersonagem;
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
];

let inimigo;
let imagemInimigo;
const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];

let inimigoGrande;
let imagemInimigoGrande;
const matrizInimigoGrande = [
  [10, 55],
  [410, 55],
  [810, 55],
  [1210, 55],
  [1610, 55],
  [10, 455],
  [410, 455],
  [810, 455],
  [1210, 455],
  [1610, 455],
  [10, 855],
  [410, 855],
  [810, 855],
  [1210, 855],
  [1610, 855],
  [10, 1255],
  [410, 1255],
  [810, 1255],
  [1210, 1255],
  [1610, 1255],
  [10, 1655],
  [410, 1655],
  [810, 1655],
  [1210, 1655],
  [1610, 1655],
  [10, 2055],
  [410, 2055],
  [810, 2055],
];

let inimigoVoador;
let imagemInimigoVoador;
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const inimigos = [];

let somDoJogo;
let somDoPulo;
