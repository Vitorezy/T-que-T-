    
    var Navbar = document.querySelector("nav")
    var Header = document.querySelector("header")
    var main = document.querySelector('main')
    Header.addEventListener('mouseover', () => { 
        Header.style.height = "300px"
        Navbar.style.height = "200px"
        main.style.top = "300px"
    })   
    Navbar.addEventListener('mouseleave', () => { 
        Header.style.height = "100px"
        Navbar.style.height = "20px"
        main.style.top = "100px"
    })
    
    