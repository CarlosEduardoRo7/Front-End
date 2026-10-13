function ex19() {
    let totalGeral = 0;
    while (true) {
      const nome = prompt("Nome do produto (ou 'fim' para encerrar):");
      if (!nome || nome.toLowerCase() === "fim") break;
  
      const preco = Number(prompt(`Preço unitário de ${nome}:`));
      const qtde = Number(prompt(`Quantidade de ${nome}:`));
      if (isNaN(preco) || isNaN(qtde) || preco <= 0 || qtde <= 0) {
        alert("Dados inválidos! Produto ignorado.");
        continue;
      }
      const total = preco * qtde;
      totalGeral += total;
      alert(`${nome} → Total: R$ ${total.toFixed(2)}`);
    }
    document.getElementById("res19").innerText =
      `Valor total da compra: R$ ${totalGeral.toFixed(2)}`;
  }
  