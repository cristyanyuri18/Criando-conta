const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmSenha = document.getElementById('confirmSenha')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const confirSenhaValue = confirmSenha.value.trim()

    if (usernameValue === '') {
        // mostrar o erro
        // adicionar a classe error
        errorValidotion(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        successValidation(username)
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else {
        successValidation(email)
    }

    if(senhaValue === '') {
        errorValidotion(senha, 'Preencha esse campo')
    } else if (senhaValue.length < 6) {
            errorValidation(senha, 'A senha deve ter mais de 4 caracteres')
        } else {
            successValidation(senha)
        }

    if(confirSenhaValue === '') {
        errorValidotion(confirmSenha, 'Preencha esse campo')
    } else if (confirmSenhaValue !==confirSenhaValue) {
        errorValidation(confirmSenha, 'As senhas estão erradas')
    } else {
        successValidation(confirmSenha)
    }
}

function errorValidotion(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message  

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}