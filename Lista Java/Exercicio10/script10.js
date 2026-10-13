// UMA Funções para cada operação matemática

function adicao(a, b) {
    return a + b;
  }

  function subtracao(a, b) {
    return a - b;
  }

  function multiplicacao(a, b) {
    return a * b;
  }

  function divisao(a, b) {
    if (b === 0) {
      alert("Erro: divisão por zero não é permitida!");
      return null;
    }
    return a / b;
  }

  // Função principal para processar o cálculo
  function calcular() {
    // Pega os valores digitados
    var valor1 = document.getElementById("valor1").value.trim();
    var valor2 = document.getElementById("valor2").value.trim();
    var operacao = document.getElementById("operacao").value;

    // Verifica se os campos foram preenchidos
    if (valor1 === "" || valor2 === "") {
      alert("Por favor, preencha ambos os valores.");
      return false;
    }

    // Converte para número
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);

    // Valida os números
    if (isNaN(valor1) || isNaN(valor2)) {
      alert("Digite apenas valores numéricos.");
      return false;
    }

    var resultado;

    // Escolhe a operação com base na seleção
    switch (operacao) {
      case "adicao":
        resultado = adicao(valor1, valor2);
        break;
      case "subtracao":
        resultado = subtracao(valor1, valor2);
        break;
      case "multiplicacao":
        resultado = multiplicacao(valor1, valor2);
        break;
      case "divisao":
        resultado = divisao(valor1, valor2);
        break;
      default:
        alert("Operação inválida.");
        return false;
    }

    // Exibe o resultado
    if (resultado !== null) {
      document.getElementById("resultado").innerHTML =
        "Operação selecionada: <strong>" + operacao + "</strong><br>" +
        "Resultado: <strong>" + resultado.toFixed(2) + "</strong>";
    }

    return false; // Impede o envio do formulário
  }