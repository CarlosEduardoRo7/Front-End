function calcularPesoIdeal() {
      const altura = Number(document.getElementById("altura").value);
      const sexo = document.getElementById("sexo").value;
      let pesoIdeal = 0;

      if (sexo === "masculino") {
        pesoIdeal = 72.7 * altura - 58;
      } else {
        pesoIdeal = 62.1 * altura - 44.7;
      }

      document.getElementById("resultado1").innerHTML =
        `Peso ideal (${sexo}): ${pesoIdeal.toFixed(2)} kg`;
    }