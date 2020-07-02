class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = inicial;
    this.largura = 50;
    this.altura = 50;
  }
  
  desenha() {
    const margem = 20;
    
    for(let i = 0; i < this.vidas; i++) {
      image(imagemVida, (i+1)*margem + i*this.largura,
            margem, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas < this.total) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
    
    if(this.vidas <= 0) {
      jogo.fimDeJogo();
    }
  }
}
