const formLogin = document.getElementById('form-login')

console.log("formlogin", formLogin)
formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    //Validações
    // 1. Username > 6 caracteres
    // 2. Password > 8 caracteres
    // - > capturar as informações pelos IDs dos inputs
    // -> realizar as validações 

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');




if(usernameInput.value.length >= 6){
    console.log("Validação bem sucedida");
}else{
    console.log("Erro, o Username possui menos de 6 caracters");
}


if(passwordInput.value.length >= 8){
    console.log("Validação bem sucedida");
}else{
    console.log("Erro, a senha possui menos de 8 caracters");
}





})
