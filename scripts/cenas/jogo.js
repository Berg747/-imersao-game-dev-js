class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup() {
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,
                   fita.configuracoes.vidaInicial);
    cenario = new Cenario(imagemCenario, 2);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, chaoY, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, chaoY, 52, 52, 104, 104, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, chaoY - 55, 200, 200, 400, 400, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    
    somDoJogo.loop();
  }
  
  controleTeclado(key) {
      if (key === 'ArrowUp' && statusGame == 1) {

      if (personagem.y == personagem.yInicial) {
        contPulos = 0;
      }

      // Limitação a pulo duplo
      if (contPulos < 2) {
        ++contPulos;
        somDoPulo.play();
        personagem.pula();
      }
    }
  }
  
  desenha() {
    cenario.exibe();
    cenario.move();
    
    vida.desenha();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if(inimigoVisivel) {
      this.indice++;
      inimigo.aparece();

      if(this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    // Checa colisão
    if(personagem.checaColisao(inimigo)) {
      vida.perdeVida();
    }
  }
  
  fimDeJogo() {
    somDoJogo.stop();
    statusGame = 0;
    image(imagemGameOver, width / 2 - 200, height / 2 - 50);
    noLoop();
  }
}
