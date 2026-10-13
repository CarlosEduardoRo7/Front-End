function calcularJuros() {
      const C = Number(document.getElementById("capital").value);
      const i = Number(document.getElementById("taxa").value) / 100;
      const t = Number(document.getElementById("tempo").value);
      const M = C * (1 + (i * t));

      document.getElementById("resultado1").innerHTML =
        `Montante final: R$${M.toFixed(2)}`;
    }