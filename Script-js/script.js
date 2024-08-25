    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    var conteudo = document.getElementById("conteudo")
    var nav_aberta = document.getElementById('nav_aberta')
    Navbar.addEventListener('click', () => { 

            nav_aberta.style.visibility = "visible"

    });  
    Navbar.addEventListener('dblclick', () => { 

        nav_aberta.style.visibility = "hidden"

});  
    main.addEventListener('click', ()=> { 
        nav_aberta.style.visibility = "hidden"
    })
    nav_aberta.addEventListener('mouseleave', () => { 
        
        nav_aberta.style.visibility = "hidden"
    });
    
    