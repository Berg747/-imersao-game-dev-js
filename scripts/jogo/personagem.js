class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura,
    larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura,
      larguraSprite, alturaSprite)

    this.gravidade = 5;
    this.velocidadeDoPulo = 0;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.checaColisaoFlag = true;
  }

  pula() {
    this.velocidadeDoPulo = -50;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  checaColisao(inimigo) {
    if (this.checaColisaoFlag == true) {
      if(this.estaColidindo(inimigo)) {
        this.checaColisaoFlag = false;
        return true;
      }
    }
    else {
      if(this.estaColidindo(inimigo)) {
        return false;
      }
      else {
        this.checaColisaoFlag = true;
        return false;
      }
    }
  }

  estaColidindo(inimigo) {
    //Debug de dimensões dos Sprites
    //noFill();
    //rect(this.x, this.y, this.largura, this.altura);
    //rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);

    const precisao = .7;
    const colisao = collideRectRect(
      this.x, this.y, this.largura * precisao, this.altura * precisao,
      inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    return colisao;
  }
}