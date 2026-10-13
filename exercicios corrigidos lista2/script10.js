function calcularSalario() {
      const salarioBase = Number(document.getElementById("salarioBase").value);
      const horasExtras = Number(document.getElementById("horasExtras").value);
      const valorHoraExtra = Number(document.getElementById("valorHoraExtra").value);

      if (salarioBase <= 0) {
        document.getElementById("resultado10").innerText = "Por favor, insira o salário base.";
        return;
      }

      const adicional = horasExtras * valorHoraExtra;
      const salarioTotal = salarioBase + adicional;

      document.getElementById("resultado1").innerHTML =
        `Salário base: R$${salarioBase.toFixed(2)}<br>` +
        `Horas extras: ${horasExtras} × R$${valorHoraExtra.toFixed(2)} = R$${adicional.toFixed(2)}<br>` +
        `<strong>Salário total: R$${salarioTotal.toFixed(2)}</strong>`;
    }