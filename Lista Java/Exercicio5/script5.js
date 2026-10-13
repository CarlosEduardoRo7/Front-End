function calcularAumento() {
      // Obtém os valores digitados
      var nome = document.getElementById("nome").value.trim();
      var cargo = document.getElementById("cargo").value.trim();
      var salario = document.getElementById("salario").value.trim();

      // Valida se os campos estão preenchidos
      if (nome === "" || cargo === "" || salario === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      // Converte salário para número
      salario = parseFloat(salario);

      // Valida se o valor do salário é numérico e positivo
      if (isNaN(salario) || salario <= 0) {
        alert("Digite um valor válido para o salário.");
        return false;
      }

      // Calcula o novo salário com aumento de 5%
      var novoSalario = salario * 1.05;

      // Exibe o resultado
      document.getElementById("resultado").innerHTML =
        "Funcionário: <strong>" + nome + "</strong><br>" +
        "Cargo: <strong>" + cargo + "</strong><br>" +
        "Salário atual: <strong>R$ " + salario.toFixed(2) + "</strong><br>" +
        "Novo salário (com 5% de aumento): <strong>R$ " + novoSalario.toFixed(2) + "</strong>";

      return false; // Impede o envio do formulário
    }