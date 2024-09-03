
var toggle_opcoes_usuario = document.getElementById('opções_usuário_abrir_fechar')
var arquivo_foto_usuario = document.getElementById('arquivo_foto_usuario')
//créditos linha 6 á linha 17 para: https://www.youtube.com/watch?v=Gc5dhlbmdLI
arquivo_foto_usuario.addEventListener('change', event => { 
    if(arquivo_foto_usuario.files.length > 0) { 
        const tipo = arquivo_foto_usuario.files[0].type
        const formatos = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
        if(!formatos.includes(tipo)) { 
            alert('esse formato não é permitido!')
            return
        }
        var foto_usuario = document.getElementById('foto_usuario')
        foto_usuario.style.backgroundImage = 'url(' + URL.createObjectURL(arquivo_foto_usuario.files[0]) + ")"
    }
})
toggle_opcoes_usuario.addEventListener('click', () => {
    var container_opcoes_usuario = document.getElementById('opções_usuário')
    var seta_menu_opcoes_usuario = document.getElementById('seta_menu_opcoes_usuario')
    var conteudo_opcoes_usuario = document.getElementById('conteudo_opcoes_usuario') 
    if(container_opcoes_usuario.style.width == '35%') { 
        conteudo_opcoes_usuario.style.display = 'none'
        container_opcoes_usuario.style.width = '5%'
        toggle_opcoes_usuario.style.width = '100%'
        seta_menu_opcoes_usuario.src = 'Imagens/seta_direita.png'
    }
    else { 
        conteudo_opcoes_usuario.style.display = 'flex'
        container_opcoes_usuario.style.width = '35%'
        toggle_opcoes_usuario.style.width = '10%'
        seta_menu_opcoes_usuario.src = 'Imagens/seta_esquerda.png'
    }
})