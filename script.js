    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    var imagem_exibição_nav = document.getElementById('imagem_exibição_nav')
    var nav_aberta = document.getElementById('nav_aberta')
    Navbar.addEventListener('click', () => { 
        nav_aberta.style.visibility = "visible"
        imagem_exibição_nav.style.visibility = "visible"
    })   
    nav_aberta.addEventListener('mouseleave', () => { 
        nav_aberta.style.visibility = "hidden"
        imagem_exibição_nav.style.visibility = "hidden" 
    })
    
    