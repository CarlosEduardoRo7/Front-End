function calcularMedia() {
    // Obtém os valores digitados
    var nome = document.getElementById("nome").value.trim();
    var nota1 = document.getElementById("nota1").value.trim();
    var nota2 = document.getElementById("nota2").value.trim();
    var nota3 = document.getElementById("nota3").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || nota1 === "" || nota2 === "" || nota3 === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    // Converte as notas para número
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    // Verifica se são números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      alert("Digite apenas valores numéricos para as notas.");
      return false;
    }

    // Calcula a média
    var media = (nota1 + nota2 + nota3) / 3;

    // Exibe o resultado
    document.getElementById("resultado").innerHTML =
      "Aluno: <strong>" + nome + "</strong><br>" +
      "Média: <strong>" + media.toFixed(2) + "</strong>";

    return false; // Impede o envio do formulário
  }