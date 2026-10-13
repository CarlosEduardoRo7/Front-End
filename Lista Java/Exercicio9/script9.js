function calcularSalario() {
      // Obtém os valores digitados
      var nome = document.getElementById("nome").value.trim();
      var horas = document.getElementById("horas").value.trim();
      var valorHora = document.getElementById("valorHora").value.trim();

      // Verifica se todos os campos foram preenchidos
      if (nome === "" || horas === "" || valorHora === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      // Converte os valores para número
      horas = parseFloat(horas);
      valorHora = parseFloat(valorHora);

      // Valida se os números são válidos e positivos
      if (isNaN(horas) || isNaN(valorHora) || horas <= 0 || valorHora <= 0) {
        alert("Digite valores válidos e positivos para as horas e o valor da hora.");
        return false;
      }

      // Calcula o salário bruto
      var salarioBruto = horas * valorHora;

      // Exibe o resultado formatado
      document.getElementById("resultado").innerHTML =
        "Funcionário: <strong>" + nome + "</strong><br>" +
        "Horas trabalhadas: <strong>" + horas + "</strong><br>" +
        "Valor da hora: <strong>R$ " + valorHora.toFixed(2) + "</strong><br>" +
        "Salário bruto: <strong>R$ " + salarioBruto.toFixed(2) + "</strong>";

      return false; // Impede o envio do formulário
    }