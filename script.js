
let listar = document.querySelector("#lista");
let res = document.querySelector("#res");
let iniciar = document.querySelector("#iniciar");
let limpar = document.querySelector("#limpar")
let hdn1 = document.querySelector('#s1')
let hdn2 = document.querySelector('#s2')
lista = [];



function sorteio(){
    let numero = Math.round(Math.random()*100);
    hdn1.removeAttribute('hidden')
    hdn2.removeAttribute('hidden')
    res.innerHTML = numero;  
    lista.push(numero);
    listar.innerHTML = lista;      
}

function limpaTela(){
    hdn1.setAttribute('hidden','hidden')
    hdn2.setAttribute('hidden','hidden')
    res.innerHTML = "";
    lista = [];
    listar.innerHTML = lista;
}