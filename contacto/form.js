'use strict';
function validacion (valor){

    if ( valor == null || valor.length == 0 || /^\s+$/.test(valor) ){
        return false
    }
    else{
        return true   
    }

}
var formInputs = document.getElementsByClassName('contact-form-input')
var form = document.querySelector('.contact-form')
var buttonForm =  form.querySelector('.cta_black')
buttonForm.style.display = 'none'
validarInput(formInputs[0],buttonForm)
validarInput(formInputs[1],buttonForm)
validarInput(formInputs[2],buttonForm)
validarInput(formInputs[3],buttonForm)
validarInput(formInputs[4],buttonForm)
  



function validarInput(input, submitButton){
    input.addEventListener('focusout', ()=>{
        if (validacion(input.value) == false){
            input.style.background = '#FF4C3E'
            submitButton.style.display  = 'none'
           return false
        }
        else{
            input.style.background = ''
            submitButton.style.display  = ''
            return true
        }
})
}


    