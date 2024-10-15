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
var totalpagar = document.getElementById('totalpagar')
  var numeroitensspan = document.getElementById('numeroitensspan')
  var valortotalfinalspan = document.getElementById('valortotalfinalspan')
window.onload = function () {
  const valortotalcompra = localStorage.getItem("valortotal");
  const numeroitens = localStorage.getItem('numeroitens')
  totalpagar.innerHTML = valortotalcompra
  valortotalfinalspan.innerHTML = valortotalcompra
  numeroitensspan.innerHTML = numeroitens
};
for (let item of emojis_avaliacao) {
    item.addEventListener("click", () => {
      avaliar_atendimento.style.display = "none";
      alert("Obrigado pela resposta! :)");
    });
  }
// abrir e fechar suporte
botão_suporte.addEventListener("click", () => {
    if (avaliar_atendimento.style.display != "block") {
      if (Caixa_suporte.style.display == "block") {
        Caixa_suporte.style.display = "none";
      } else {
        Caixa_suporte.style.display = "block";
      }
    }
  });
  // mensagens padrão do suporte
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
      "<div class='mensagem_suporte mensagem_sistema'> <p> Você pode se tornar um artista parceiro da Tá que Tá entrando em contato pelo nosso <a href='mailto:taqueta@gmail.com'> Email </a> ou se cadastrando pela página do usuário";
    container_mensagens.scrollTo(0, 7000);
  });
  botao_mensagem_4.addEventListener("click", () => {
    container_mensagens.innerHTML +=
      "<div class='mensagem_suporte mensagem_usuario'> <p> Quero denunciar uma situação que deixou a mim desconfortável envolvendo a Tá que Tá.  </p></div>";
    container_mensagens.innerHTML +=
      "<div class='mensagem_suporte mensagem_sistema'> <p> Sentimos muito em ouvir isso. você pode entrar em contato conosco por nosso <a href='mailto:taqueta@gmail.com'> Email </a> e prontamente será respondido.</p></div>";
    container_mensagens.scrollTo(0, 7000);
  });
  // evento de apagar o historico do suporte
  apagar_historico.addEventListener("click", () => {
    container_mensagens.innerHTML = "";
  });
  // Evento que abre e fecha os créditos no footer
  var creditos_toggle = document.getElementById("creditos_toggle");
  creditos_toggle.addEventListener("click", () => {
    var footer = document.querySelector("footer");
    if (footer.style.height == '26px') {
      footer.style.height = '0%'
      creditos_toggle.src = "Imagens/expandirCreditoIcon.png";
    } else {
      footer.style.height = '26px'
      creditos_toggle.src = "Imagens/fecharCreditoIcon.png";
      
    }
  });
  
  
