 function calcularCirculo() {
      const r = Number(document.getElementById("raio").value);
      const area = Math.PI * Math.pow(r, 2);
      const diametro = 2 * r;
      document.getElementById("resultado1").innerHTML =
        `Área: ${area.toFixed(2)}<br>Diâmetro: ${diametro.toFixed(2)}`;
   }
