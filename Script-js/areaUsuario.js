var toggle_opcoes_usuario = document.getElementById(
  "opções_usuário_abrir_fechar"
);
var arquivo_foto_usuario = document.getElementById("arquivo_foto_usuario");

//créditos linha 6 á linha 17 para: https://www.youtube.com/watch?v=Gc5dhlbmdLI
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
  var conteudo_opcoes_usuario = document.getElementById(
    "conteudo_opcoes_usuario"
  );
  if (container_opcoes_usuario.style.width == "35%") {
    conteudo_opcoes_usuario.style.display = "none";
    container_opcoes_usuario.style.width = "5%";
    toggle_opcoes_usuario.style.width = "100%";
    seta_menu_opcoes_usuario.src = "Imagens/seta_direita.png";
  } else {
    conteudo_opcoes_usuario.style.display = "flex";
    container_opcoes_usuario.style.width = "35%";
    toggle_opcoes_usuario.style.width = "10%";
    seta_menu_opcoes_usuario.src = "Imagens/seta_esquerda.png";
  }
});
//linha 36 a 44 = chatgpt
window.onload = function () {
  // Função para obter parâmetros da URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  const texto = getQueryParam("nome_login");
  document.getElementById("nome_usuario").innerText = texto;
};
var body = document.getElementById("inicio");
var Navbar = document.querySelector("nav");
var Header = document.querySelector("header");
var main = document.querySelector("main");
var conteudo = document.getElementById("conteudo");
var nav_aberta = document.getElementById("nav_aberta");
var caixa_login = document.getElementById("caixa_login");
var botão_abrir_login = document.getElementById("botão_abrir_login");
var fechar_login = document.getElementById("fechar_login");
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
for (let item of emojis_avaliacao) {
  item.addEventListener("click", () => {
    avaliar_atendimento.style.display = "none";
    alert("Obrigado pela resposta! :)");
  });
}
botão_suporte.addEventListener("click", () => {
  if (avaliar_atendimento.style.display != "block") {
    if (Caixa_suporte.style.display == "block") {
      Caixa_suporte.style.display = "none";
    } else {
      Caixa_suporte.style.display = "block";
    }
  }
});
botao_fechar_suporte.addEventListener("click", () => {
  avaliar_atendimento.style.display = "block";
  Caixa_suporte.style.display = "none";
});
botao_mensagem_1.addEventListener("click", () => {
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_usuario'> <p> O site aparenta problemas de carregamento </p></div>";
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_sistema'> <p> Prováveis motivos: <ul> <li> Problemas na rede de internet. <ul> <li> Contate sua fornecedora de internet. </li> <li> Reinicie o Modem. </ul> </li> <li> Problemas no carregamento do site <ul> <li> Recarregue a página (F5) e tente novamente. </li> </ul> </li> </ul> </p></div>";
  container_mensagens.scrollTo(0, 7000);
});
botao_mensagem_2.addEventListener("click", () => {
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_usuario'> <p> Quero conhecer e contactar a Tá que Tá.</p></div>";
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_sistema'> <p> Você pode descobrir melhor sobre nós por: <ul> <li> Por nossa página <a href='quem somos.html'>(Clique aqui) </a></li> <li> Por nosso <a href='https://www.instagram.com/' target='blank'> instagram </a> </li> <li> Por nosso  <a href='https://web.whatsapp.com/' target='blank'> Whatsapp. </a></li> </ul> </p></div>";
  container_mensagens.scrollTo(0, 7000);
});
botao_mensagem_3.addEventListener("click", () => {
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_usuario'> <p> Como posso me tornar um artista e/ou parceiro da Tá que Tá?  </p></div>";
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_sistema'> <p> <p> Você pode se tornar um artista parceiro da Tá que Tá entrando em contato pelo nosso <a href='mailto:taqueta@gmail.com'> Email </a> ou se cadastrando por nossa <a href='quem somos.html'>página de artistas</a>";
  container_mensagens.scrollTo(0, 7000);
});
botao_mensagem_4.addEventListener("click", () => {
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_usuario'> <p> Quero denunciar uma situação que deixou a mim desconfortável envolvendo a Tá que Tá.  </p></div>";
  container_mensagens.innerHTML +=
    "<div class='mensagem_suporte mensagem_sistema'> <p> Sentimos muito em ouvir isso. você pode entrar em contato conosco por nosso <a href='mailto:taqueta@gmail.com'> Email </a> e prontamente será respondido.</p></div>";
  container_mensagens.scrollTo(0, 7000);
});
apagar_historico.addEventListener("click", () => {
  container_mensagens.innerHTML = "";
});

var label_conjuntos_n = document.getElementById("label_conjuntos_n");
var conjuntos_n = document.getElementById("conjuntos_n");
label_conjuntos_n.addEventListener("click", () => {
  if (conjuntos_n.checked == false) {
    label_conjuntos_n.innerHTML = "Orçar em conjunto: ativo";
  } else {
    label_conjuntos_n.innerHTML = "Orçar em conjunto: desativo";
  }
});
