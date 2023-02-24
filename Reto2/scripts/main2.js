const boton = document.querySelector('#sumar');

boton.addEventListener('click', Sumar);

function Sumar(){
    const sticker1 = parseInt(document.querySelector('#stic1').value);
    const sticker2 = parseInt(document.querySelector('#stic2').value);
    const sticker3 = parseInt(document.querySelector('#stic3').value);
    const suma = sticker1 + sticker2 + sticker3;
    if (suma > 10 ){
        document.getElementById('alerta').innerText="Llevas demasiados stickers";
    }else{
        document.getElementById('alerta').innerText=`Llevas ${suma} stickers seleccionados`;
    }
}