document.querySelectorAll('.player').forEach((item)=>{
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})
document.querySelectorAll('.area').forEach((area =>{
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
}))
document.querySelector('.jogadores').addEventListener('dragover', dragOverJogadores)
document.querySelector('.jogadores').addEventListener('dragleave', dragLeaveJogadores)
document.querySelector('.jogadores').addEventListener('drop', dropJogadores)


//item selecionado
function dragStart(e){
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}


//campo de futebol
function dragOver(e){
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}
function dragLeave(e){
    e.currentTarget.classList.remove('hover')
}
function drop(e){
    e.currentTarget.classList.remove('hover')
    let itemEscolhido = document.querySelector('.dragging')
    if(e.currentTarget.querySelector('.escalado') === null){
        e.currentTarget.appendChild(itemEscolhido)
        itemEscolhido.classList.add('escalado')
        itemEscolhido.classList.remove('player')
    } 
}

//lista de jogadores
function dragOverJogadores(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}

function dragLeaveJogadores(e) {
    e.currentTarget.classList.remove('hover')
}

function dropJogadores(e) {
    e.currentTarget.classList.remove('hover')
    let itemEscolhido = document.querySelector('.dragging')
    e.currentTarget.appendChild(itemEscolhido)
    itemEscolhido.classList.remove('escalado')
    itemEscolhido.classList.add('player')
}


