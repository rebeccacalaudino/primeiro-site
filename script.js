const botão = document.getElementById("curtidas")
botão.addEventListener("click", aumentarCurtidas)

function aumentarCurtidas(){
    let curtida = document.querySelector("span")
    curtida.textContent++
}