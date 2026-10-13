function ex8() {
    const base = Number(document.getElementById("base").value);
    const exp = Number(document.getElementById("exp").value);
    if ([base, exp].some(isNaN)) {
      alert("Digite base e expoente!");
      return false;
    }
    let resultado = 1;
    for (let i = 1; i <= exp; i++) resultado *= base;
    document.getElementById("res8").innerText = `${base} ^ ${exp} = ${resultado}`;
    return false;
  }