'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')


function mudarCor (){
    forma1.classList.toggle('vermelho')
}
function mudarForma(){
    forma2.classList.toggle('circulo')

}
function mudarImagem(){
    forma3.classList.toggle('imagem')
}
function desaparecerFundo(){
    forma4.classList.toggle('fundo')
}
function rodar(){
    forma5.classList.toggle('rodar')
}
function movimentar(){
    forma6.classList.toggle('movimentar')
}
function pulsando(){
    forma7.classList.toggle('pulsando')
}
function aumentar(){
    forma8.classList.toggle('aumentar')
}
forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', desaparecerFundo)
forma5.addEventListener('click', rodar)
forma6.addEventListener('click', movimentar)
forma7.addEventListener('click', pulsando)
forma8.addEventListener('click', aumentar)