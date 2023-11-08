//Variáveis dos elementos da lista

//Atribuindo o formulário a uma variável
const form = document.getElementById('addForm');
//Atribuir a lista a uma variável
const itemList = document.getElementById('items');
//Atribuir a barra de pesquisa
const filter = document.getElementById('filter')

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);

function buscarItems() {
    alert('tecla pressionada')
}
function addItem() {
    alert('VC CLICOU')
}
function removeItem() {
    alert('VOCÊ CLICOUUUUUUUUUUUUUU')
}