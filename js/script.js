const btnFechar = document.querySelector('.btn__fechar')
const msgErro = document.querySelector('.modal__msg_erro')
const msgSucesso =  document.querySelector('.modal__msg_sucesso')
const modalEnviar = document.querySelector('.modal__enviar')
const btnEnviar = document.querySelector('.btn__enviar')


   

const validarDados= ({nome, email}) =>{
   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
   const nomeValido = nome && nome.length >=3
   const emailValido = email && emailRegex.test(email)
    return {
        nomeValido,
        emailValido
    }
        
   
}

const pegarDados = () =>{
    const dados = {
        nome :document.querySelector('.input__nome').value,
        email : document.querySelector('.input__email').value 
    }
   const{ nomeValido, emailValido } = validarDados(dados)

   return nomeValido && emailValido ? 'sucesso' : 'erro';

   
}

const formatarModal = (statusRegister) =>{
        if(statusRegister === 'sucesso'){
            msgErro.style.display = 'none'
            msgSucesso.style.display = 'block'
            btnFechar.classList.add('bg__sucesso')
            btnFechar.classList.remove('bg__erro')
            document.querySelector('form').reset()
    
        }
    
        if(statusRegister === 'erro'){
            msgSucesso.style.display = 'none'
            msgErro.style.display = 'block'
            btnFechar.classList.add('bg__erro')
            btnFechar.classList.remove('bg__sucesso')
            
        }
}
const mostrarModal = (statusRegister) => {
   formatarModal(statusRegister)
   modalEnviar.showModal()
}

btnEnviar.addEventListener('click',(e) => {
    e.preventDefault()
    mostrarModal(pegarDados())

})

btnFechar.addEventListener('click',() => {
    modalEnviar.close()
})

