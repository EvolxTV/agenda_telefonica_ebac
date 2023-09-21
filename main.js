const form = document.getElementById("form-contato");
let linhas = "";
let contactName = [];
let contactTel = [];

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  addLine();
  atualizarTabela();
});
function addLine() {
  const nomeContato = document.getElementById("nome-contato");
  const telContato = document.getElementById("tel-contato");
  const emailContato = document.getElementById("email-contato");

  if (contactName.includes(nomeContato.value)) {
    alert(`Nome do contato: ${nomeContato.value} já existe`);
  } else if (contactTel.includes(telContato.value)) {
    alert(`Nome do contato: ${telContato.value} já existe`);
  } else {
    let linha = "<tr>";
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telContato.value}</td>`;
    linha += `<td>${emailContato.value}</td>`;
    // linha +=
    //   "<td><button class='apagar' onclick='removerElemento(event.target)'>APAGAR</td>";
    linha += `</tr>`;
    contactName.push(nomeContato.value);
    contactTel.push(telContato.value);
    linhas += linha;
  }

  console.log(linhas.length);
}
function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

// Funcão de apagar elemento (Não funciona pois requer uma contagem de ID especifico para cada TR criada, conhecimento ainda não adquirido)
// function removerElemento(ev) {
//   ev.closest("tr").remove();
// }
