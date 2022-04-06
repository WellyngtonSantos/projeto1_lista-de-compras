const salva = document.getElementById('adicionaProduto');
const campo = document.getElementById('produto');
var lista = document.getElementById('listaProdutos')



// funcao de remocao de item por id
function removeItem(id) {
  // cria uma lista nova
  let novaLista = [];
  // itera entre todos itens da lista velha
  lista.forEach(function (item) {
    if (item.id !== id) {
      // adiciona na lista nova apenas itens
      // com id diferete do removido
      novaLista.push(item);
    }
  })
  // atualiza a lista oficial e a tela
  lista = novaLista;
  updateScreen();
}

// funcao de atualizar a tela
function updateScreen() {
  // limpa o interior do elemento ul
  ul.innerHTML = '';
  // itera entre todos itens da lista
  lista.forEach(function (item) {
    // cria botao de remocao e define evento
    let btn = document.createElement('button');
    btn.innerHTML = 'x';
    btn.onclick = function () {
      // remove a partir da id
      removeItem(item.id);
    }
    // cria o elemento li e acrescenta nome e botão
    let li = document.createElement('li');
    li.id = `i${item.id}`;
    li.innerHTML = item.name;
    li.appendChild(btn);
    // acrescenta li na ul
    ul.appendChild(li);
  });
}

// funcao de salvar no localStorage
function saveStorage() {
  // converte lista para string JSON
  let listaJSON = JSON.stringify(lista);
  // salva a lista no localStorage
  localStorage.setItem('lista', listaJSON);
}

function adicionaProduto(){
  if (campo.value) {
    lista.push({
      id: Date.now(),
      name: campo.value
    });
    campo.value = '';
    updateScreen();
    saveStorage();
  } else {
    alert ('Insira o nome de um item');
  }
}

// adiciona evento de click no botao de adicionar
salva.addEventListener('click', adicionaProduto);

// adiciona evento de tecla ao digitar no campo
salva.addEventListener('keydown', function (event) {
  // testa se a tecla apertada é Enter
  if (event.key === 'Enter') {
    // se for Enter, executa o addItem
    adicionaProduto();
  }
});
