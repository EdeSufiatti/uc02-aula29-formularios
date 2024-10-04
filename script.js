const formulario = document.getElementById("form")

const btnCadastrar = document.getElementById("btnCadastrar")
const inputNome = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("password");

function cadastrar(event) {
  event.preventDefault()
    


const nome = inputNome.value
const email = inputEmail.value
const senha = inputSenha.value

console.log(
    {
        nome:nome,
        email:email,
        senha:senha,
    }
)

}

btnCadastrar.addEventListener('click', cadastrar)

