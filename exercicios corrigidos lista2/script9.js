function calcularCombustivel() {
      const distancia = Number(document.getElementById("distancia").value);
      const consumo = Number(document.getElementById("consumo").value);

      if (distancia <= 0 || consumo <= 0) {
        document.getElementById("resultado9").innerText = "Por favor, insira valores válidos.";
        return;
      }

      const litrosGastos = distancia / consumo;

      document.getElementById("resultado1").innerHTML =
        `Foram gastos aproximadamente <strong>${litrosGastos.toFixed(2)} litros</strong> de combustível.`;
    }