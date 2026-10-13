function calcularMediaPonderada() {
      const n1 = Number(document.getElementById("n1").value);
      const n2 = Number(document.getElementById("n2").value);
      const n3 = Number(document.getElementById("n3").value);
      const p1 = Number(document.getElementById("p1").value);
      const p2 = Number(document.getElementById("p2").value);
      const p3 = Number(document.getElementById("p3").value);

      const media = ((n1*p1) + (n2*p2) + (n3*p3)) / (p1 + p2 + p3);

      document.getElementById("resultado1").innerHTML =
        `Média ponderada: ${media.toFixed(2)}`;
    }