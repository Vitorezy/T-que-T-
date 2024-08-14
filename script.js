    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    var imagem_exibição_nav = document.getElementById('imagem_exibição_nav')
    Navbar.addEventListener('click', () => { 
        Header.style.height = "30%"
        Navbar.style.height = "70%"
        main.style.top = "36.5%"
        imagem_exibição_nav.style.visibility = "visible"
    })   
    Navbar.addEventListener('mouseleave', () => { 
        Header.style.height = "11%"
        Navbar.style.height = "20%"
        main.style.top = "18%"
        imagem_exibição_nav.style.visibility = "hidden"
    })
    
    