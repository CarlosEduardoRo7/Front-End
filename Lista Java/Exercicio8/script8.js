function calcularParcelas() {
      // Obtém os valores digitados
      var nome = document.getElementById("nome").value.trim();
      var total = document.getElementById("total").value.trim();
      var parcelas = document.getElementById("parcelas").value.trim();

      // Verifica se os campos foram preenchidos
      if (nome === "" || total === "" || parcelas === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      // Converte os valores para número
      total = parseFloat(total);
      parcelas = parseInt(parcelas);

      // Valida se são números válidos
      if (isNaN(total) || isNaN(parcelas) || total <= 0 || parcelas <= 0) {
        alert("Digite valores válidos para total e número de parcelas.");
        return false;
      }

      // Calcula o valor de cada parcela
      var valorParcela = total / parcelas;

      // Exibe o resultado
      document.getElementById("resultado").innerHTML =
        "Cliente: <strong>" + nome + "</strong><br>" +
        "Total da compra: <strong>R$ " + total.toFixed(2) + "</strong><br>" +
        "Número de parcelas: <strong>" + parcelas + "</strong><br>" +
        "Valor de cada parcela: <strong>R$ " + valorParcela.toFixed(2) + "</strong>";

      return false; // Impede o envio do formulário
    }