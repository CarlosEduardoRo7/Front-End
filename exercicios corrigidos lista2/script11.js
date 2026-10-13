 function calcularDesconto() {
      const valor = Number(document.getElementById("valorCompra").value);
      let descontoPercentual = 0;

      if (valor <= 100) {
        descontoPercentual = 5;
      } else if (valor <= 500) {
        descontoPercentual = 10;
      } else {
        descontoPercentual = 15;
      }

      const desconto = valor * (descontoPercentual / 100);
      const valorFinal = valor - desconto;

      document.getElementById("resultado1").innerHTML = `
        Valor original: R$${valor.toFixed(2)}<br>
        Desconto aplicado: ${descontoPercentual}% (R$${desconto.toFixed(2)})<br>
        <strong>Valor final a pagar: R$${valorFinal.toFixed(2)}</strong>`;
    }