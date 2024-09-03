    
    var body = document.getElementById('inicio')
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    var conteudo = document.getElementById("conteudo")
    var nav_aberta = document.getElementById('nav_aberta') 
    var caixa_login = document.getElementById('caixa_login')
    var botão_abrir_login = document.getElementById('botão_abrir_login')
    var fechar_login = document.getElementById('fechar_login')
    fechar_login.addEventListener('click', ()=> { 
        caixa_login.style.display = 'none'
    })
    botão_abrir_login.addEventListener('click', () => { 
        if(caixa_login.style.display == 'none') { 
            caixa_login.style.display = 'block'
        }
        else { 
            caixa_login.style.display = 'none'
        }
    })
    Navbar.addEventListener('click', () => { 
        if(nav_aberta.style.height == "0%") { 
            nav_aberta.style.height = "35%"
        }
        else { 
            nav_aberta.style.height = "0%"
        }
    });  
    main.addEventListener('click', ()=> { 
        nav_aberta.style.height = "0%"

    });
    Header.addEventListener('mouseleave', () => {  
        nav_aberta.style.height = "0%"
    });
    
    