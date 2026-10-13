    function verificarParImpar() {
      const num = Number(document.getElementById("numero").value);
      const resultado = (num % 2 === 0) ? "PAR" : "ÍMPAR";
      document.getElementById("resultado1").innerText = `O número ${num} é ${resultado}.`;
    }
