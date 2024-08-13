    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    Navbar.addEventListener('click', () => { 
        Header.style.height = "30%"
        Navbar.style.height = "70%"
        main.style.top = "36.5%"
    })   
    Navbar.addEventListener('mouseleave', () => { 
        Header.style.height = "11%"
        Navbar.style.height = "20px"
        main.style.top = "17.5%"
    })
    
    