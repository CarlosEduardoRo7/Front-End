function ex14() {
    let pos = 0, neg = 0, zero = 0;
    while (true) {
      let valor = Number(prompt("Digite um número (999 para parar):"));
      if (valor === 999 || isNaN(valor)) break;
      if (valor > 0) pos++;
      else if (valor < 0) neg++;
      else zero++;
    }
    document.getElementById("res14").innerText =
      `Positivos: ${pos}, Negativos: ${neg}, Zeros: ${zero}`;
  }
  