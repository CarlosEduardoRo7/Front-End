function converterMoeda() {
      const valorDolar = Number(document.getElementById("dolar").value);
      const cotacao = Number(document.getElementById("cotacao").value);
      const valorReal = valorDolar * cotacao;
      document.getElementById("resultado1").innerText =
        `US$${valorDolar.toFixed(2)} equivalem a R$${valorReal.toFixed(2)}.`;
    }