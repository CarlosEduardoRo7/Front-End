function media() {
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const n3 = Number(document.getElementById("n3").value);
    if ([n1, n2, n3].some(isNaN)) {
      alert("Digite todas as notas!");
      return false;
    }
    const media = (n1 + n2 + n3) / 3;
    let situacao = "";
    if (media >= 7) situacao = "Aprovado";
    else if (media >= 5) situacao = "Recuperação";
    else situacao = "Reprovado";
    document.getElementById("res2").innerText = `Média: ${media.toFixed(2)} - ${situacao}`;
    return false;
  }