function verificarMaioridade() {
      const idade = Number(document.getElementById("idade").value);
      const mensagem = idade >= 18 ? "Maior de idade ✅" : "Menor de idade ❌";
      document.getElementById("resultado1").innerText = mensagem;
    }