var card_home1 = document.getElementById("card_home1");
var testeanimation = 0
//função que identifica qual animação acionar nos cards
card_home1.addEventListener("mouseenter", () => {
    testeanimation = testeanimation+1
    if(testeanimation%2 == 0) { 
        card_home1.style.animationPlayState = "running"
        card_home1.style.animationName = 'girar_card1_inverso'

    } else if (testeanimation%2 != 0) { 
        card_home1.style.animationPlayState = "running"
        card_home1.style.animationName = 'girar_card1'
    }
});

