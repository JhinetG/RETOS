'use strict'
const boton = document.querySelector('#ingresar');
boton.addEventListener('click', Verificar)

function Verificar (){
    const num1 = document.getElementById('uno').value;
    const num2 = document.getElementById('dos').value;
    const num3 = document.getElementById('tres').value;
    
    if (num1 === '9' && num2 === '1' && num3 === '1'){
        document.getElementById('alerta').innerText="Password 1 Correcto";
    } else if (num1 === '7' && num2 === '1' && num3 === '4'){
        document.getElementById('alerta').innerText="Password 2 Correcto";
    } else {
        document.getElementById('alerta').innerText="Password Incorrecto";
    }
}