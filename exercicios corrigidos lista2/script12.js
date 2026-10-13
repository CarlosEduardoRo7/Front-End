function converterTempo() {
      const minutos = Number(document.getElementById("minutos").value);
      if (minutos < 0) {
        document.getElementById("resultado12").innerText = "Digite um valor válido.";
        return;
      }
      const horas = Math.floor(minutos / 60);
      const restoMinutos = minutos % 60;

      document.getElementById("resultado1").innerHTML =
        `${minutos} minutos correspondem a <strong>${horas} hora(s) e ${restoMinutos} minuto(s)</strong>.`;
    }