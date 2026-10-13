function ex10() {
    let soma = 0, cont = 0;
    while (true) {
      let valor = Number(prompt("Digite um número (0 para sair):"));
      if (valor === 0 || isNaN(valor)) break;
      soma += valor;
      cont++;
    }
    const media = cont > 0 ? soma / cont : 0;
    document.getElementById("res10").innerText =
      cont > 0 ? `Média = ${media.toFixed(2)}` : "Nenhum valor digitado.";
  }
  