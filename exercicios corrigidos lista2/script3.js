function calcularTempo() {
      const distancia = Number(document.getElementById("distancia").value);
      const velocidade = Number(document.getElementById("velocidade").value);
      const tempo = distancia / velocidade;
      document.getElementById("resultado1").innerText =
        `Tempo estimado de viagem: ${tempo.toFixed(2)} horas.`;
    }