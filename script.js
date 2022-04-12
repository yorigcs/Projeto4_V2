let card1, card2;
let countClicks = 0;

function cardsNumber() {
    let cardsNb;
    do {
      cardsNb =  prompt('Quntas cartas deseja jogar?');
    } while ((cardsNb % 2 !== 0) && (cardsNb < 4 || cardsNb > 14));
    return cardsNb;
}


function gifsF() {

    let cards = cardsNumber();

    const gifs = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot'];
    const gifsShuffle = [];

    for(let i = 0; i < cards/2;i++) {
        gifsShuffle.push(gifs[i]);
        gifsShuffle.push(gifs[i]);
    }

    gifsShuffle.sort(shuffle);

    function shuffle() { 
        return Math.random() - 0.5; 
    }

    return gifsShuffle;

}

function addElementToHTML() {
    
    let gifs = gifsF();
    let elementHTML = document.querySelector('article');
    for(let i =0; i < gifs.length; i++) {
        elementHTML.innerHTML +=
        `<div class="card" onclick="swapCard(this)"> 
            <span class="face front">
                <img src="/imgs/front.png" alt="front ${i}" />
            </span>

            <span class="face back">
                <img src="/imgs/${gifs[i]}.gif" alt="${gifs[i]}" />
            </span>
        </div>`;
    }
}

addElementToHTML();

function swapCard(element) {
    

    element.querySelector('.front').classList.add('click');
    element.querySelector('.back').classList.add('click');
    let img =element.querySelector('.back img').src
    
    if(card1) {
        card2 = img;
    } else {
        card1 = img
    }
    

    console.log(card1,card2);
}