const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


var form = document.getElementById('form')
var email = document.getElementById('email')
var password = document.getElementById('password')
var passwordConfirm = document.getElementById('passwordConfirm')


// tirando o comportamento padrão do navegador, ou seja, não irá perguntar se deseja salvar a senha.
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    // função trim para remover os espaços em branco e considerar apenas os textos
    var emailUser = email.value.trim()
    var passwordUser = password.value.trim()
    var passwordConfirmUser = passwordConfirm.value.trim()

    if (emailUser === "") {
        errorValidation(email, 'Preencha este campo')
    } else {
        sucessValidation(email)
    }

    if (passwordUser === "") {
        errorValidation(password, 'Preencha este campo')
    } else {
        sucessValidation(password)
    }

    if (passwordConfirmUser === "") {
        errorValidation(passwordConfirm, 'Preencha este campo')
    } else if (passwordConfirmUser !== passwordUser) {
        errorValidation(password, 'Senha diferente')
    } else {
        sucessValidation(passwordConfirm)
    }
}

function errorValidation(input, message) {
    // função que irá reatribuir e atualizar o nome da classe no HTML automaticamente
    var inputContainer = input.parentElement
    var small = inputContainer.querySelector('small')

    small.innerText = message
    inputContainer.className = 'input-container error'
}

function sucessValidation(input) {
    var inputContainer = input.parentElement
    inputContainer.className = 'input-container success'
}