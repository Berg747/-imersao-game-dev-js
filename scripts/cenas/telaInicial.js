class TelaInicial {
  constructor() {
    
  }
  
  desenha() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  // "Métodos privados"
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras da', width/2, 2*height/8);
    textSize(80);
    text('Hipsta', width/2, 2*height/8 + 50);
  }
  
  _botao() {
    botaoGerenciador.y = 5*height/7;
    botaoGerenciador.desenha();
  }
}
