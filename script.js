//1
const btn1 = document.getElementById("btn1");
const titulo = document.getElementById("titulo");

btn1.addEventListener("click", () => {
    titulo.textContent = "JavaScript é Incrível!";
});
//2================
const btn2 = document.getElementById("btn2");
const inputTexto = document.getElementById("inputTexto");
const mensagem = document.getElementById("mensagem");

btn2.addEventListener("click", () => {
    const nome = inputTexto.value;
    mensagem.textContent = "Olá, " + nome + "!"
});
//3================
const caixa = document.getElementById("caixa");
 caixa.addEventListener ("mouseover", () => {
  caixa.style.backgroundColor = "red"
});
 caixa.addEventListener ("mouseout", () => {
  caixa.style.backgroundColor = "blue"
});
//4================
const btn3 = document.getElementById("btn3");
const lista = document.getElementById("lista");
btn3.addEventListener("click", () => {
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo Item";
    lista.appendChild(novoItem);
});
//5================
const btn4 = document.getElementById("btn4");
const caixaa = document.getElementById("caixa");

btn4.addEventListener("click", () => {
    if (caixa.style.display === "none") {
        caixa.style.display = "block";
    } else {
        caixa.style.display = "none";
    }
});