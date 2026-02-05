function calculadora() {
  function poderoso() {
    const text = document.getElementById("tangerina").value;
    
    let total = 0;

    if (text.includes("+")) {
      const partes = text.split("+");
      total = Number(partes[0]) + Number(partes[1]);
    }

    if (text.includes("-")) {
      const partes = text.split("-");
      total = Number(partes[0]) - Number(partes[1]);
    }

    if (text.includes("*")) {
      const partes = text.split("*");
      total = Number(partes[0]) * Number(partes[1]);
    }

    if (text.includes("/")) {
      const partes = text.split("/");
      total = Number(partes[0]) / Number(partes[1]);
    }
    alert(total);
    console.log(total);
  }
  return (
    <div>
      <input id="tangerina" placeholder="PORA" />
      <button onClick={poderoso}>contar</button>
    </div>
  )
}

export default calculadora
