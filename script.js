    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    var conteudo = document.getElementById("conteudo")
    var nav_aberta = document.getElementById('nav_aberta')
    Navbar.addEventListener('click', () => { 
        if(nav_aberta.style.visibility ="hidden") { 
            nav_aberta.style.visibility = "visible"
        }
        else if (nav_aberta.style.visibility ="visible") { 
            nav_aberta.style.visibility = "hidden"
        }
    });  
    nav_aberta.addEventListener('mouseleave', () => { 
        
        nav_aberta.style.visibility = "hidden"
    });
    
    