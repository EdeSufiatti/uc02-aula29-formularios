const formulario = document.getElementById("form")

const btnCadastrar = document.getElementById("btnCadastrar")
const inputNome = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("password");


const listaPessoas = []

function cadastrar(event) {
    event.preventDefault()


    //obtendo dados do formulário para as consts
    const nome = inputNome.value
    const email = inputEmail.value
    const senha = inputSenha.value

    //validações, verificando se os campos tem conteudo
    if (!nome) {
        alert("Campo nome não cadastrado, informe seu nome!")
        inputNome.focus
        return

    }
    if (!email) {
        alert("Campo e-mail não cadastrado, informe se e-mail")
        inputEmail.focus
        return

    }
    if (!senha) {
        alert("Campo Senha não cadastrado, informe a sua senha")
        inputSenha.focus
        return

    }


    console.log(
        {
            nome: nome,
            email: email,
            senha: senha,
        }
    )

}

btnCadastrar.addEventListener('click', cadastrar)

