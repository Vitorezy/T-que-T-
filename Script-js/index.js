var botaoTodos = document.getElementById("btnNavTodas");
var botaoinverno = document.getElementById("btnNavInverno");
var botaoverao = document.getElementById("btnNavVerao");
var botaooutono = document.getElementById("btnNavOutono");
var botaoprimavera = document.getElementById("btnNavPrimavera");
var botaoafro = document.getElementById("btnNavAfro");
var mensagem_selecao = document.getElementById("mensagem_selecao");
// verifica se todos ou nenhum estão selecionados
function verificarselecionado() { 
  if (
    botaoafro.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
}
//botão de selecionar todos
botaoTodos.addEventListener("click", () => {
  var peca_home = document.getElementsByClassName("peca_home");
  if (botaoTodos.checked) {
    for (let item of peca_home) {
      item.style.display = "block";
    }
    botaoafro.checked = true;
    botaoinverno.checked = true;
    botaooutono.checked = true;
    botaoprimavera.checked = true;
    botaoverao.checked = true;
    mensagem_selecao.innerHTML = "Peças";
  } else {
    for (let item of peca_home) {
      item.style.display = "none";
    }
    botaoafro.checked = false;
    botaoinverno.checked = false;
    botaooutono.checked = false;
    botaoprimavera.checked = false;
    botaoverao.checked = false;
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
});
// outros botões
botaoinverno.addEventListener("click", () => {
  var colecao_inverno = document.getElementsByClassName("colecao_inverno");
  if (botaoinverno.checked) {
    for (let item of colecao_inverno) {
      item.style.display = "block";
      mensagem_selecao.innerHTML = "Peças";
    }
  } else {
    for (let item of colecao_inverno) {
      item.style.display = "none";
    }
    botaoTodos.checked = false;
  }
  verificarselecionado()
});
botaoverao.addEventListener("click", () => {
  var colecao_verao = document.getElementsByClassName("colecao_verao");
  if (botaoverao.checked) {
    for (let item of colecao_verao) {
      item.style.display = "block";
      mensagem_selecao.innerHTML = "Peças";
    }
  } else {
    for (let item of colecao_verao) {
      item.style.display = "none";
    }
    botaoTodos.checked = false;
  }
  verificarselecionado()
});
botaooutono.addEventListener("click", () => {
  var colecao_outono = document.getElementsByClassName("colecao_outono");
  if (botaooutono.checked) {
    for (let item of colecao_outono) {
      item.style.display = "block";
      mensagem_selecao.innerHTML = "Peças";
    }
  } else {
    for (let item of colecao_outono) {
      item.style.display = "none";
    }
    botaoTodos.checked = false;
  }
  verificarselecionado()
});
botaoprimavera.addEventListener("click", () => {
  var colecao_primavera = document.getElementsByClassName("colecao_primavera");
  if (botaoprimavera.checked) {
    for (let item of colecao_primavera) {
      item.style.display = "block";
      mensagem_selecao.innerHTML = "Peças";
    }
  } else {
    for (let item of colecao_primavera) {
      item.style.display = "none";
    }
    botaoTodos.checked = false;
  }
  verificarselecionado()
});
botaoafro.addEventListener("click", () => {
  var colecao_afro = document.getElementsByClassName("colecao_afro");
  if (botaoafro.checked) {
    for (let item of colecao_afro) {
      item.style.display = "block";
      mensagem_selecao.innerHTML = "Peças";
    }
  } else {
    for (let item of colecao_afro) {
      item.style.display = "none";
    }
    botaoTodos.checked = false;
  }
  verificarselecionado()
});

var checkbox_pecas = document.getElementsByClassName('checkbox_pecas')
var numeroitenscarrinho = document.getElementById('numeroitenscarrinho')
let valornumeroitenscarrinho = 0
var inputnumberpeca = document.getElementById('teste')
for (let checkbox of checkbox_pecas) { 
  checkbox.addEventListener('click', ()=> { 
    if (checkbox.checked) { 
      valornumeroitenscarrinho = valornumeroitenscarrinho + 1
    } else { 
      valornumeroitenscarrinho = valornumeroitenscarrinho - 1
    }
    numeroitenscarrinho.innerHTML = valornumeroitenscarrinho
  })
}

