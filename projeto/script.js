function salvarProduto(){
  let dadoProduto = document.getElementById('produto').value;
  let listaProdutos = document.getElementById("listaProdutos").innerHTML;
  let checkbox = document.getElementById("checkbox").checked;
  let dados = [checkbox, dadoProduto];

  listaProdutos += "<li>" + checkbox +dadoProduto+ "</li>"
  document.getElementById("listaProdutos").innerHTML = listaProdutos;
  updateScreen();
  //limpaCampo();
  
  console.log(dados);
}

function limpaCampo(){
  document.getElementById('produto').value = '';
}

function validaCampos(){
  if (document.getElementById('produto').value === ""){
      alert("Informe um produto");
      
  }else{
      document.getElementById('produto').focus;
      return false;
  }
}

// funcao de atualizar a tela
function updateScreen() {
  // limpa o interior do elemento ul
  //listaProdutos.innerHTML = '';
  // itera entre todos itens da lista
  listaProdutos.forEach(function (item) {
    // cria botao de remocao e define evento
    const btn = document.createElement('button');
    btn.innerHTML = 'x';
    btn.onclick = function () {
      // remove a partir da id
      removeItem(item.id);
    }
    // cria o elemento li e acrescenta nome e botão
    const li = document.createElement('li');
    li.id = `i${item.id}`;
    li.innerHTML = item.name;
    li.appendChild(btn);
    // acrescenta li na ul
    ul.appendChild(li);
  });
}