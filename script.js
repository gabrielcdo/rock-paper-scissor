var teste = document.getElementById('teste')
var elementos = document.getElementById('elementos')
var create = document.getElementById('create')
var resultados = document.getElementById('resultados')
var img1 = document.getElementById('myimg')
var img2 = document.getElementById('opponentimg')
var win = 0
var background = document.getElementById('background')

function rand(){
    return Math.floor(Math.random()*3)+1;

}

function resolves(escolha){
    console.log("Hello World")
     
     
     var aleatorio= rand()
     
     elementos.classList.add('hide');
     teste.classList.remove('hide')
     var btn = document.createElement('BUTTON')
     btn.id = 'btnId'
     btn.innerHTML = "Jogue Novamente"
     create.appendChild(btn)
     document.getElementById("btnId").addEventListener("click", reset);
     if(escolha == aleatorio){
        win = 0
    }
    else if(escolha == 1 ){
        if(aleatorio == 3 ){
            win = 1
        }
        else{win = -1 }}
    else if(escolha == 2 ){
       if(aleatorio == 1 ){
           win=1
       }
       else{win = -1}}
       else{
           if(aleatorio == 2 ){
            win = 1 
           }
           else{win = -1}}
           if(win == 1){
            teste.innerHTML = 'Vitória'
            background.style.background = 'green'}
           else if(win == -1){
            teste.innerHTML = 'Derrota'
            background.style.background = 'red'
           }
           else{
            teste.innerHTML = 'Empate'
           }
     
}
function reset (){
    background.style.background = '#2d8cf0'
    win = 0
    document.getElementById('btnId').remove()
    teste.classList.add('hide')
    elementos.classList.remove('hide')
}

