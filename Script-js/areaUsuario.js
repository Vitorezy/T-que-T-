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
  var nav_opcoes_usuario = document.getElementById("nav_opcoes_usuario");
  var conteudo_opcoes_usuario = document.getElementById(
    "conteudo_opcoes_usuario"
  );
  if (container_opcoes_usuario.style.width == "35%") {
    conteudo_opcoes_usuario.style.display = "none";
    nav_opcoes_usuario.style.display = "none";
    container_opcoes_usuario.style.width = "5%";
    toggle_opcoes_usuario.style.width = "100%";
    seta_menu_opcoes_usuario.src = "Imagens/seta_direita.png";
  } else {
    conteudo_opcoes_usuario.style.display = "flex";
    nav_opcoes_usuario.style.display = "block";
    container_opcoes_usuario.style.width = "35%";
    toggle_opcoes_usuario.style.width = "10%";
    seta_menu_opcoes_usuario.src = "Imagens/seta_esquerda.png";
  }
});
window.onload = function () {
  const nome_user_data = localStorage.getItem("nome_usuário_data");
  var campo_nome_usuario = document.getElementById("nome_usuario");
  campo_nome_usuario.textContent = nome_user_data;
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
//emoji de avaliação te dá resposta padrão
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
botao_fechar_suporte.addEventListener("click", () => {
  avaliar_atendimento.style.display = "block";
  Caixa_suporte.style.display = "none";
});
// mensagens suporte
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
var container_conjunto = document.getElementById("container_conjunto");
var conjuntos_n = document.getElementById("conjuntos_n");
//orçar em conjunto ativo ou desativo
var formulario_orcamento = document.getElementById("formulario_orcamento");
container_conjunto.addEventListener("click", () => {
  if (conjuntos_n.checked == false) {
    label_conjuntos_n.innerHTML = "Orçar em conjunto: Desativo";
  } else {
    label_conjuntos_n.innerHTML = "Orçar em conjunto: Ativado";
  }
});
formulario_orcamento.addEventListener("submit", () => {
  if (conjuntos_n.checked == false) {
    alert("Seu pedido foi efetuado, Muito Obrigado. :)");
  } else {
    alert("Agora crie a próxima peça.");
  }
});
// abrir e fechar crédito
var creditos_toggle = document.getElementById("creditos_toggle");
creditos_toggle.addEventListener("click", () => {
  var footer = document.querySelector("footer");
  if (footer.style.height == "26px") {
    footer.style.height = "0%";
    creditos_toggle.src = "Imagens/expandirCreditoIcon.png";
  } else {
    footer.style.height = "26px";
    creditos_toggle.src = "Imagens/fecharCreditoIcon.png";
  }
});
var optexcluirconta = document.getElementById("optexcluirconta");
optexcluirconta.addEventListener("click", () => {
  if (confirm("Você tem certeza que deseja excluir sua conta?") == true) {
    window.location.href = "index.html";
  }
});
var optorcamento = document.getElementById("optorcamento");
optorcamento.addEventListener("click", () => {
  container_conteudo.innerHTML = `<div id="header_conteudo_usuario">
          <p>Faça seu orçamento conosco!</p>
        </div>
        <form action="#" method="get" id="formulario_orcamento">
          <div id="container_conjunto">
            <label id="label_conjuntos_n" for="conjuntos_n"
              >Orçar em conjunto: Desativo
            </label>
            <input type="checkbox" name="conjuntos_n" id="conjuntos_n" />
          </div>
          <p >
            Dados básicos: 
          </p>
          <div id="container_selecionar_tipo_vestimenta">
            <label for="Tipo_roupa">Tipo de Vestimenta:</label>
            <select name="Tipo_roupa" id="Tipo_roupa">
              <option value="select">Selecione um tipo de vestimenta</option>
              <optgroup label="Superiores">
                <option value="Blusa">Blusa</option>
                <option value="Camisa">Camisa</option>
                <option value="Camiseta">Camiseta</option>
                <option value="Corta_Vento">Corta Vento</option>
              </optgroup>
              <optgroup label="Inferiores">
                <option value="Calca">Calça</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Shorts">Shorts</option>
                <option value="saia">Saia</option>
              </optgroup>
              <optgroup label="Acessórios">
                <option value="Bone">Boné</option>
                <option value="chapeu">Chapéu</option>
                <option value="Pulseira">Pulseira</option>
                <option value="Brinco">Brinco</option>
                <option value="Colar">Colar</option>
              </optgroup>
            </select>
          </div>
          <div id="container_tamanho_orcamento">
            <p for="#" style="color: rgb(115, 44, 196);">Tamanho: </p>
            <fieldset>  
              <input type="radio" name="radio_tamanho_orcamento" id="RT1"/>
              <label class="label_tamanho_orcamento" for="RT1" style="margin-left: 0px;"> 
                <div>
                  PP
                </div>  </label>
              <input type="radio" name="radio_tamanho_orcamento" id="RT2"/>
              <label class="label_tamanho_orcamento" for="RT2">
                <div>
                  P
                </div>  </label>
              <input type="radio" name="radio_tamanho_orcamento" id="RT3"/>
              <label class="label_tamanho_orcamento" for="RT3"> 
                <div>
                  M
                </div> </label>
              <input type="radio" name="radio_tamanho_orcamento" id="RT4"/>
              <label class="label_tamanho_orcamento" for="RT4">
                <div>
                  G 
                </div> </label>
              <input type="radio" name="radio_tamanho_orcamento" id="RT5"/>
              <label class="label_tamanho_orcamento" for="RT5">
                <div>
                  GG
                </div>  </label>
            </fieldset>
          </div>
          <p for="#">Seleção de cores:</p>
          <div id="container_cores_orçamento">
            <label for="c1">
              Primeira cor:
            </label>
            <input type="color" name="c1" id="c1">
            <label for="c2">
              Segunda cor:
            </label>
            <input type="color" name="c2" id="c2">
            <label for="c3">
              Terceira cor:
            </label>
            <input type="color" name="c3" id="c3">
          </div>
          <p >
            Descrição dos itens: 
          </p>
          <div id="container_descricao">
            <textarea
              required
              minlength="20"
              style="display: block;"
              autocapitalize="on"
              placeholder="Especifique no texto o tecido desejado, estampas, caimento, inspirações (Caso tenha), estilos, Etc..."
              name="descricao"
              id="descricao"
              cols="75"
              rows="5"
              style="resize: none"
            ></textarea>
          </div>
          <input type="submit" value="Enviar" id="botao_enviar_orcarmento" class="botaofimorcamento">
          <input type="reset" value="Resetar" id="botao_resetar_orcarmento" class="botaofimorcamento">
        </form>
      </div>`;
});
var optvirarparceiro = document.getElementById('optvirarparceiro')
optvirarparceiro.addEventListener('click', ()=> { 
  container_conteudo.innerHTML = `<div id="header_conteudo_usuario">
          <p>Faça seu orçamento conosco!</p>
        </div> `
})
