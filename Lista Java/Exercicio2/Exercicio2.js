function converterTemperatura() {
    // Pega o valor digitado no campo de entrada
    var celsius = document.getElementById("celsius").value.trim();

    // Verifica se o campo foi preenchido
    if (celsius === "" || isNaN(celsius)) {
      alert("Por favor, digite um valor numérico para a temperatura em Celsius.");
      document.getElementById("celsius").focus();
      return false;
    }

    // Converte para Fahrenheit usando a fórmula
    var fahrenheit = (9/5) * parseFloat(celsius) + 32;

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = 
      celsius + " °C equivalem a " + fahrenheit.toFixed(2) + " °F.";

    return false; // Impede o envio do formulário
  }
