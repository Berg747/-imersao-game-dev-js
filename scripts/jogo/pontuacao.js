class Pontuacao {
  constructor() {
    this.pontos = 0;
    this.pontosVida = 0;
  }
  
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(30);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
    this.pontosVida = this.pontosVida + 0.2;
    
    if(this.pontosVida >= 100) {
      this.pontosVida = 0;
      vida.ganhaVida();
    }
  }
}
