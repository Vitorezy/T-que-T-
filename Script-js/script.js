    
    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    var conteudo = document.getElementById("conteudo")
    var nav_aberta = document.getElementById('nav_aberta')
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
    })
    Header.addEventListener('mouseleave', () => {  
        nav_aberta.style.height = "0%"
    });
    
    