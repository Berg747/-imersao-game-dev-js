function setup() {
  frameRate(40);
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
  
  cenas = {
    jogo,
    telaInicial
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

// Para navegador
function keyPressed() {
  jogo.controleTeclado(key);
}

// Para Celular
function mousePressed() {
  jogo.controleTeclado('ArrowUp');
}

function draw() {
  cenas[cenaAtual].desenha();
}
