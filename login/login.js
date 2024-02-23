var formEntrar = document.querySelector('#entrar')
var formInscrever = document.querySelector('#inscrever')
var btnCor = document.querySelector('.btnCor')

document.querySelector('#btnEntrar')
  .addEventListener('click', () => {
    formEntrar.style.left = "25px"
    formInscrever.style.left = "450px"
    btnCor.style.left = "0px"
})

document.querySelector('#btnInscrever')
  .addEventListener('click', () => {
    formEntrar.style.left = "-450px"
    formInscrever.style.left = "25px"
    btnCor.style.left = "110px"
})

document.getElementById('#esqueci-senha').addEventListener('click', function (event) {
    event.preventDefault();
});