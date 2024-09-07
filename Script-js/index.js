var botaoTodos = document.getElementById("btnNavTodas");
var botaoinverno = document.getElementById("btnNavInverno");
var botaoverao = document.getElementById("btnNavVerao");
var botaooutono = document.getElementById("btnNavOutono");
var botaoprimavera = document.getElementById("btnNavPrimavera");
var botaofestas = document.getElementById("btnNavFestas");
var botaoafro = document.getElementById("btnNavAfro");
var mensagem_selecao = document.getElementById("mensagem_selecao");
botaoTodos.addEventListener("click", () => {
  var peca_home = document.getElementsByClassName("peca_home");
  if (botaoTodos.checked) {
    for (let item of peca_home) {
      item.style.display = "block";
    }
    botaoafro.checked = true;
    botaofestas.checked = true;
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
    botaofestas.checked = false;
    botaoinverno.checked = false;
    botaooutono.checked = false;
    botaoprimavera.checked = false;
    botaoverao.checked = false;
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
});
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
  if (
    botaoafro.checked &&
    botaofestas.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaofestas.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
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
  if (
    botaoafro.checked &&
    botaofestas.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaofestas.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
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
  if (
    botaoafro.checked &&
    botaofestas.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaofestas.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
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
  if (
    botaoafro.checked &&
    botaofestas.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaofestas.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
});
botaofestas.addEventListener("click", () => {
  var colecao_festas = document.getElementsByClassName("colecao_festas");
  if (botaofestas.checked) {
    for (let item of colecao_festas) {
      item.style.display = "block";
      mensagem_selecao.innerHTML = "Peças";
    }
  } else {
    for (let item of colecao_festas) {
      item.style.display = "none";
    }
    botaoTodos.checked = false;
  }
  if (
    botaoafro.checked &&
    botaofestas.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaofestas.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
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
  if (
    botaoafro.checked &&
    botaofestas.checked &&
    botaoinverno.checked &&
    botaooutono.checked &&
    botaoprimavera.checked &&
    botaoverao.checked
  ) {
    botaoTodos.checked = true;
  } else if (
    botaoafro.checked == false &&
    botaofestas.checked == false &&
    botaoinverno.checked == false &&
    botaooutono.checked == false &&
    botaoprimavera.checked == false &&
    botaoverao.checked == false
  ) {
    mensagem_selecao.innerHTML = "Selecione alguma coleção!";
  }
});
