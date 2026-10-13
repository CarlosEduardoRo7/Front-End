function calcularArea() {
      // Pega os valores digitados
      var base = document.getElementById("base").value.trim();
      var altura = document.getElementById("altura").value.trim();

      // Verifica se os campos foram preenchidos
      if (base === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      // Converte para número
      base = parseFloat(base);
      altura = parseFloat(altura);

      // Valida se são números válidos
      if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert("Digite valores numéricos válidos para base e altura.");
        return false;
      }

      // Calcula a área
      var area = (base * altura) / 2;

      // Exibe o resultado
      document.getElementById("resultado").innerHTML =
        "Base: <strong>" + base + "</strong><br>" +
        "Altura: <strong>" + altura + "</strong><br>" +
        "Área do triângulo: <strong>" + area.toFixed(2) + "</strong>";

      return false; // Impede o envio do formulário
    }