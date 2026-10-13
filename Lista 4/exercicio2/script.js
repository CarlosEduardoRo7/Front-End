function ex5() {
    const ano = Number(document.getElementById("ano").value);
    if (isNaN(ano)) {
      alert("Digite um ano válido!");
      return false;
    }
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
    document.getElementById("res5").innerText = bissexto ? "Ano bissexto" : "Ano comum";
    return false;
  }