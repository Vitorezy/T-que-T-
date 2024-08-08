var navbar = document.getElementById("navbar_expansão_corpo")
var navbar_expansão_camisas = document.getElementById("navbar_expansão_camisas")
var navbar_expansão_blusa = document.getElementById("navbar_expansão_blusa")
var navbar_expansão_calças = document.getElementById("navbar_expansão_calças")
var navbar_expansão_calçados = document.getElementById("navbar_expansão_calçados")
var navbar_expansão_bolsas = document.getElementById("navbar_expansão_bolsas")
function navbar_expansão_blusa_função() { 
    navbar.style.visibility = "visible" 
    navbar_expansão_blusa.style.visibility = "visible"
    navbar_expansão_bolsas .style.visibility = "hidden"
    navbar_expansão_calçados.style.visibility = "hidden"
    navbar_expansão_calças.style.visibility = "hidden"
    navbar_expansão_camisas.style.visibility = "hidden"
}
function navbar_expansão_calças_função() { 
    navbar.style.visibility = "visible" 
    navbar_expansão_calças.style.visibility = "visible"
    navbar_expansão_bolsas .style.visibility = "hidden"
    navbar_expansão_calçados.style.visibility = "hidden"
    navbar_expansão_camisas.style.visibility = "hidden"
    navbar_expansão_blusa.style.visibility = "hidden"
}
function navbar_expansão_calçados_função() { 
    navbar.style.visibility = "visible" 
    navbar_expansão_calçados.style.visibility = "visible"
    navbar_expansão_bolsas .style.visibility = "hidden"
    navbar_expansão_calças.style.visibility = "hidden"
    navbar_expansão_camisas.style.visibility = "hidden"
    navbar_expansão_blusa.style.visibility = "hidden"
}
function navbar_expansão_bolsas_função() { 
    navbar.style.visibility = "visible" 
    navbar_expansão_bolsas.style.visibility = "visible"
    navbar_expansão_calçados.style.visibility = "hidden"
    navbar_expansão_calças.style.visibility = "hidden"
    navbar_expansão_camisas.style.visibility = "hidden"
    navbar_expansão_blusa.style.visibility = "hidden"
}
function navbar_expansão_camisas_função() { 
    navbar.style.visibility = "visible" 
    navbar_expansão_camisas.style.visibility = "visible"
    navbar_expansão_bolsas .style.visibility = "hidden"
    navbar_expansão_calçados.style.visibility = "hidden"
    navbar_expansão_calças.style.visibility = "hidden"
    navbar_expansão_blusa.style.visibility = "hidden"
}
function navbar_fechar_função() { 
    navbar.style.visibility = "hidden" 
    navbar_expansão_bolsas .style.visibility = "hidden"
    navbar_expansão_calçados.style.visibility = "hidden"
    navbar_expansão_calças.style.visibility = "hidden"
    navbar_expansão_camisas.style.visibility = "hidden"
    navbar_expansão_blusa.style.visibility = "hidden"
    
}