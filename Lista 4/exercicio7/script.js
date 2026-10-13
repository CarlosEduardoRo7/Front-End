function ex18() {
    const preco = Number(document.getElementById("preco18").value);
    const qtde = Number(document.getElementById("qtde18").value);
    if (isNaN(preco) || isNaN(qtde) || preco <= 0 || qtde <= 0) {
      alert("Digite valores válidos!");
      return false;
    }
    let desconto = 0;
    if (qtde >= 10) desconto = 0.2;
    else if (qtde >= 5) desconto = 0.1;
    else desconto = 0.05;
    const total = preco * qtde;
    const totalComDesc = total * (1 - desconto);
    document.getElementById("res18").innerText =
      `Total: R$ ${total.toFixed(2)} | Desconto: ${(desconto * 100)}% | Final: R$ ${totalComDesc.toFixed(2)}`;
    return false;
  }