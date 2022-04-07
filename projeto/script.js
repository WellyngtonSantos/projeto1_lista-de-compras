
//função principal que é chamada pelo botão Salvar
function salvarProduto(){

  //variáveis de base para o script
  let dadoProduto = document.getElementById('produto').value;
  let listaProdutos = document.getElementById("listaProdutos").innerHTML;
  let checkbox = document.getElementById("checkbox").checked;
  let dados = [checkbox, dadoProduto];

  //adiciona os itens na lista
  listaProdutos += "<li>" + checkbox +dadoProduto+ "</li>"
  document.getElementById("listaProdutos").innerHTML = listaProdutos;

  //chama função de validação e limpa o campo do input
  validaCampos();
  limpaCampo();
  
  //apenas para acompanhamento dos dados via console
  console.log(dados);
}

//função para apagar o campo input automáticamente ao salvar
function limpaCampo(){
  document.getElementById('produto').value = '';
}

//função para limpar a lista inteira
function apagarLista(){
  document.getElementById('listaProdutos').innerHTML = '';
}

//função para validar se o campo do input não está vazio (NÃO ESTÁ FUNCIONANDO, POIS ADICIONA O ITEM DA MESMA FORMA APÓS O ALERT)
function validaCampos(){
  if (document.getElementById('produto').value === ""){
      alert("Informe um produto");
      return false;
  }else{
      document.getElementById('produto').focus;
      
  }
}


//essa parte abaixo eu tentei reaproveitar de um material anterior, 
//mas não consegui encaixar para funcionar com meu código


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