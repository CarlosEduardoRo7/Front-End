function validarFormulario() {
    // Pega os valores digitados
    var nome = document.getElementById("nome").value.trim();
    var fone = document.getElementById("fone").value.trim();
  
    // Expressão regular simples para telefone (ex: (11) 91234-5678)
    var regexFone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  
    // Valida o nome
    if (nome === "") {
      alert("Por favor, preencha o nome.");
      document.getElementById("nome").focus();
      return false; // Impede o envio do formulário
    }
  
    // Valida o telefone
    if (!regexFone.test(fone)) {
      alert("Por favor, digite um telefone válido (ex: (11) 91234-5678).");
      document.getElementById("fone").focus();
      return false;
    }
  
    // Se passou por todas as validações
    alert("Formulário enviado com sucesso!");
    return true;
  }
  