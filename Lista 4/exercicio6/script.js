const nome = document.getElementById("prod16").value.trim();
const preco = Number(document.getElementById("preco16").value);
const qtde = Number(document.getElementById("qtde16").value);

if (!nome || isNaN(preco) || isNaN(qtde) || preco <= 0 || qtde <= 0) {
  alert("Preencha todos os campos corretamente!");
  return false;
}

const total = preco * qtde;

document.getElementById("res16").innerText =
  `${qtde}x ${nome} → Total a pagar: R$ ${total.toFixed(2)}`;
return false;

