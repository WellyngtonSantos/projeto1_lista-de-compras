//cria espaços da memória para receber os dados enviados pelo HTML
const texto = document.querySelector('input')
const ul = document.querySelector('ul')
const btnDeleteAll = document.querySelector('.header button')
const btnInsert = document.querySelector('.divInsert button')

//cria variável que recebe array de itens
var itensDB = []

//evento do botão de inserir o item (botão enter)
texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') {
    setItemDB()
  }
})

//evento do botão de inserir o item (clique do mouse)
btnInsert.onclick = () => {
  if (texto.value != '') {
    setItemDB()
  }
}

//fazer o push do valor do item
function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens atingido!')
    return
  }
  itensDB.push({ 'item': texto.value, 'status': '' })
  updateDB()
}

function updateDB() {
  //lança o item dentro do localStorage como todolist e passa o itensDB pra JSON.stringfy,
  localStorage.setItem('todolist', JSON.stringify(itensDB))
  //depois que adiciona no localStorage, chama uma função pra carregar os itens
  loadItens()
}

//cria uma função pra inserir os itens na tela
function loadItens() {
  //limpa a ul pra não duplicar registros
  ul.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
  //busca os itens com um forEach
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i)
  })
}

//cria a li com o document.createElement pra poder criar a checkbox e atribuir o status do item
function insertItemTela(text, status, i) {
  const li = document.createElement('li')  
  li.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}><class='excluir'>X</i></button>
    </div>
    `
  ul.appendChild(li)
  //cria um if pra a classe que vai riscar o item ou não
  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }
  //limpa o input inserindo uma string vazia após salvar o item
  texto.value = ''
}

//função done da checkbox pra quando marcar como realizado ele atribuir o status de checado
function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked' 
  } else {
    itensDB[i].status = '' 
  }
  //chama a função updateDB pra atualizar
  updateDB()
}

//cria a função para remover 1 item
function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}
//chama o loadItens pra atualizar a tela
loadItens();

//cria o delete all pra deletar todos os itens
btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB()
}
