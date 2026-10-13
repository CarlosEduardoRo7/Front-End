function calcularCompra() {
      // Pega os valores digitados
      var nome = document.getElementById("nome").value.trim();
      var produto = document.getElementById("produto").value.trim();
      var quantidade = document.getElementById("quantidade").value.trim();
      var preco = document.getElementById("preco").value.trim();

      // Valida campos obrigatórios
      if (nome === "" || produto === "" || quantidade === "" || preco === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      // Converte para número
      quantidade = parseInt(quantidade);
      preco = parseFloat(preco);

      // Valida se são números válidos
      if (isNaN(quantidade) || isNaN(preco) || quantidade <= 0 || preco <= 0) {
        alert("Digite valores válidos para quantidade e preço.");
        return false;
      }

      // Calcula o valor total
      var total = quantidade * preco;

      // Mostra o resultado
      document.getElementById("resultado").innerHTML =
        "Cliente: <strong>" + nome + "</strong><br>" +
        "Produto: <strong>" + produto + "</strong><br>" +
        "Quantidade: <strong>" + quantidade + "</strong><br>" +
        "Preço unitário: <strong>R$ " + preco.toFixed(2) + "</strong><br>" +
        "<hr>" +
        "Valor total da compra: <strong>R$ " + total.toFixed(2) + "</strong>";

      return false; // Impede o envio do formulário
    }
