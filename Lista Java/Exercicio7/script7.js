function calcularIMC() {
      // Pega os valores digitados
      var nome = document.getElementById("nome").value.trim();
      var idade = document.getElementById("idade").value.trim();
      var peso = document.getElementById("peso").value.trim();
      var altura = document.getElementById("altura").value.trim();

      // Verifica se todos os campos foram preenchidos
      if (nome === "" || idade === "" || peso === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      // Converte valores para números
      idade = parseInt(idade);
      peso = parseFloat(peso);
      altura = parseFloat(altura);

      // Valida os valores
      if (isNaN(idade) || isNaN(peso) || isNaN(altura) || idade <= 0 || peso <= 0 || altura <= 0) {
        alert("Digite valores válidos para idade, peso e altura.");
        return false;
      }

      // Calcula o IMC
      var imc = peso / (altura * altura);

      // Exibe o resultado
      document.getElementById("resultado").innerHTML =
        "Nome: <strong>" + nome + "</strong><br>" +
        "Idade: <strong>" + idade + " anos</strong><br>" +
        "IMC calculado: <strong>" + imc.toFixed(2) + "</strong>";

      return false; // Impede o envio do formulário
    }