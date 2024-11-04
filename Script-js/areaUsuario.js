var toggle_opcoes_usuario = document.getElementById(
  "opções_usuário_abrir_fechar"
);
var arquivo_foto_usuario = document.getElementById("arquivo_foto_usuario");
arquivo_foto_usuario.addEventListener("change", (event) => {
  if (arquivo_foto_usuario.files.length > 0) {
    const tipo = arquivo_foto_usuario.files[0].type;
    const formatos = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!formatos.includes(tipo)) {
      alert("esse formato não é permitido!");
      return;
    }
    var foto_usuario = document.getElementById("foto_usuario");
    foto_usuario.style.backgroundImage =
      "url(" + URL.createObjectURL(arquivo_foto_usuario.files[0]) + ")";
  }
});
toggle_opcoes_usuario.addEventListener("click", () => {
  var container_opcoes_usuario = document.getElementById("opções_usuário");
  var seta_menu_opcoes_usuario = document.getElementById(
    "seta_menu_opcoes_usuario"
  );
  var nav_opcoes_usuario = document.getElementById("nav_opcoes_usuario");
  var conteudo_opcoes_usuario = document.getElementById(
    "conteudo_opcoes_usuario"
  );
  if (container_opcoes_usuario.style.width == "40%") {
    conteudo_opcoes_usuario.style.display = "none";
    nav_opcoes_usuario.style.display = "none";
    container_opcoes_usuario.style.width = "7%";
    toggle_opcoes_usuario.style.width = "100%";
    seta_menu_opcoes_usuario.src = "Imagens/seta_direita.png";
  } else {
    conteudo_opcoes_usuario.style.display = "flex";
    nav_opcoes_usuario.style.display = "flex";
    container_opcoes_usuario.style.width = "40%";
    toggle_opcoes_usuario.style.width = "18%";
    seta_menu_opcoes_usuario.src = "Imagens/seta_esquerda.png";
  }
});
let qualform = 0;
window.onload = function () {
  var campo_nome_usuario = document.getElementById("nome_usuario");
  campo_nome_usuario.textContent = localStorage.getItem("nomeatual");
  if (localStorage.getItem("optparsn") > 0) {
    optvirarparceiro.style.cursor = "not-allowed";
    optvirarparceiro.style.backgroundColor = "gray";
    optvirarparceiro.title = "Requerimento em análise.";
  } else {
    optvirarparceiro.style.display = "block";
  }
};
var body = document.getElementById("inicio");
var Navbar = document.querySelector("nav");
var Header = document.querySelector("header");
var main = document.querySelector("main");
var conteudo = document.getElementById("conteudo");
var nav_aberta = document.getElementById("nav_aberta");
var Caixa_suporte = document.getElementById("Caixa_suporte");
var botão_suporte = document.getElementById("img-botão-suporte");
var botao_fechar_suporte = document.getElementById("botao_fechar_suporte");
var botao_mensagem_1 = document.getElementById("botao_mensagem_1");
var botao_mensagem_2 = document.getElementById("botao_mensagem_2");
var botao_mensagem_3 = document.getElementById("botao_mensagem_3");
var botao_mensagem_4 = document.getElementById("botao_mensagem_4");
var container_mensagens = document.getElementById("container_mensagens");
var apagar_historico = document.getElementById("apagar_historico");
var avaliar_atendimento = document.getElementById("avaliar_atendimento");
var emojis_avaliacao = document.getElementsByClassName("emojis_avaliacao");
var container_conteudo = document.getElementById("container_conteudo");
var label_conjuntos_n = document.getElementById("label_conjuntos_n");
var container_data1 = document.getElementById("container_data1");
var conjuntos_n = document.getElementById("conjuntos_n");
var formulario_orcamento = document.getElementById("formulario_orcamento");
container_data1.addEventListener("click", () => {
  if (conjuntos_n.checked == !1) {
    label_conjuntos_n.innerHTML = "Orçar em conjunto: Desativo";
  } else {
    label_conjuntos_n.innerHTML = "Orçar em conjunto: Ativado";
  }
});
formulario_orcamento.addEventListener("submit", () => {
  if (qualform == 0) {
    if (conjuntos_n.checked == !1) {
      alert("Seu pedido foi efetuado, Muito Obrigado. :)");
    } else {
      alert("Agora crie a próxima peça.");
    }
  } else {
    localStorage.setItem("optparsn", qualform);
    alert(
      "Seu pedido foi efetuado e será analisado pela nossa equipe. Muito Obrigado. :)"
    );
  }
});
var optexcluirconta = document.getElementById("optexcluirconta");
optexcluirconta.addEventListener("click", () => {
  if (confirm("Você tem certeza que deseja excluir sua conta?") == !0) {
    localStorage.clear("senhaatual");
    localStorage.clear("nomeatual");
    localStorage.clear("optparsn");
    window.location.href = "index.html";
  }
});
var optorcamento = document.getElementById("optorcamento");
optorcamento.addEventListener("click", () => {
  window.location.reload();
});
var optvirarparceiro = document.getElementById("optvirarparceiro");
optvirarparceiro.addEventListener("click", () => {
  if (localStorage.getItem("optparsn") > 0) {
    alert(
      "seu pedido está sendo analisado por nossa equipe! contataremos assim que houver uma resposta."
    );
  } else {
    qualform = 1;
    conjuntos_n.checked = !1;
    var container_data1 = document.getElementById("container_data1");
    var container_data2 = document.getElementById("container_data2");
    var container_data3 = document.getElementById("container_data3");
    var container_data4 = document.getElementById("container_data4");
    var header_conteudo_usuario = document.getElementById(
      "header_conteudo_usuario"
    );
    var ptamanho = document.getElementById("ptamanho");
    var pcor = document.getElementById("pcor");
    var pdescricao = document.getElementById("pdescricao");
    var descricao = document.getElementById("descricao");
    header_conteudo_usuario.innerHTML = "<p> Pedido de Parceria </p>";
    container_data1.style.display = "none";
    container_data2.innerHTML =
      `<p> nome: </p> <input class="input_parceiro" type="text" value="${localStorage.getItem('nomeatual')}" required/>`;
    container_data3.innerHTML =
      ' <p> Data de nascimento: </p> <input class="input_parceiro" type="date" required/>';
    container_data4.innerHTML =
      '<p> CPF: </p> <input class="input_parceiro" required type="text" maxlength="8" minlength="8">';
    ptamanho.style.display = "none";
    pcor.style.display = "none";
    pdescricao.innerHTML = "Seus motivos:";
    descricao.placeholder =
      "Explique por quais motivos você deseja e acredita ser viável para trabalhar conosco, na Tá que Tá!";
  }
});
