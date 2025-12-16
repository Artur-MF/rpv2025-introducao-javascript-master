const formLogin = document.getElementById('form-cadastro')
const nomeInput = document.getElementById('nome')
const emailInput = document.getElementById('email')
const sexoInput = document.getElementById('sexo')
const dataNascimentoInput = document.getElementById('dataNascimento')







    if(nomeInput.value.trim().split(' ').filter(item => item.length > 0).length > 1) {
        console.log("Nome e Sobrenome Correto")
    }




function validaSexo(sexo) {
    if(sexo.toLowerCase == "M" ||sexo.toLowerCase == "F" ||sexo.toLowerCase == "feminino" ||sexo.toLowerCase == "masculino" ) {
        console.log("Sexo correto")
    }


}

